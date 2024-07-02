export function getStringByPath(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    envData: any,
    path: string[],
): string {
    let obj = envData;
    for (const key of path) {
        if (obj[key] === undefined) {
            throw new Error(
                `Value for ${path.join('.')} not found in contracts file.`,
            );
        }
        obj = obj[key];
    }

    if (typeof obj !== 'string') {
        throw new Error(`Value for ${path.join('.')} is not a string.`);
    }

    return obj;
}

export function getPathByValue(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    envData: any,
    value: string | number,
): string[] {
    const path = [];

    for (const key of Object.keys(envData)) {
        path.push(key);

        if (envData[key] === value) {
            return path;
        }

        if (typeof envData[key] === 'object') {
            const subPath = getPathByValue(envData[key], value);
            if (subPath.length > 0) {
                return path.concat(subPath);
            }
        }

        path.pop();
    }

    return [];
}

export class ContractResolver {
    readonly contracts: unknown;

    constructor(contracts: unknown) {
        this.contracts = contracts;
    }

    ghostStrategyProxy(): string {
        return getStringByPath(this.contracts, ['GhostStrategy', 'proxy']);
    }
}
