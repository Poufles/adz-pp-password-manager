import { CurrentDateToday } from "./date";
import Encryption from "./password-encryption";
import StorageHandler from "./storage-handler";

export async function Login(username, password) {
    const storage = StorageHandler.GetLocalStorage();
    console.log(storage);
    let accounts = storage.app.accounts;

    // Verify account existence
    for (let account of accounts) {
        if (account.username === username) {
            const isMatch = await Encryption.comparePassword(password, account.masterkey);
            if (isMatch) {
                account.inSession = true;
                account.lastSession = new Date();
                StorageHandler.UpdateLocalStorage(storage);
                StorageHandler.UpdateSessionStorage(account);

                return true;
            } else {
                return false;
            }
        }
    }

    return false;
}

export async function Register(username, password) {
    const storage = StorageHandler.GetLocalStorage();
    let accounts = storage.app.accounts;
    let newAccountTemplate = {
        username: "",
        masterkey: "",
        dateofcreation: "",
        email: "none",
        preference: {
            dark: false,
            animation: true
        },
        inSession: true,
        lastSession: new Date(),
        keys: [],
        folders: [],
    }

    // Verify already existing usernames
    if (accounts.some(account => account.username === username)) {
        console.error('Username already exists');
        return false;
    }

    // Store new account
    newAccountTemplate.username = username;
    newAccountTemplate.masterkey = await Encryption.hashPassword(password);
    newAccountTemplate.dateofcreation = CurrentDateToday();

    // Add new and first account to the storage
    accounts.push(newAccountTemplate);
    StorageHandler.UpdateLocalStorage(storage);

    // Create a session
    StorageHandler.UpdateSessionStorage(newAccountTemplate);

    return true;
}