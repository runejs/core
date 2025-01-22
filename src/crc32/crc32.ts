import type { ByteBuffer } from '../buffer';

// biome-ignore lint/complexity/noStaticOnlyClass: Legacy
export class Crc32 {
    public static crcLookupTable: number[] = new Array(256);

    public static update(
        offset: number,
        size: number,
        data: ByteBuffer | Buffer | Uint8Array | number[],
    ): number {
        let crc = -1;

        for (let currentByte = offset; currentByte < size; currentByte++) {
            const tableIndex = 0xff & (crc ^ data[currentByte]);
            crc = Crc32.crcLookupTable[tableIndex] ^ (crc >>> 8);
        }

        crc ^= 0xffffffff;
        return crc;
    }

    public static init(): void {
        for (let i = 0; i < 256; i++) {
            let currentByte = i;

            for (let bit = 0; bit < 8; bit++) {
                if ((currentByte & 0x1) !== 1) {
                    currentByte >>>= 1;
                } else {
                    currentByte = -306674912 ^ (currentByte >>> 1);
                }
            }

            Crc32.crcLookupTable[i] = currentByte;
        }
    }
}
