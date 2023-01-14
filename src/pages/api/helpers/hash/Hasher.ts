import crypto from 'crypto';
import argon2 from 'argon2';

class Hasher {
    static async hash(hashable: string): Promise<string> {
        const hash = await argon2.hash(hashable, {
            salt: crypto.randomBytes(16),
            type: argon2.argon2id,
        });

        return hash;
    }

    static async verify(hash: string, verification: string): Promise<boolean> {
        return argon2.verify(hash, verification, {
            type: argon2.argon2id,
        });
    }
}
export default Hasher;
