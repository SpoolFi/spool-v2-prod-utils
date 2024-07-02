import { ethers } from 'ethers';
import {
    StrategyRegistryAbi,
    StrategyRegistryAbi__factory,
} from '../../typechain/generated';
import { BlockTag } from '../utils/block';

export class StrategyRegistry {
    readonly address: string;
    readonly contract: StrategyRegistryAbi;

    constructor(address: string, provider: ethers.JsonRpcProvider) {
        this.address = address;
        this.contract = StrategyRegistryAbi__factory.connect(address, provider);
    }

    // view

    async strategyApys(
        strategies: string[],
        blockTag: BlockTag,
    ): Promise<bigint[]> {
        const result = await this.contract.strategyAPYs(strategies, {
            blockTag,
        });

        return [...result];
    }
}
