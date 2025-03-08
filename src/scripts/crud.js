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
    const index = keys.length;

    // Get master key
    const masterkey = sessionStorage.masterkey;
    // Encrypt key
    const encryptedKey = await Encryption.encryptData(masterkey, data.key);
    // Create new item
    const newKeyItem = {
        email: data.email,
        key: encryptedKey,
        website: data.website,
        fav: data.fav,
        hint: data.hint,
        folder: data.folder,
        isRecent: '',
        openedAt: ''
    };

    if (data.folder) {
        const folders = sessionStorage.folders;
        let isFolderExist = false;

        for (let folder of folders) {
            if (folder.name === data.folder) {
                isFolderExist = true;
                folder.keys.push(index);

                break;
            };
        };

        if (!isFolderExist) {
            const newFolder = {
                name: data.folder,
                keys: [index],
                isRecent: false,
                openedAt: 'none'
            };

            folders.push(newFolder);
        }
    };

    // Store new item in session storage
    keys.push(newKeyItem);
    StorageHandler.UpdateSessionStorage(sessionStorage);

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

/**
 * Updates key item and registers it to the storage
 * @param {Object} data - Data containing updated items 
 * @param {Number} index - Item index for update
 * @returns An object containing updated key item and its index (Properties: item, index)
 */
export async function UpdateKeyItem(newData, index) {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const keys = sessionStorage.keys;
    const folders = sessionStorage.folders;
    const masterkey = sessionStorage.masterkey;
    const encryptedKey = await Encryption.encryptData(masterkey, newData.key);
    let key = keys[index];
    let oldfolderName = key.folder;

    // Verify folder change
    if (oldfolderName !== newData.folder) {
        for (let oldFolder of folders) {
            if (oldFolder.name === oldfolderName) {
                const itemIndexInFolder = oldFolder.keys.indexOf(index);

                // Remove key item from folders
                if (itemIndexInFolder !== -1) {
                    oldFolder.keys.splice(itemIndexInFolder, 1);
                };

            };
            
            // Add key item to new folder
            if (oldFolder.name === newData.folder) {
                oldFolder.keys.push(index);
            };
        };
    };

    // Create update
    const updatedKeyItem = {
        email: newData.email,
        key: encryptedKey,
        website: newData.website,
        fav: newData.fav,
        hint: newData.hint,
        folder: newData.folder,
        isRecent: newData.isRecent,
        openedAt: newData.openedAt
    };

    // Store in session storage
    keys[index] = updatedKeyItem;
    StorageHandler.UpdateSessionStorage(sessionStorage);

    // Get local storage 
    const storage = StorageHandler.GetLocalStorage();
    const accounts = storage.app.accounts;
    // Iterate over storage
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].inSession) {
            storage.app.accounts[i] = StorageHandler.GetSessionStorage();
            StorageHandler.UpdateLocalStorage(storage);
            return {
                item: updatedKeyItem,
                index
            };
        };
    };
};

/**
 * Delete key item 
 * @param {Number} index - Index of the key item to be removed 
 * @returns 
 */
export function DeleteKeyItem(index) {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const keys = sessionStorage.keys;

    keys.splice(index, 1);
    StorageHandler.UpdateSessionStorage(sessionStorage);
    // Get local storage 
    const storage = StorageHandler.GetLocalStorage();
    const accounts = storage.app.accounts;
    // Iterate over storage
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].inSession) {
            storage.app.accounts[i] = StorageHandler.GetSessionStorage();
            StorageHandler.UpdateLocalStorage(storage);
            return true;
        };
    };
};