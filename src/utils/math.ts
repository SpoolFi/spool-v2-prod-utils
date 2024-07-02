export function weightedAverage(weights: bigint[], values: bigint[]): bigint {
    if (weights.length !== values.length) {
        throw new Error('Weights and values arrays must be of the same length');
    }

    const totalAllocation = weights.reduce((a, b) => a + b, 0n);

    let result = weights.reduce((acc, cur, idx) => acc + cur * values[idx], 0n);
    result = result / totalAllocation;

    return result;
}
