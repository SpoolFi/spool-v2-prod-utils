import { ethers } from 'ethers';
import {
    SmartVaultAbi,
    SmartVaultAbi__factory,
} from '../../typechain/generated';
import { BlockTag } from '../utils/block';

export class SmartVault {
    readonly address: string;
    readonly contract: SmartVaultAbi;

    constructor(address: string, provider: ethers.JsonRpcProvider) {
        this.address = address;
        this.contract = SmartVaultAbi__factory.connect(address, provider);
    }

    // view

    assetGroupId(blockTag: BlockTag): Promise<bigint> {
        return this.contract.assetGroupId({ blockTag });
    }

    vaultName(blockTag: BlockTag): Promise<string> {
        return this.contract.vaultName({ blockTag });
    }
}
