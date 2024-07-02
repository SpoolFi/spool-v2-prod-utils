export type BlockTag = 'latest' | number;

export function parseBlock(block: string): 'latest' | number {
    if (block === 'latest') {
        return block;
    }

    const parsed = parseInt(block);
    if (isNaN(parsed)) {
        throw new Error(`Invalid block number: ${block}`);
    }

    return parsed;
}
