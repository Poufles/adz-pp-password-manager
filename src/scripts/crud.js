import Encryption from "./password-encryption";
import StorageHandler from "./storage-handler";

export async function CreateNewKeyItem({ name, email, key, website, fav = false, hint = '', folder = '' }) {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const keys = sessionStorage.keys;

    // Get master key
    const masterkey = sessionStorage.masterkey;
    // Derive master key
    // const derivationKey = Encryption.extractKeyFromHash(masterkey);
    // Encrypt key
    const encryptedKey = await Encryption.encryptData(masterkey, key);
    // Create new item
    const newKeyItem = {
        name,
        email,
        key: encryptedKey,
        website,
        fav,
        hint,
        folder,
        isRecent: true,
        openedAt: 'none'
    };

    // Store new item in session storage
    keys.push(newKeyItem);
    StorageHandler.UpdateSessionStorage(sessionStorage);
    // Get index of new item
    const index = keys.length - 1;
    
    // Get local storage 
    const storage = StorageHandler.GetLocalStorage();
    const accounts = storage.app.accounts;
    // Iterate over storage
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].inSession) {
            storage.app.accounts[i] = StorageHandler.GetSessionStorage();
            StorageHandler.UpdateLocalStorage(storage);
            return {
                item: newKeyItem,
                index
            };
        }
    }
};

export function ReadKeyItem(index) {

}