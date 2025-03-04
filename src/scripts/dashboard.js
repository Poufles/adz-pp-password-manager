import "../styles/dashboard.css";
import "../styles/dashboard-responsiveness.css";
import "../styles/comp-circular-percentage.css";
import "../styles/comp-card-creation.css";
import StorageHandler from "./storage-handler.js";
import { CurrentTimeToday, DateDifference } from "./date";
import CreationComponent from "./dom-creation.js";

// Check account in session 
const storage = StorageHandler.GetLocalStorage();
const accounts = storage.app.accounts;

for (let account of accounts) {
    if (account.inSession) {
        let minuteDifference = DateDifference({
            date: account.lastSession,
            type: 'minute'
        });

        if (minuteDifference > 20) {
            window.location.href = '/auth.html';
            account.inSession = false;
            StorageHandler.UpdateSessionStorage({}, true)
            StorageHandler.UpdateLocalStorage(storage);
        } else {
            StorageHandler.UpdateSessionStorage(account);
        }
    }
}

const dashboard = document.querySelector('#page__dashboard')
const p_username = dashboard.querySelector('#header #username');
const p_date = dashboard.querySelector('#clock');
const cont_recent_folders = dashboard.querySelector('#header #recent-folders');
const cont_recent_items = dashboard.querySelector('#recent-files #items');
const cont_key_items = dashboard.querySelector('#articles #key-items');
const btn_create = dashboard.querySelector('#articles #actions button#create')

// Load username on header
if (p_username) {
    const session = StorageHandler.GetSessionStorage();
    p_username.textContent = session.username
}

// Set current time on header
setInterval(() => {
    p_date.textContent = CurrentTimeToday();
}, 1000);

// Load recent folders on header
if (cont_recent_folders) {
    // const session = StorageHandler.GetSessionStorage();

    // for (let folder of session.folders) {
    //     if (folder.isRecent) {
    //         console.log('Recent Folder');
    //     }
    // }
}

// Load recent keys on misc
if (cont_recent_items) {
    // const session = StorageHandler.GetSessionStorage();

    // for (let key of session.keys) {
    //     if (key.isRecent) {
    //         console.log('Recent Key');
    //     }
    // } 
}

// Load keys on main article
if (cont_key_items) {
    // const session = StorageHandler.GetSessionStorage();

    // for (let key of session.keys) {
    //     console.log('Key Items');
    // } 
}

// Listener for create button 
if (btn_create) {
    btn_create.addEventListener('mouseup', () => {
        const cont_bottom = dashboard.querySelector('section#bottom');

        // Verify if card component exists
        let card = CreationComponent.getComponent();
        if (cont_bottom.querySelector(`#${card.id}`)) {
            cont_bottom.removeChild(card);
            return;
        }

        cont_bottom.appendChild(card);
    });
}