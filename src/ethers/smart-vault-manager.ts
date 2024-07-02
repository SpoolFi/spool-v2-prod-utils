import { ethers } from 'ethers';
import {
    SmartVaultManagerAbi,
    SmartVaultManagerAbi__factory,
} from '../../typechain/generated';
import { BlockTag } from '../utils/block';
import { unpackUint16a16 } from '../utils/packed-arrays';

export class SmartVaultManager {
    readonly address: string;
    readonly contract: SmartVaultManagerAbi;

    constructor(address: string, provider: ethers.JsonRpcProvider) {
        this.address = address;
        this.contract = SmartVaultManagerAbi__factory.connect(
            address,
            provider,
        );
    }

    // view

    async allocations(
        smartVault: string,
        blockTag: BlockTag,
        numStrategies?: number,
    ): Promise<bigint[]> {
        const result = await this.contract.allocations(smartVault, {
            blockTag,
        });

        return unpackUint16a16(result, numStrategies);
    }

    async strategies(
        smartVault: string,
        blockTag: BlockTag,
    ): Promise<string[]> {
        const result = await this.contract.strategies(smartVault, { blockTag });

        return [...result];
    }
}
