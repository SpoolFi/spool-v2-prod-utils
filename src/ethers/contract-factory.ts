import { ethers } from 'ethers';
import { getStringByPath } from '../utils/env-data';
import { RiskManager } from './risk-manager';
import { SmartVault } from './smart-vault';
import { SmartVaultManager } from './smart-vault-manager';
import { StrategyRegistry } from './strategy-registry';
import { Strategy } from './strategy';

export class ContractFactory {
    readonly contracts: unknown;
    readonly provider: ethers.JsonRpcProvider;

    constructor(contracts: unknown, provider: ethers.JsonRpcProvider) {
        this.contracts = contracts;
        this.provider = provider;
    }

    riskManager(): RiskManager {
        return new RiskManager(
            getStringByPath(this.contracts, ['RiskManager', 'proxy']),
            this.provider,
        );
    }

    smartVault(address: string): SmartVault {
        return new SmartVault(address, this.provider);
    }

    smartVaultManager(): SmartVaultManager {
        return new SmartVaultManager(
            getStringByPath(this.contracts, ['SmartVaultManager', 'proxy']),
            this.provider,
        );
    }

    strategy(address: string): Strategy {
        return new Strategy(address, this.provider);
    }

    strategyRegistry(): StrategyRegistry {
        return new StrategyRegistry(
            getStringByPath(this.contracts, ['StrategyRegistry', 'proxy']),
            this.provider,
        );
    }
}
