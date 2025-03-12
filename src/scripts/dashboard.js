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
import MiscRecentKeys from "./misc-recent-keys.js";
import MiscKeysSecurity from "./misc-keys-security.js";
import ArticleKeysContainer from "./article-keys.js";
import MiscContainer from "./misc-container.js";
import RecentKeyItem from "./recent-key.js";

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
const cont_articles = dashboard.querySelector('#articles');
const p_title = dashboard.querySelector('#articles p#title');
const btn_all = dashboard.querySelector('#tags #all');
const btn_favs = dashboard.querySelector('#tags #favs');
const btn_files = dashboard.querySelector('#types #files');
const btn_folder = dashboard.querySelector('#types #folders');
const btn_create = dashboard.querySelector('#articles #actions button#create')
const btn_keygen = dashboard.querySelector('#articles #actions button#keygen')
const cont_bottom = dashboard.querySelector('#bottom');
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

if (cont_bottom) {
    const cont_misc = MiscContainer.getComponent();

    MiscContainer.render();
    MiscRecentKeys.render(cont_misc)
    MiscKeysSecurity.render(cont_misc);

    const session = StorageHandler.GetSessionStorage();
    const keys = session.keys;
    const length = keys.length

    for (let index = 0; index < length; index++) {
        const recentKeyItem = await RecentKeyItem({
            item: keys[index],
            index
        });

        MiscRecentKeys.insert(recentKeyItem);
    };

    MiscRecentKeys.filter();
};

// Load recent folders on header
if (cont_recent_folders) {
    // const session = StorageHandler.GetSessionStorage();

    // for (let folder of session.folders) {
    //     if (folder.isRecent) {
    //         console.log('Recent Folder');
    //     }
    // }
}

// Load article items
if (cont_articles) {
    ArticleKeysContainer.render();

    const session = StorageHandler.GetSessionStorage();
    const key = session.keys;
    const length = session.keys.length;

    if (length !== 0) {
        for (let iter = 0; iter < length; iter++) {
            const keyItem = KeyItem({
                item: key[iter],
                index: iter
            });

            ArticleKeysContainer.insert({
                childNode: keyItem.render(),
                object: keyItem
            });
        };
    };
};

// Listener for all button
if (btn_all) {
    btn_all.addEventListener('click', () => {
        if (btn_favs.classList.contains('checked')) {
            btn_favs.classList.remove('checked');
            btn_all.classList.add('checked');
        };

        const btn_folders = dashboard.querySelector('#types #folders');
        let isFolders = btn_folders.classList.contains('checked');

        const searchStatus = Searchbar.hasSearchItem();
        Searchbar.query(searchStatus.query, {
            folder: isFolders
        });
    });
};

// Listener for favs button
if (btn_favs) {
    btn_favs.addEventListener('click', () => {
        if (btn_all.classList.contains('checked')) {
            btn_all.classList.remove('checked');
            btn_favs.classList.add('checked');
        };

        const btn_folders = dashboard.querySelector('#types #folders');
        let isFolders = btn_folders.classList.contains('checked');

        const searchStatus = Searchbar.hasSearchItem();
        Searchbar.query(searchStatus.query, {
            fav: true,
            folder: isFolders
        });
    });
};

//Listener for files button
if (btn_files) {
    btn_files.addEventListener('click', () => {
        if (btn_folder.classList.contains('checked')) {
            btn_folder.classList.remove('checked');
            btn_files.classList.add('checked');
        };

        p_title.textContent = 'Your Keys';

        const btn_favs = dashboard.querySelector('#tags #favs');
        let isFavs = btn_favs.classList.contains('checked');

        const searchStatus = Searchbar.hasSearchItem();
        Searchbar.query(searchStatus.query, {
            fav: isFavs
        });
    });
};

//Listener for folders button
if (btn_folder) {
    btn_folder.addEventListener('click', () => {
        if (btn_files.classList.contains('checked')) {
            btn_files.classList.remove('checked');
            btn_folder.classList.add('checked');
        };

        p_title.textContent = 'Your Folders';

        const btn_favs = dashboard.querySelector('#tags #favs');
        let isFavs = btn_favs.classList.contains('checked');

        const searchStatus = Searchbar.hasSearchItem();
        Searchbar.query(searchStatus.query, {
            fav: isFavs,
            folder: true
        });
    });
};

// Listener for create button 
if (btn_create) {
    // CHANGE THIS LATER
    btn_create.addEventListener('click', () => {
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

        if (MiscContainer.getComponent()) {
            MiscContainer.unrender()
        };

        if (!CreatEditComponent.isRendered()) {
            cont_crud.classList.add('open')
            CreatEditComponent.render('create');

            const articleKeys = ArticleKeysContainer.getKeys();
            for (let articleKey of articleKeys) {
                articleKey.clicked(false);
            };

            return;
        };

        if (CreatEditComponent.getMode() === 'edit') {
            const articleKeys = ArticleKeysContainer.getKeys();
            for (let articleKey of articleKeys) {
                articleKey.clicked(false);
            };

            cont_crud.classList.add('open')
            CreatEditComponent.render('create');
        } else {
            cont_crud.classList.remove('open')
            CreatEditComponent.unrender();

            if (MiscContainer.getComponent()) {
                MiscContainer.render()
            };
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

        if (MiscContainer.getComponent()) {
            MiscContainer.unrender()
        };

        if (!KeyGenComponent.isRendered()) {
            cont_crud.classList.add('open')
            KeyGenComponent.render();

            if (!CreatEditComponent.isRendered()) {
                const articleKeys = ArticleKeysContainer.getKeys();
                for (let articleKey of articleKeys) {
                    articleKey.clicked(false);
                };
            };
        } else {
            cont_crud.classList.remove('open')
            KeyGenComponent.unrender();

            if (MiscContainer.getComponent()) {
                MiscContainer.render()
            };
        };
    });
};