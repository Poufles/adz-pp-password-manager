import bcrypt from "bcryptjs";

const Encryption = function () {

    const hashPassword = async (password) => {
        try {
            const saltRounds = 10;
            const hash = await bcrypt.hash(password, saltRounds);
            return hash;
        } catch (err) {
            console.error("Error during hashing:", err);
            throw err;
        }
    };

    const comparePassword = async (password, hash) => {
        try {
            const isMatch = await bcrypt.compare(password, hash);
            return isMatch;
        } catch (err) {
            console.error("Error during comparison:", err);
            throw err;
        }
    };

    async function deriveKey(password) {
        const encoder = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey(
            "raw",
            encoder.encode(password),
            { name: "PBKDF2" },
            false,
            ["deriveKey"]
        );
        return await crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: encoder.encode("unique-salt"), 
                iterations: 100000,
                hash: "SHA-256",
            },
            keyMaterial,
            { name: "AES-GCM", length: 256 },
            false,
            ["encrypt", "decrypt"]
        );
    }

    async function encryptData(password, data) {
        const key = await deriveKey(password);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const encodedData = new TextEncoder().encode(data);
        const encrypted = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv },
            key,
            encodedData
        );
        return JSON.stringify({
            iv: Array.from(iv),
            encrypted: Array.from(new Uint8Array(encrypted))
        });
    }

    async function decryptData(password, encryptedData) {
        const key = await deriveKey(password);
        const data = JSON.parse(encryptedData);
        const iv = new Uint8Array(data.iv);
        const encrypted = new Uint8Array(data.encrypted);
        const decrypted = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv },
            key,
            encrypted
        );
        return new TextDecoder().decode(decrypted);
    }

    function extractKeyFromHash(hashedMasterKey) {
        return hashedMasterKey.slice(10, 42); 
    }

    return {
        hashPassword,
        comparePassword,
        encryptData,
        decryptData,
        extractKeyFromHash
    }

}();

export default Encryption;
// Used ChatGPT to understand and copy this code