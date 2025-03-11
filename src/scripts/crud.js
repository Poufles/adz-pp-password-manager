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
                favorite: false,
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
 * @param {Object} options - (Optional) Arguments to know if its a basic update or not
 * @returns An object containing updated key item and its index (Properties: item, index)
 */
export async function UpdateKeyItem(newData, index, { isPassword = false } = {}) {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const keys = sessionStorage.keys;
    const folders = sessionStorage.folders;
    const masterkey = sessionStorage.masterkey;
    let key = keys[index];
    let oldKeyfolderName = key.folder;

    // Verify folder change
    if (oldKeyfolderName !== newData.folder) {
        let isNewFolder = true;

        for (let oldFolder of folders) {
            // Compare folder name to key's old folder's name 
            if (oldFolder.name === oldKeyfolderName) {
                const itemIndexInFolder = oldFolder.keys.indexOf(index);

                // Remove key item from folders
                if (itemIndexInFolder !== -1) {
                    oldFolder.keys.splice(itemIndexInFolder, 1);
                };

            };

            // Add key item to new folder
            if (oldFolder.name === newData.folder) {
                oldFolder.keys.push(index);
                isNewFolder = false;
            };
        };

        // Creates new folder if it's a new folder
        if (isNewFolder && newData.folder !== '') {
            const newFolder = {
                name: newData.folder,
                keys: [index],
                favorite: false,
                isRecent: false,
                openedAt: 'none'
            };

            folders.push(newFolder);
        }
    };

    let encryptedKey;
    if (isPassword) {
        encryptedKey = await Encryption.encryptData(masterkey, newData.key);
    };

    // Create update
    const updatedKeyItem = {
        email: newData.email,
        key: encryptedKey || newData.key,
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
 * @returns true if item is deleted
 */
export function DeleteKeyItem(index) {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const keys = sessionStorage.keys;
    const key = keys[index];

    // Verify if key is in a folder
    if (keys.folder !== '') {
        const folders = sessionStorage.folders;
        let keyFolder;

        // Get folder of key
        for (let folder of folders) {
            if (key.folder === folder.name) {
                keyFolder = folder;
            };
        };

        // Verify if it exists
        if (keyFolder !== undefined) {
            keyFolder.keys.splice(index, 1);
        };
    };

    // Remove key from keys of account
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

/**
 * Update article folder item
 * @param {*} data - Object containing information about folder
 * @param {*} index - Folder's index
 * @returns true if item is updated
 */
export function UpdateFolderItem(data, index) {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const folders = sessionStorage.folders;

    if (folders.length === 0) {
        return;
    };

    folders.splice(index, 1, data)
    StorageHandler.UpdateSessionStorage(sessionStorage)
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
}

/**
 * Delete folder item 
 * @param {Number} index - Index of the folder item to be removed 
 * @returns true if item is deleted
 */
export function DeleteFolderItem(index) {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const folders = sessionStorage.folders;
    const folder = folders[index];
    const folderKeys = folder.keys;
    const folderLength = folderKeys.length;
    const keys = sessionStorage.keys;

    for (let iter = 0; iter < folderLength; iter++) {
        const key = keys[folderKeys[iter]];

        // Remove key from to be deleted folder
        // and verify if key has a property folder
        if (Object.hasOwn(key, 'folder')) {
            key.folder = '';
        };
    };

    // Remove folder from folders of account
    folders.splice(index, 1);
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
}