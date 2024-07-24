import { Command, Option } from 'commander';
import dotenv from 'dotenv';
import { ethers } from 'ethers';
import { ContractFactory } from '../src/ethers/contract-factory';
import { compareAddresses } from '../src/utils/address';
import { normalizeAllocation } from '../src/utils/allocation';
import { BlockTag, parseBlock } from '../src/utils/block';
import { ContractResolver, getPathByValue } from '../src/utils/env-data';
import {
    environments,
    getContractsFile,
    getRpcUrlFromEnvVars,
} from '../src/utils/environment';
import {
    formatAllocation,
    formatApy,
    formatRiskScore,
} from '../src/utils/formatting';
import { weightedAverage } from '../src/utils/math';

async function main(
    environment: string,
    contracts: unknown,
    rpcUrl: string,
    smartVaultAddress: string,
    targetBlock: BlockTag,
): Promise<void> {
    console.log(
        `Getting information for smart vault ${smartVaultAddress} on ${environment} at block ${targetBlock}...`,
    );

    const info = await getInfo(
        contracts,
        rpcUrl,
        smartVaultAddress,
        targetBlock,
    );

    const formattedInfo = formatInfo(info);

    console.log(`\n${formattedInfo}`);
}

type Info = InfoDynamic | InfoStatic;

interface InfoDynamic {
    type: 'dynamic';
    smartVault: {
        address: string;
        name: string;
        allocationProvider: {
            address: string;
            name: string;
        };
        riskProvider: string;
        riskTolerance: bigint;
        apy: {
            pre: bigint;
            post: bigint;
        };
        riskScore: {
            pre: bigint;
            post: bigint;
        };
    };
    strategies: {
        address: string;
        name: string;
        riskScore: bigint;
        apy: bigint;
        allocation: {
            pre: bigint;
            post: bigint;
        };
    }[];
}

interface InfoStatic {
    type: 'static';
    smartVault: {
        address: string;
        name: string;
        apy: bigint;
    };
    strategies: {
        address: string;
        name: string;
        apy: bigint;
        allocation: bigint;
    }[];
}

export async function getInfo(
    contracts: unknown,
    rpcUrl: string,
    smartVaultAddress: string,
    targetBlock: BlockTag,
): Promise<Info> {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const contractFactory = new ContractFactory(contracts, provider);

    const riskManager = contractFactory.riskManager();

    const riskProviderAddress = await riskManager.getRiskProvider(
        smartVaultAddress,
        targetBlock,
    );

    if (compareAddresses(riskProviderAddress, ethers.ZeroAddress)) {
        return await getInfoStatic(
            contracts,
            rpcUrl,
            smartVaultAddress,
            targetBlock,
        );
    } else {
        return await getInfoDynamic(
            contracts,
            rpcUrl,
            smartVaultAddress,
            targetBlock,
        );
    }
}

async function getInfoDynamic(
    contracts: unknown,
    rpcUrl: string,
    smartVaultAddress: string,
    targetBlock: BlockTag,
): Promise<InfoDynamic> {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const contractFactory = new ContractFactory(contracts, provider);
    const contractResolver = new ContractResolver(contracts);

    const smartVault = contractFactory.smartVault(smartVaultAddress);
    const smartVaultManager = contractFactory.smartVaultManager();
    const strategyRegistry = contractFactory.strategyRegistry();
    const riskManager = contractFactory.riskManager();

    const smartVaultName = await smartVault.vaultName(targetBlock);
    const riskProviderAddress = await riskManager.getRiskProvider(
        smartVaultAddress,
        targetBlock,
    );
    const riskTolerance = await riskManager.getRiskTolerance(
        smartVaultAddress,
        targetBlock,
    );
    const allocationProviderAddress = await riskManager.getAllocationProvider(
        smartVaultAddress,
        targetBlock,
    );
    const allocationProviderName =
        getPathByValue(contracts, allocationProviderAddress)[0] ?? 'unknown';

    const ghostStrategyAddress = contractResolver.ghostStrategyProxy();
    const allStrategies = await smartVaultManager.strategies(
        smartVaultAddress,
        targetBlock,
    );
    const strategies = allStrategies.filter(
        (s) => !compareAddresses(s, ghostStrategyAddress),
    );
    const strategyNames: string[] = [];
    for (const strategyAddress of strategies) {
        const strategy = contractFactory.strategy(strategyAddress);
        const strategyName = await strategy.strategyName(targetBlock);
        strategyNames.push(strategyName);
    }

    const strategyRiskScores = await riskManager.getRiskScores(
        riskProviderAddress,
        strategies,
        targetBlock,
    );

    const strategyApys = await strategyRegistry.strategyApys(
        strategies,
        targetBlock,
    );

    let strategyAllocationsPre = (
        await smartVaultManager.allocations(
            smartVaultAddress,
            targetBlock,
            allStrategies.length,
        )
    ).filter((_, i) => strategies.includes(allStrategies[i]));
    strategyAllocationsPre = normalizeAllocation(strategyAllocationsPre);
    let strategyAllocationsPost = await riskManager.calculateAllocation(
        smartVaultAddress,
        strategies,
        targetBlock,
    );
    strategyAllocationsPost = normalizeAllocation(strategyAllocationsPost);

    const apyPre = weightedAverage(strategyAllocationsPre, strategyApys);
    const apyPost = weightedAverage(strategyAllocationsPost, strategyApys);

    const riskScorePre = weightedAverage(
        strategyAllocationsPre,
        strategyRiskScores,
    );
    const riskScorePost = weightedAverage(
        strategyAllocationsPost,
        strategyRiskScores,
    );

    return {
        type: 'dynamic',
        smartVault: {
            address: smartVaultAddress,
            name: smartVaultName,
            allocationProvider: {
                address: allocationProviderAddress,
                name: allocationProviderName,
            },
            riskProvider: riskProviderAddress,
            riskTolerance,
            apy: {
                pre: apyPre,
                post: apyPost,
            },
            riskScore: {
                pre: riskScorePre,
                post: riskScorePost,
            },
        },
        strategies: strategies.map((address, i) => ({
            address,
            name: strategyNames[i],
            riskScore: strategyRiskScores[i],
            apy: strategyApys[i],
            allocation: {
                pre: strategyAllocationsPre[i],
                post: strategyAllocationsPost[i],
            },
        })),
    };
}

async function getInfoStatic(
    contracts: unknown,
    rpcUrl: string,
    smartVaultAddress: string,
    targetBlock: BlockTag,
): Promise<InfoStatic> {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const contractFactory = new ContractFactory(contracts, provider);
    const contractResolver = new ContractResolver(contracts);

    const smartVault = contractFactory.smartVault(smartVaultAddress);
    const smartVaultManager = contractFactory.smartVaultManager();
    const strategyRegistry = contractFactory.strategyRegistry();

    const smartVaultName = await smartVault.vaultName(targetBlock);

    const ghostStrategyAddress = contractResolver.ghostStrategyProxy();
    const allStrategies = await smartVaultManager.strategies(
        smartVaultAddress,
        targetBlock,
    );
    const strategies = allStrategies.filter(
        (s) => !compareAddresses(s, ghostStrategyAddress),
    );
    const strategyNames: string[] = [];
    for (const strategyAddress of strategies) {
        const strategy = contractFactory.strategy(strategyAddress);
        const strategyName = await strategy.strategyName(targetBlock);
        strategyNames.push(strategyName);
    }

    const strategyApys = await strategyRegistry.strategyApys(
        strategies,
        targetBlock,
    );

    let strategyAllocations = await smartVaultManager.allocations(
        smartVaultAddress,
        targetBlock,
        allStrategies.length,
    );
    strategyAllocations = normalizeAllocation(strategyAllocations);

    const apy = weightedAverage(strategyAllocations, strategyApys);

    return {
        type: 'static',
        smartVault: {
            address: smartVaultAddress,
            name: smartVaultName,
            apy,
        },
        strategies: strategies.map((address, i) => ({
            address,
            name: strategyNames[i],
            apy: strategyApys[i],
            allocation: strategyAllocations[i],
        })),
    };
}

function formatInfo(info: Info) {
    if (info.type === 'dynamic') {
        return formatInfoDynamic(info);
    } else {
        return formatInfoStatic(info);
    }
}

function formatInfoDynamic(info: InfoDynamic): string {
    const strategyNameMaxLength = Math.max(
        ...info.strategies.map((s) => s.name.length),
    );

    const lines: string[] = [];

    lines.push('Smart vault:');
    lines.push(`  address: ${info.smartVault.address}`);
    lines.push(`  name: ${info.smartVault.name}`);
    lines.push(
        `  allocation provider: ${info.smartVault.allocationProvider.name} @ ${info.smartVault.allocationProvider.address}`,
    );
    lines.push(`  risk provider: ${info.smartVault.riskProvider}`);
    lines.push(`  risk tolerance: ${info.smartVault.riskTolerance}`);
    lines.push(
        `  apy [%]: ${formatApy(info.smartVault.apy.pre)} -> ${formatApy(info.smartVault.apy.post)}`,
    );
    lines.push(
        `  risk score: ${formatRiskScore(info.smartVault.riskScore.pre)} -> ${formatRiskScore(info.smartVault.riskScore.post)}`,
    );
    lines.push('');
    lines.push('Strategies:');
    lines.push(
        [
            '  ' + 'address'.padEnd(42, ' '),
            'name'.padEnd(strategyNameMaxLength, ' '),
            'risk score',
            'apy [%]',
            'allocation pre [%]',
            'allocation post [%]',
        ].join(', '),
    );
    for (const strategyInfo of info.strategies) {
        lines.push(
            [
                '  ' + strategyInfo.address,
                strategyInfo.name.padEnd(strategyNameMaxLength, ' '),
                formatRiskScore(strategyInfo.riskScore).padStart(10, ' '),
                formatApy(strategyInfo.apy).padStart(7, ' '),
                formatAllocation(strategyInfo.allocation.pre).padStart(18, ' '),
                formatAllocation(strategyInfo.allocation.post).padStart(
                    19,
                    ' ',
                ),
            ].join(', '),
        );
    }

    return lines.join('\n');
}

function formatInfoStatic(info: InfoStatic): string {
    const strategyNameMaxLength = Math.max(
        ...info.strategies.map((s) => s.name.length),
    );

    const lines: string[] = [];

    lines.push('Smart vault:');
    lines.push(`  address: ${info.smartVault.address}`);
    lines.push(`  name: ${info.smartVault.name}`);
    lines.push(`  allocation: static`);
    lines.push(`  apy [%]: ${formatApy(info.smartVault.apy)}`);
    lines.push('');
    lines.push('Strategies:');
    lines.push(
        [
            '  ' + 'address'.padEnd(42, ' '),
            'name'.padEnd(strategyNameMaxLength, ' '),
            'apy [%]',
            'allocation [%]',
        ].join(', '),
    );
    for (const strategyInfo of info.strategies) {
        lines.push(
            [
                '  ' + strategyInfo.address,
                strategyInfo.name.padEnd(strategyNameMaxLength, ' '),
                formatApy(strategyInfo.apy).padStart(7, ' '),
                formatAllocation(strategyInfo.allocation).padStart(14, ' '),
            ].join(', '),
        );
    }

    return lines.join('\n');
}

if (require.main === module) {
    (async () => {
        dotenv.config();

        const program = new Command();
        program
            .description(
                'Get information about strategy allocation and the APY of the smart vault.',
            )
            .argument('<smart-vault-address>', 'Address of the smart vault.')
            .addOption(
                new Option(
                    '-e, --environment <environment>',
                    'Deployment environment.',
                )
                    .choices(environments)
                    .default('mainnet'),
            )
            .option(
                '-b, --block <block>',
                'Target block number.',
                parseBlock,
                'latest',
            );
        program.parse();

        const options = program.opts();
        const smartVaultAddress = program.args[0];
        const environment =
            options.environment as (typeof environments)[number];
        const block = options.block as BlockTag;

        const rpcUrl = getRpcUrlFromEnvVars(environment);
        const contracts = getContractsFile(environment);

        await main(environment, contracts, rpcUrl, smartVaultAddress, block);

        process.exit(0);
    })();
}
