import { FULL_PERCENT } from '../solidity-constants';

export function normalizeAllocation(allocation: bigint[]): bigint[] {
    let totalAllocation = allocation.reduce((acc, cur) => acc + cur, 0n);
    let totalPercentage = FULL_PERCENT;

    const normalized: bigint[] = [];
    for (const alloc of allocation) {
        if (totalPercentage === 0n) {
            // handle case when previous strategies have taken all the allocation
            normalized.push(0n);
            continue;
        }

        const value = (totalPercentage * alloc) / totalAllocation;

        normalized.push(value);
        totalAllocation -= alloc;
        totalPercentage -= value;
    }

    return normalized;
}
