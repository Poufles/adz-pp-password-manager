import "../styles/dashboard.css";
import "../styles/dashboard-responsiveness.css";
import "../styles/comp-circular-percentage.css";
import "../styles/comp-card-creation.css";
import "../styles/comp-card-iteminfo.css";
import "../styles/comp-card-keygen.css";
import "../styles/comp-card-settings.css";
import "../styles/comp-hint-tool.css";
import "../styles/comp-card-message-box.css";
import "../styles/blur-overlay.css";
import StorageHandler from "./storage-handler.js";
import { CurrentTimeToday, DateDifference } from "./date";
import KeyItem from "./card-key.js";
import CreatEditComponent from "./card-createdit.js";
import ReadComponent from "./card-item-read.js";
import KeyGenComponent from "./card-keygen.js";
import Searchbar from "./searchbar.js";
import MiscRecentKeys from "./misc-recent-keys.js";
import MiscKeysSecurity from "./misc-keys-security.js";
import ArticleKeysContainer from "./article-items.js";
import MiscContainer from "./misc-container.js";
import RecentKeyItem from "./recent-key.js";
import SettingComponent from "./settings.js";
import MessageBox from "./message-box.js";
import HintTool from "./hint-tool.js";

// Check every second if storage was deleted
let isMessagePopped = true;

setInterval(() => {
    const lowkeyLocal = StorageHandler.GetLocalStorage();
    const lowkeySession = StorageHandler.GetSessionStorage();

    if ((!lowkeyLocal || !lowkeySession) && isMessagePopped) {
        isMessagePopped = false;
        alert('STORAGE WAS ERASED !');

        const localCopy = StorageHandler.StorageCopy().localCopy;
        const sessionCopy = StorageHandler.StorageCopy().sessionCopy;

        if (localCopy && sessionCopy) {
            StorageHandler.UpdateLocalStorage(localCopy);
            StorageHandler.UpdateSessionStorage(sessionCopy);
            location.reload();
        } else {
            window.location.href = './index.html';
        };
    };
}, 5000); // 5s

// Make a backup every minute and half
setInterval(() => {
    StorageHandler.StorageCopy({
        localData: StorageHandler.GetLocalStorage(),
        sessionData: StorageHandler.GetSessionStorage()
    });
}, 90000); // 1m30s

// Check if user is AFK while page is opened
let userActivity;

// Initiate timer of 5 mins
function startInterval() {
    if (document.visibilityState === 'visible') {
        userActivity = setInterval(async () => {
            stopInterval();

            document.removeEventListener('visibilitychange', VerifyVisibility);
            document.body.removeEventListener('mousemove', VerifyMovement)

            MessageBox.create('You were away for more than 1 min. You have been manually logged out !', {
                isConfirmOnly: true
            });

            const isConfirm = await MessageBox.render()

            if (!isConfirm) return;

            const account = StorageHandler.GetSessionStorage();

            account.inSession = false;
            account.lastSession = new Date().toISOString();

            StorageHandler.UpdateSessionStorage(account, true);
            // Get local storage 
            const storage = StorageHandler.GetLocalStorage();
            const accounts = storage.app.accounts;
            // Iterate over storage
            for (let i = 0; i < accounts.length; i++) {
                if (accounts[i].inSession) {
                    storage.app.accounts[i] = account;
                    StorageHandler.UpdateLocalStorage(storage);
                    window.location.href = './auth.html';
                };
            };

        }, 90000); // 1 min
    } else {
        stopInterval();
    };
};

function stopInterval() {
    clearInterval(userActivity);
};

function VerifyMovement() {
    stopInterval();
    startInterval();
};

function VerifyVisibility() {
    if (document.visibilityState === 'hidden') {
        stopInterval();
    } else if (document.visibilityState === 'visible') {
        startInterval();
    };
};

// Listener for any movement to reset timer
document.body.addEventListener('mousemove', VerifyMovement);
document.addEventListener('visibilitychange', VerifyVisibility);

// Initialize interval timer
startInterval();


// =========================================================== //


// Check if user is AFK while page is not visible
let pageHidden;
let countdown;

function StartPageHiddenInterval() {
    pageHidden = setInterval(async () => {
        StopPageHiddenInterval();
        StopPageHiddenCountdown();

        document.title = 'AFK Timeout !';
        document.removeEventListener('visibilitychange', VerifyPageVisibility);

        MessageBox.create('You were away for more than 3 mins. You have been manually logged out !', {
            isConfirmOnly: true
        });

        const isConfirm = await MessageBox.render()

        if (!isConfirm) return;

        const account = StorageHandler.GetSessionStorage();

        account.inSession = false;
        account.lastSession = new Date().toISOString();

        StorageHandler.UpdateSessionStorage(account, true);
        // Get local storage 
        const storage = StorageHandler.GetLocalStorage();
        const accounts = storage.app.accounts;
        // Iterate over storage
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].inSession) {
                storage.app.accounts[i] = account;
                StorageHandler.UpdateLocalStorage(storage);
                window.location.href = './auth.html';
            };
        };
    }, 180000); // 3 mins
};

function StopPageHiddenInterval() {
    clearInterval(pageHidden);
};

function StartPageHiddenCountdown() {
    let countdownTime = 180;
    let min;
    let sec;

    countdown = setInterval(() => {
        --countdownTime;
        min = countdownTime / 60;
        sec = countdownTime % 60;

        document.title = `LowKey - AFK (${Math.floor(min).toFixed(0)}min ${sec.toFixed(0)}sec)`;
    }, 1000);
}

function StopPageHiddenCountdown() {
    clearInterval(countdown);
};

function VerifyPageVisibility() {
    if (document.visibilityState === 'hidden') {
        StartPageHiddenCountdown()
        StartPageHiddenInterval();
    } else if (document.visibilityState === 'visible') {
        StopPageHiddenCountdown();
        StopPageHiddenInterval();
        document.title = 'LowKey - Password Manager';
    }
};

document.addEventListener('visibilitychange', VerifyPageVisibility);


// =========================================================== //
// =========================================================== //
// =========================================================== //
// =========================================================== //
// =========================================================== //
// =========================================================== //
// =========================================================== //


// Check account in session 
const storage = StorageHandler.GetLocalStorage();
if (!storage) {
    window.location.href = './index.html';
};

const accounts = storage.app.accounts;
let hasSession = false;

for (let account of accounts) {
    if (account.inSession) {
        let minuteDifference = DateDifference({
            date: account.lastSession,
            type: 'minute'
        });

        if (minuteDifference > 20) {
            window.location.href = './auth.html';
            account.inSession = false;
            StorageHandler.UpdateSessionStorage({}, true)
            StorageHandler.UpdateLocalStorage(storage);
        } else {
            hasSession = true
            StorageHandler.UpdateSessionStorage(account);
        }
    }
}

// Initialize Storage copy
StorageHandler.StorageCopy({
    localData: StorageHandler.GetLocalStorage(),
    sessionData: StorageHandler.GetSessionStorage()
});


// =========================================================== //
// =========================================================== //
// =========================================================== //
// =========================================================== //
// =========================================================== //
// =========================================================== //
// =========================================================== //


async function Dashboard() {
    const dashboard = document.querySelector('#page__dashboard')
    const p_username = dashboard.querySelector('#header #username');
    const p_date = dashboard.querySelector('#clock');
    const btn_user = dashboard.querySelector('#settings');
    const btn_screen_mode = dashboard.querySelector('#screen-mode');
    const btn_logout = dashboard.querySelector('#logout');
    const cont_social_links = dashboard.querySelector('section#social-links');
    const cont_articles = dashboard.querySelector('#articles');
    const cont_location = dashboard.querySelector('#articles #location');
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

    // Load listner for user/settings button
    if (btn_user) {
        btn_user.addEventListener('click', () => {
            if (CreatEditComponent.isRendered()) {
                cont_crud.classList.remove('open')
                CreatEditComponent.unrender();
            };

            if (KeyGenComponent.isRendered()) {
                cont_crud.classList.remove('open');
                KeyGenComponent.unrender();
            };

            if (ReadComponent.isRendered()) {
                cont_crud.classList.remove('open')
                ReadComponent.unrender();
            };

            MiscContainer.render();
            SettingComponent.create();
            SettingComponent.render();
        });
    };

    // Load listner for screen mode button
    if (btn_screen_mode) {
        btn_screen_mode.addEventListener('click', () => {

        });
    };

    // Load listner for logout button
    if (btn_logout) {
        btn_logout.addEventListener('click', async () => {
            MessageBox.create('Are you sure you want to terminate session?', {
                isLogout: true
            });
            const isConfirm = await MessageBox.render()

            if (!isConfirm) return;

            const account = StorageHandler.GetSessionStorage();

            account.inSession = false;
            account.lastSession = new Date().toISOString();

            StorageHandler.UpdateSessionStorage(account, true);
            // Get local storage 
            const storage = StorageHandler.GetLocalStorage();
            const accounts = storage.app.accounts;
            // Iterate over storage
            for (let i = 0; i < accounts.length; i++) {
                if (accounts[i].inSession) {
                    storage.app.accounts[i] = account;
                    StorageHandler.UpdateLocalStorage(storage);
                    window.location.href = './auth.html';
                };
            };
        });
    };

    // Load recent folders on header
    if (cont_social_links) {
        const a_github = cont_social_links.querySelector('#github');
        const a_instagram = cont_social_links.querySelector('#instagram');
        const a_twitter = cont_social_links.querySelector('#twitter-x');

        if (a_github) {
            a_github.addEventListener('mouseenter', () => {
                HintTool('Visit my GitHub page !').play();
            });
        };

        if (a_instagram) {
            a_instagram.addEventListener('mouseenter', () => {
                HintTool('Visit my Instagram page !').play();
            });
        };

        if (a_twitter) {
            a_twitter.addEventListener('mouseenter', () => {
                HintTool('Visit my Twitter/X page !').play();
            });
        };
    };

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

            if (isFolderAndKeys(cont_location)) {
                Searchbar.query(searchStatus.query, {
                    folder: isFolders,
                    keyInFolder: true
                });

                return;
            };

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

            if (isFolderAndKeys(cont_location)) {
                Searchbar.query(searchStatus.query, {
                    fav: true,
                    folder: isFolders,
                    keyInFolder: true
                });

                return;
            };

            Searchbar.query(searchStatus.query, {
                fav: true,
                folder: isFolders
            });
        });
    };

    //Listener for files button
    if (btn_files) {
        btn_files.addEventListener('click', () => {
            if (!btn_files.classList.contains('checked')) {
                ChangeLocationText(cont_location, 'Your Keys');
            };

            if (btn_folder.classList.contains('checked')) {
                btn_folder.classList.remove('checked');
                btn_files.classList.add('checked');
            };

            if (btn_create.disabled) {
                btn_create.disabled = false;
            };

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
            if (!btn_folder.classList.contains('checked')) {
                ChangeLocationText(cont_location, 'Your Folders');
            };

            if (btn_files.classList.contains('checked')) {
                btn_files.classList.remove('checked');
                btn_folder.classList.add('checked');
            };

            if (!isFolderAndKeys(cont_location)) {
                btn_create.disabled = true;
            }

            if (isFolderAndKeys(cont_location)) {
                btn_create.disabled = false;
                dashboard.appendChild(btn_create);
                return;
            };

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
                const p_root = dashboard.querySelector('p#root');
                let isFav = btn_favs.classList.contains('checked');
                let isFolderAndKeys = p_root === null ? true : false

                cont_crud.classList.add('open')
                CreatEditComponent.render('create', null, {
                    isFavOpen: isFav,
                    isFolderAndKeysOpen: isFolderAndKeys
                });

                return;
            };

            if (CreatEditComponent.getMode() === 'edit') {
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
            } else {
                cont_crud.classList.remove('open')
                KeyGenComponent.unrender();

                if (MiscContainer.getComponent()) {
                    MiscContainer.render()
                };
            };
        });
    };
};

function ChangeLocationText(parentNode, text) {
    parentNode.innerHTML = '';

    const p_root = document.createElement('p');
    p_root.classList.add('text', 'color');
    p_root.setAttribute('id', 'root');
    p_root.textContent = text;

    parentNode.appendChild(p_root);
};

function isFolderAndKeys(elementNode) {
    const btn_root = document.querySelector('button#root');
    if (elementNode.contains(btn_root)) {
        return true;
    };

    return false;
};

if (hasSession) {
    Dashboard();
} else {
    window.location.href = './auth.html';
}