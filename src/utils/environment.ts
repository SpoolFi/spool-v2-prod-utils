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
