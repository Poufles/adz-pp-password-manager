import "../styles/dashboard.css";
import "../styles/dashboard-responsiveness.css";
import "../styles/comp-circular-percentage.css";
import "../styles/comp-card-creation.css";
import "../styles/comp-card-iteminfo.css";
import "../styles/comp-card-keygen.css";
import StorageHandler from "./storage-handler.js";
import { CurrentTimeToday, DateDifference } from "./date";
import KeyItem from "./card-key.js";
import CreatEditComponent from "./card-createdit.js";
import ReadComponent from "./card-item-read.js";
import KeyGenComponent from "./card-keygen.js";
import Searchbar from "./searchbar.js";

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
const btn_all = dashboard.querySelector('#tags #all');
const btn_favs = dashboard.querySelector('#tags #favs');
const btn_create = dashboard.querySelector('#articles #actions button#create')
const btn_keygen = dashboard.querySelector('#articles #actions button#keygen')
const cont_misc = dashboard.querySelector('section#misc');
const cont_crud = dashboard.querySelector('section#crud');

Searchbar.render();

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
    LoadAllKeys();
}

// Listener for all button
if (btn_all) {
    btn_all.addEventListener('click', () => {
        if (btn_favs.classList.contains('checked')) {
            btn_favs.classList.remove('checked');
            btn_all.classList.add('checked');
        };

        cont_key_items.innerHTML = '';

        const searchStatus = Searchbar.hasSearchItem();
        if (searchStatus.status) {
            Searchbar.refresh(searchStatus.query);

            return;
        };

        LoadAllKeys();
    });
};

// Listener for favs button
if (btn_favs) {
    btn_favs.addEventListener('click', () => {
        if (btn_all.classList.contains('checked')) {
            btn_all.classList.remove('checked');
            btn_favs.classList.add('checked');
        };

        cont_key_items.innerHTML = '';

        const searchStatus = Searchbar.hasSearchItem();
        if (searchStatus.status) {
            Searchbar.refresh(searchStatus.query, { 
                fav: searchStatus.status 
            });

            return;
        };

        const session = StorageHandler.GetSessionStorage();
        const keys = session.keys;
        const length = session.keys.length;

        if (length !== 0) {
            for (let iter = 0; iter < length; iter++) {
                const key = keys[iter];

                if (key.fav) {
                    KeyItem({
                        item: key,
                        index: iter
                    }).render();
                };
            };
        };
    });
};

// Listener for create button 
if (btn_create) {
    // CHANGE THIS LATER
    btn_create.addEventListener('click', () => {
        const cont_misc = document.querySelector('#bottom #misc');
        if (cont_misc) {
            cont_misc.remove(); // CHANGE LATER
        };

        if (ReadComponent.isRendered()) {
            cont_crud.classList.remove('open')
            ReadComponent.unrender();
        };

        if (KeyGenComponent.isRendered()) {
            KeyGenComponent.unrender();

            if (CreatEditComponent.isRendered()) {
                CreatEditComponent.uncollapseRender();

                return;
            }
        }

        if (!CreatEditComponent.isRendered()) {
            cont_crud.classList.add('open')
            CreatEditComponent.render('create');
            return;
        };

        if (CreatEditComponent.getMode() === 'edit') {
            cont_crud.classList.add('open')
            CreatEditComponent.render('create');
        } else {
            cont_crud.classList.remove('open')
            CreatEditComponent.unrender();
        }
    });
}

// Listener for key generator button
if (btn_keygen) {
    btn_keygen.addEventListener('click', () => {
        if (ReadComponent.isRendered()) {
            cont_crud.classList.remove('open')
            ReadComponent.unrender();
        };

        if (KeyGenComponent.isRendered() && CreatEditComponent.isRendered()) {
            CreatEditComponent.uncollapseRender();
            KeyGenComponent.unrender();
            return;
        }

        if (CreatEditComponent.isRendered()) {
            CreatEditComponent.collapseRender();
        };

        if (!KeyGenComponent.isRendered()) {
            cont_crud.classList.add('open')
            KeyGenComponent.render();
        } else {
            cont_crud.classList.remove('open')
            KeyGenComponent.unrender();
        };
    });
};

/**
 * Loads all keys in account in session
 */
function LoadAllKeys() {
    const session = StorageHandler.GetSessionStorage();
    const key = session.keys;
    const length = session.keys.length;

    if (length !== 0) {
        for (let iter = 0; iter < length; iter++) {
            KeyItem({
                item: key[iter],
                index: iter
            }).render();
        }
    }
}