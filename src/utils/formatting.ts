import { FULL_PERCENT, YIELD_FULL_PERCENT } from '../solidity-constants';

export function formatDecimals(
    value: bigint,
    valueDecimals: number,
    formattedDecimals?: number,
): string {
    const isNegative = value < 0n;
    const prefix = isNegative ? '-' : '';

    const toFormat = isNegative ? -value : value;

    const one = 10n ** BigInt(valueDecimals);

    const integerPart = toFormat / one;
    const integerPartString = integerPart.toString();

    if (formattedDecimals === 0) {
        return `${prefix}${integerPartString}`;
    }

    const decimalPart = toFormat % one;
    let decimalPartString = decimalPart.toString().padStart(valueDecimals, '0');
    if (formattedDecimals !== undefined) {
        if (formattedDecimals < valueDecimals) {
            decimalPartString = decimalPartString.slice(0, formattedDecimals);
        } else {
            decimalPartString = decimalPartString.padEnd(
                formattedDecimals,
                '0',
            );
        }
    }

    return `${prefix}${integerPartString}.${decimalPartString}`;
}

export function formatAllocation(apy: bigint): string {
    const allocationDecimals = FULL_PERCENT.toString().length - 3;

    return formatDecimals(apy, allocationDecimals, 2);
}

export function formatApy(apy: bigint): string {
    const apyDecimals = YIELD_FULL_PERCENT.toString().length - 3;

    return formatDecimals(apy, apyDecimals, 2);
}

export function formatRiskScore(riskScore: bigint): string {
    return formatDecimals(riskScore, 1, 1);
}
