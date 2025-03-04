import { CurrentDateToday } from "./date";
import Encryption from "./password-encryption";

export async function Login(username, password) {
    const storage = JSON.parse(localStorage.getItem('lowkey'));
    let accounts = storage.app.accounts;

    // Verify account existence
    for (let account of accounts) {
        if (account.username === username) {
            const isMatch = await Encryption.comparePassword(password, account.masterkey);
            if (isMatch) {
                console.log('Logged In');
                return true;
            } else {
                console.error('Invalid Username/Password');
                return false;
            }
        }
    }

    return false;
}

export function Register(username, password) {
    const storage = JSON.parse(localStorage.getItem('lowkey'));
    let accounts = storage.app.accounts;
    let newAccountTemplate = {
        username: "",
        masterkey: "",
        dateofcreation: "",
        email: "none",
        preference: [{
            dark: false,
            animation: true
        }],
        inSession: false,
        lastSession: "",
        keys: [],
    }

    // Verify already existing usernames
    if (accounts.some(account => account.username === username)) {
        console.error('Username already exists');
        return false;
    }

    CreateNewAccount(storage, accounts, newAccountTemplate, username, password);

    return true;
}

async function CreateNewAccount(storage, accounts, template, newUser, newPass) {
    // Store new account
    template.username = newUser;
    template.masterkey = await Encryption.hashPassword(newPass);
    template.dateofcreation = CurrentDateToday();

    // Add new and first account to the storage
    accounts.push(template);
    localStorage.setItem('lowkey', JSON.stringify(storage));

    // Create a session
    sessionStorage.setItem('lowkey-session', template);
}