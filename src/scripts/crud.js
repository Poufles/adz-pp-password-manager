import Encryption from "./password-encryption";
import StorageHandler from "./storage-handler";

/**
 * Creates new key item and registers it to the storage
 * @param {Object} data - Object passed to create a new key item 
 * @returns An object with properties of item and index
 */
export async function CreateNewKeyItem(data) {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const keys = sessionStorage.keys;

    // Get master key
    const masterkey = sessionStorage.masterkey;
    // Encrypt key
    const encryptedKey = await Encryption.encryptData(masterkey, data.key);
    // Create new item
    const newKeyItem = {
        name: data.name,
        email: data.email,
        key: encryptedKey,
        website: data.website,
        fav: data.fav,
        hint: data.hint,
        folder: data.folder,
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

// export async function CreateNewKeyItem({ name, email, key, website, fav = false, hint = '', folder = '' }) {
//     const sessionStorage = StorageHandler.GetSessionStorage();
//     const keys = sessionStorage.keys;

//     // Get master key
//     const masterkey = sessionStorage.masterkey;
//     // Derive master key
//     // const derivationKey = Encryption.extractKeyFromHash(masterkey);
//     // Encrypt key
//     const encryptedKey = await Encryption.encryptData(masterkey, key);
//     // Create new item
//     const newKeyItem = {
//         name,
//         email,
//         key: encryptedKey,
//         website,
//         fav,
//         hint,
//         folder,
//         isRecent: true,
//         openedAt: 'none'
//     };

//     // Store new item in session storage
//     keys.push(newKeyItem);
//     StorageHandler.UpdateSessionStorage(sessionStorage);
//     // Get index of new item
//     const index = keys.length - 1;
    
//     // Get local storage 
//     const storage = StorageHandler.GetLocalStorage();
//     const accounts = storage.app.accounts;
//     // Iterate over storage
//     for (let i = 0; i < accounts.length; i++) {
//         if (accounts[i].inSession) {
//             storage.app.accounts[i] = StorageHandler.GetSessionStorage();
//             StorageHandler.UpdateLocalStorage(storage);
//             return {
//                 item: newKeyItem,
//                 index
//             };
//         }
//     }
// };

export function UpdateKeyItem(index) {

}