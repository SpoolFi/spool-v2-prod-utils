const MAX_UINT_16 = 2n ** 16n - 1n;
const MAX_UINT_256 = 2n ** 256n - 1n;

export function packUint16a16(toPack: bigint[]): bigint {
    if (toPack.length > 16) {
        throw new Error('Cannot pack more than 16 values');
    }

    let result = 0n;
    toPack.forEach((value, index) => {
        if (value > MAX_UINT_16) {
            throw new Error(
                `Value at index ${index} is greater than ${MAX_UINT_16}`,
            );
        }

        result += value << (16n * BigInt(index));
    });

    return result;
}

export function unpackUint16a16(toUnpack: bigint, size = 16): bigint[] {
    if (toUnpack > MAX_UINT_256) {
        throw new Error(`Value to unpack is greater than ${MAX_UINT_256}`);
    }
    if (size > 16) {
        throw new Error('Cannot unpack more than 16 values');
    }

    const result: bigint[] = [];

    for (let i = 0; i < size; ++i) {
        result.push((toUnpack >> (16n * BigInt(i))) & MAX_UINT_16);
    }

    return result;
}
