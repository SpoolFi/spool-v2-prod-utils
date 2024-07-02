import { ethers } from 'ethers';
import {
    RiskManagerAbi,
    RiskManagerAbi__factory,
} from '../../typechain/generated';
import { BlockTag } from '../utils/block';
import { unpackUint16a16 } from '../utils/packed-arrays';

export class RiskManager {
    readonly address: string;
    readonly contract: RiskManagerAbi;

    constructor(address: string, provider: ethers.JsonRpcProvider) {
        this.address = address;
        this.contract = RiskManagerAbi__factory.connect(address, provider);
    }

    // view

    async calculateAllocation(
        smartVault: string,
        strategies: string[],
        blockTag: BlockTag,
    ): Promise<bigint[]> {
        const result = await this.contract.calculateAllocation(
            smartVault,
            strategies,
            { blockTag },
        );

        return unpackUint16a16(result, strategies.length);
    }

    async getAllocationProvider(
        smartVault: string,
        blockTag: BlockTag,
    ): Promise<string> {
        return this.contract.getAllocationProvider(smartVault, { blockTag });
    }

    async getRiskProvider(
        smartVault: string,
        blockTag: BlockTag,
    ): Promise<string> {
        return this.contract.getRiskProvider(smartVault, { blockTag });
    }

    async getRiskTolerance(
        smartVault: string,
        blockTag: BlockTag,
    ): Promise<bigint> {
        return this.contract.getRiskTolerance(smartVault, { blockTag });
    }

    async getRiskScores(
        riskProvider: string,
        strategies: string[],
        blockTag: BlockTag,
    ): Promise<bigint[]> {
        const result = await this.contract.getRiskScores(
            riskProvider,
            strategies,
            { blockTag },
        );

        return [...result];
    }
}
