import { ethers } from 'ethers';
import { StrategyAbi, StrategyAbi__factory } from '../../typechain/generated';
import { BlockTag } from '../utils/block';

export class Strategy {
    readonly address: string;
    readonly contract: StrategyAbi;

    constructor(address: string, provider: ethers.JsonRpcProvider) {
        this.address = address;
        this.contract = StrategyAbi__factory.connect(address, provider);
    }

    // view

    async strategyName(blockTag: BlockTag): Promise<string> {
        return await this.contract.strategyName({ blockTag });
    }
}
