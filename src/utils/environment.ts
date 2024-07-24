export const environments = ['arbitrum', 'mainnet'] as const;

export function isEnvironment(
    environment: string,
): environment is (typeof environments)[number] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return environments.includes(environment as any);
}

export function getRpcUrlFromEnvVars(environment: string): string {
    if (!isEnvironment(environment)) {
        throw new Error(`Unknown environment: ${environment}`);
    }

    switch (environment) {
        case 'arbitrum':
            if (process.env.ARBITRUM_RPC_URL === undefined) {
                throw new Error(
                    'Environmental variable ARBITRUM_RPC_URL is not set.',
                );
            }
            return process.env.ARBITRUM_RPC_URL;
        case 'mainnet':
            if (process.env.MAINNET_RPC_URL === undefined) {
                throw new Error(
                    'Environmental variable MAINNET_RPC_URL is not set.',
                );
            }
            return process.env.MAINNET_RPC_URL;
        default: {
            const _: never = environment;
            throw new Error(`Unknown environment: ${_}`);
        }
    }
}

export function getContractsFile(environment: string): unknown {
    if (!isEnvironment(environment)) {
        throw new Error(`Unknown environment: ${environment}`);
    }

    switch (environment) {
        case 'arbitrum':
            return require('../../data/arbitrum-production.contracts.json');
        case 'mainnet':
            return require('../../data/mainnet-production.contracts.json');
        default: {
            const _: never = environment;
            throw new Error(`Unknown environment: ${_}`);
        }
    }
}

export function getEndpoints(environment: string) {
    if (!isEnvironment(environment)) {
        throw new Error(`Unknown environment: ${environment}`);
    }
    let subgraph = '';
    if (environment === 'mainnet') {
        if (!process.env.MAINNET_SUBGRAPH_URL) {
            throw new Error(
                'Environmental variable MAINNET_SUBGRAPH_URL is not set.',
            );
        }
        subgraph = process.env.MAINNET_SUBGRAPH_URL;
    } else if (environment === 'arbitrum') {
        if (!process.env.ARBITRUM_SUBGRAPH_URL) {
            throw new Error(
                'Environmental variable ARBITRUM_SUBGRAPH_URL is not set.',
            );
        }
        subgraph = process.env.ARBITRUM_SUBGRAPH_URL;
    }
    if (!process.env.PRICE_FEED_URL) {
        throw new Error('Environmental variable PRICE_FEED_URL is not set.');
    }
    if (!process.env.REWARDS_URL) {
        throw new Error('Environmental variable REWARDS_URL is not set.');
    }
    if (!process.env.FAST_WITHDRAW_URL) {
        throw new Error('Environmental variable FAST_WITHDRAW_URL is not set.');
    }

    return {
        subgraph,
        pricefeed: process.env.PRICE_FEED_URL,
        rewards: process.env.REWARDS_URL,
        fastwithdraw: process.env.FAST_WITHDRAW_URL,
    };
}

export function getChainId(environment: string): number {
    if (!isEnvironment(environment)) {
        throw new Error(`Unknown environment: ${environment}`);
    }

    switch (environment) {
        case 'arbitrum':
            return 42161;
        case 'mainnet':
            return 1;
        default: {
            const _: never = environment;
            throw new Error(`Unknown environment: ${_}`);
        }
    }
}
