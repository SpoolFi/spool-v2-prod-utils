import { SDKConfig, SpoolSdk, VaultInfo } from '@spool.fi/spool-v2-sdk';
import { ethers } from '@spool.fi/spool-v2-sdk/node_modules/ethers';
import { Command, Option } from 'commander';
import dotenv from 'dotenv';
import fs from 'fs';
import {
    environments,
    getChainId,
    getContractsFile,
    getEndpoints,
    getRpcUrlFromEnvVars,
} from '../src/utils/environment';
import { formatApy } from '../src/utils/formatting';
import { getInfo } from './allocation-info';

const fetchVaults = async (spoolSdk: SpoolSdk) => {
    const vaults: VaultInfo[] = [];
    const limit = 100;
    let offset = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const fetchedVaults = await spoolSdk.listVaults({
            limit,
            offset,
        });
        vaults.push(
            ...fetchedVaults.filter(
                (vault) => vault.smartVaultStrategies.length > 1,
            ),
        );
        if (fetchedVaults.length < limit) {
            break;
        }
        offset += limit;
    }
    return vaults;
};

async function main() {
    dotenv.config();

    const program = new Command();
    program
        .description('Get smart vaults which would benefit from reallocation')
        .argument(
            '<smart-vault-factory-address>',
            'Address of the smart vault factory.',
        )
        .addOption(
            new Option(
                '-e, --environment <environment>',
                'Deployment environment.',
            )
                .choices(environments)
                .default('mainnet'),
        )
        .option(
            '--tvr <tvr>',
            'Min TVR in USD for SmartVault',
            (tvr) => Number(tvr),
            // default 100k USD
            100_000,
        )
        .option(
            '--apy <apy>',
            'Min APY gain after reallocation in percent (without decimals)',
            (apy) => apy,
            // default 15%
            '15',
        );
    program.parse();

    const options = program.opts();
    const smartVaultFactoryAddress = program.args[0];
    const environment = options.environment as (typeof environments)[number];
    const tvr = options.tvr as number;
    const apy = BigInt(options.apy.concat('0000000000'));

    console.log(
        `Checking for vaults to reallocate from factory ${smartVaultFactoryAddress} on ${environment}.\nMin TVR - ${tvr}$. Desired APY gain - ${options.apy}%`,
    );

    const endpoints = getEndpoints(environment);
    const chainId = getChainId(environment);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const contracts = getContractsFile(environment) as any;

    const config: SDKConfig = new SDKConfig(
        endpoints.subgraph,
        endpoints.pricefeed,
        endpoints.rewards,
        endpoints.fastwithdraw,
        {
            [chainId]: {
                ISmartVaultManager: contracts.SmartVaultManager.proxy,
                IDepositManager: contracts.DepositManager.proxy,
                IDepositSwap: contracts.DepositSwap.proxy,
                ISmartVaultFactory: smartVaultFactoryAddress,
                IRewardManager: contracts.RewardManager.proxy,
                IStrategyRegistry: contracts.StrategyRegistry.proxy,
                ISpoolLens: contracts.SpoolLens.proxy,
            },
        },
    );

    const rpcUrl = getRpcUrlFromEnvVars(environment);
    const spoolSdk = new SpoolSdk(
        config,
        new ethers.providers.JsonRpcProvider(rpcUrl, {
            chainId,
            name: environment,
        }),
    );

    const vaults = await fetchVaults(spoolSdk);
    const vaultsTVRs = await spoolSdk.getVaultsTVRInUSD({
        vaultAddresses: vaults.map((v) => v.address),
    });

    const vaultsForReallocation: {
        vault: string;
        name: string;
        apyGain: string;
    }[] = [];
    for (const vault of vaults) {
        if (vaultsTVRs[vault.address] > tvr) {
            try {
                const info = await getInfo(
                    getContractsFile(environment),
                    rpcUrl,
                    vault.address,
                    'latest',
                );
                if (info.type === 'dynamic') {
                    const gain =
                        info.smartVault.apy.post - info.smartVault.apy.pre;
                    if (gain >= apy) {
                        vaultsForReallocation.push({
                            vault: vault.address,
                            name: vault.name,
                            apyGain: formatApy(gain),
                        });
                    }
                } else {
                    console.log(`Not dynamic type for ${vault.address}`);
                }
            } catch (error) {
                console.log(`Encountered error for ${vault.address}: ${error}`);
            }
        }
    }

    if (vaultsForReallocation.length > 0) {
        console.log(
            `Found ${vaultsForReallocation.length} vaults for reallocation`,
        );
        fs.writeFileSync(
            `vaults-for-reallocation-${environment}.json`,
            JSON.stringify(vaultsForReallocation),
        );
    } else {
        console.log('No need for reallocation');
    }
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });
