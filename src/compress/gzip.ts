import { gunzipSync, gzipSync } from 'node:zlib';
import { ByteBuffer } from '../buffer';

// biome-ignore lint/complexity/noStaticOnlyClass: Legacy
export class Gzip {
    public static compress(buffer: ByteBuffer): ByteBuffer {
        return new ByteBuffer(gzipSync(buffer));
    }

    public static decompress(buffer: ByteBuffer): ByteBuffer {
        return new ByteBuffer(gunzipSync(buffer));
    }
}
