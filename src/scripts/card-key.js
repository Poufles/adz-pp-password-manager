import CreatEditComponent from "./card-createdit";
import ReadComponent from "./card-item-read";
import KeyGenComponent from "./card-keygen";
import { DeleteKeyItem } from "./crud";
import Encryption from "./password-encryption";
import StorageHandler from "./storage-handler";
import { icon_facebook } from "./svg";

const template =
    `
        <span class="compartment-left">
            <span tabindex="0" role="button" class="container button" id="favorite">
                <svg class="stroke" width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.0525 4.43501L25.165 13.165C25.3363 13.5275 25.6663 13.7788 26.0488 13.8375L35.245 15.2375C36.2075 15.3838 36.5913 16.6225 35.895 17.3338L29.24 24.1288C28.9638 24.4113 28.8375 24.8175 28.9025 25.2163L30.4738 34.8113C30.6375 35.815 29.6325 36.5813 28.7713 36.1063L20.5463 31.5763C20.205 31.3875 19.7963 31.3875 19.455 31.5763L11.23 36.1063C10.37 36.58 9.36375 35.815 9.5275 34.8113L11.0988 25.2163C11.1638 24.8175 11.0375 24.4113 10.7613 24.1288L4.10625 17.3338C3.41 16.6225 3.79375 15.3838 4.75625 15.2375L13.9525 13.8375C14.335 13.7788 14.665 13.5275 14.8363 13.165L18.9488 4.43501C19.3788 3.52126 20.6213 3.52126 21.0525 4.43501Z"
                        stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <span id="item-icon">
                
            </span>
            <span id="item-info">
                <p class="text color" id="name"></p>
                <span tabindex="0" role="button" class="text-sub button" id="email"></span>
            </span>
        </span>
        <span class="compartment-mid">
            <span tabindex="0" role="button" class="button">
                <p class="text">In <span id="folder-name"></span></p>
            </span>
        </span>
        <span class="compartment-right" id="actions">
            <span tabindex="0" class="button" role="button" id="copy">
                <span container="container" id="tooltip">
                    <p class="container text" id="tip">Copy</p>
                </span>
                <svg class="fill" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M27.5 27.5V32.5C27.5 35.3807 25.3807 37.5 22.5 37.5H7.5C4.61929 37.5 2.5 35.3807 2.5 32.5V17.5C2.5 14.6193 4.61929 12.5 7.5 12.5H12.5V7.5C12.5 4.61929 14.6193 2.5 17.5 2.5H32.5C35.3807 2.5 37.5 4.61929 37.5 7.5V22.5C37.5 25.3807 35.3807 27.5 32.5 27.5H27.5ZM22.5 27.5H17.5C14.6193 27.5 12.5 25.3807 12.5 22.5V17.5H7.5V32.5H22.5V27.5ZM17.5 7.5V22.5H32.5V7.5H17.5Z" />
                </svg>
            </span>
            <span tabindex="0" class="button" role="button" id="more">
                <span class="container type-2" id="tooltip">
                    <span id="tip">
                        <span tabindex="0" role="button" class="text button" id="copy">
                            Copy
                        </span>
                        <span tabindex="0" role="button" class="text button" id="edit">
                            Edit
                        </span>
                        <span tabindex="0" role="button" class="text button" id="delete">
                            Delete
                        </span>
                    </span>
                </span>
                <svg class="fill" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.25 20C16.25 22.0675 17.9325 23.75 20 23.75C22.0675 23.75 23.75 22.0675 23.75 20C23.75 17.9325 22.0675 16.25 20 16.25C17.9325 16.25 16.25 17.9325 16.25 20Z" />
                    <path
                        d="M16.25 32.5C16.25 34.5675 17.9325 36.25 20 36.25C22.0675 36.25 23.75 34.5675 23.75 32.5C23.75 30.4325 22.0675 28.75 20 28.75C17.9325 28.75 16.25 30.4325 16.25 32.5Z" />
                    <path
                        d="M16.25 7.5C16.25 9.5675 17.9325 11.25 20 11.25C22.0675 11.25 23.75 9.5675 23.75 7.5C23.75 5.4325 22.0675 3.75 20 3.75C17.9325 3.75 16.25 5.4325 16.25 7.5Z" />
                </svg>

            </span>
        </span>
`;


/**
 * Creates a key item component
 * @param {Object} data - Object containing data 
 * @returns Key item component
 */
export default function KeyItem(data) {
    let itemData = data;
    const container = document.querySelector('#bottom #articles #key-items')
    const component = document.createElement('button');
    component.classList.add('container', 'article-item');
    component.innerHTML = template;

    const getItemData = () => itemData;
    const setItemData = (newData) => { itemData = newData };

    const render = () => {
        component.dataset.item = itemData.index;
        component.setAttribute('id', `item-${itemData.index}`);
        // LoadInformation(component, itemData.item);
        LoadInformation(component, itemData);
        LoadListeners(component, getItemData, setItemData);

        container.prepend(component);
    }

    const updateRender = () => {

    };

    const unrender = () => {

    }

    return {
        render,
        unrender
    };
};

/**
 * Loads key item information 
 * @param {Node} component - Key item component 
 * @param {Object} data - Object that contains information for the key
 */
function LoadInformation(component, data) {
    const svg_fav = component.querySelector('span#favorite svg');
    const cont_icon = component.querySelector('#item-icon');
    const p_name = component.querySelector('#name');
    const p_email = component.querySelector('#email');
    const cont_folder = component.querySelector('.compartment-mid');
    const span_folder = cont_folder.querySelector('#folder-name');

    if (data.item.fav === true) {
        svg_fav.classList.add('ticked')
    } else {
        svg_fav.classList.remove('ticked');
    }
    // CHANGE LATER
    cont_icon.innerHTML = icon_facebook;
    p_name.textContent = data.item.website.charAt(0).toUpperCase() + data.item.website.slice(1);
    p_email.textContent = data.item.email;
    
    if (data.item.folder) {
        span_folder.textContent = data.item.folder;
    } else {
        cont_folder.setAttribute('style', 'display: none');
    }
}

/**
 * Load listeners for the component
 * @param {Node} component - Key item component
 * @param {Object} data - Object that contains information for the key
 */
function LoadListeners(component, getItemData, setItemData) {
    const btn_fav = component.querySelector('span#favorite');
    const btn_email = component.querySelector('span#email');
    const cont_folder = component.querySelector('.compartment-mid');
    const btn_folder = cont_folder.querySelector('span[role=button]');
    const btn_more = component.querySelector('#more');
    const btn_copy = component.querySelectorAll('#copy');
    const btn_edit = component.querySelector('#tooltip #edit');
    const btn_delete = component.querySelector('#tooltip #delete');

    component.addEventListener('click', () => {
        const itemData = getItemData();
        const cont_crud = document.querySelector('#bottom #crud');
        // CHANGE LATER
        const misc = document.querySelector('#misc');
        if (misc) {
            misc.remove();
        };

        if (KeyGenComponent.isRendered()) {
            KeyGenComponent.unrender();
        };

        if (CreatEditComponent.isRendered()) {
            CreatEditComponent.uncollapseRender();
            CreatEditComponent.unrender();
        };

        if (ReadComponent.isRendered()) {
            cont_crud.classList.add('open');
            ReadComponent.updateRender(itemData);
        } else {
            cont_crud.classList.add('open');
            ReadComponent.render(itemData);
        };
    });

    btn_fav.addEventListener('click', (e) => {
        // Prevent bubbling
        e.stopPropagation();

        const itemData = getItemData();
        // Change item favorite status
        const sp_fav = btn_fav.querySelector('svg');
        sp_fav.classList.toggle('ticked');

        // Update session storage
        const index = itemData.index
        const sessionStorage = StorageHandler.GetSessionStorage();
        const key = sessionStorage.keys[index];

        key.fav = sp_fav.classList.contains('ticked') ? true : false;
        StorageHandler.UpdateSessionStorage(sessionStorage);

        // Update local storage 
        const storage = StorageHandler.GetLocalStorage();
        const accounts = storage.app.accounts;
        // Iterate over storage
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].inSession) {
                storage.app.accounts[i] = StorageHandler.GetSessionStorage();
                StorageHandler.UpdateLocalStorage(storage);

                const updatedItemData = { item: key, index }
                setItemData(updatedItemData);

                if (ReadComponent.isRendered()) {
                    ReadComponent.updateRender(updatedItemData);
                };

                if (CreatEditComponent.isRendered()) {
                    CreatEditComponent.render('edit', updatedItemData);
                };

                const dashboard__btn_favs = document.querySelector('#tags #favs')

                if (dashboard__btn_favs.classList.contains('checked')) {
                    const keyItems = document.querySelectorAll('#key-items .article-item');

                    for (let keyItem of keyItems) {
                        if (keyItem.dataset.item == index) {
                            keyItem.remove();
                            break;
                        };
                    };
                };
            };
        };
    });

    btn_email.addEventListener('click', (e) => {
        // Prevent bubbling
        e.stopPropagation();

        const itemData = getItemData();
        const email = itemData.item.email;

        copyToClipboard(email);
    });

    btn_folder.addEventListener('click', (e) => {
        // Prevent bubbling
        e.stopPropagation();
        console.log('CHANGE ME');
    });

    btn_copy.forEach(button => {
        button.addEventListener('click', async (e) => {
            // Prevent bubbling
            e.stopPropagation();

            const itemData = getItemData();

            const masterkey = StorageHandler.GetSessionStorage().masterkey;
            const decryptedKey = await Encryption.decryptData(masterkey, itemData.item.key);

            copyToClipboard(decryptedKey);
        });
    })

    btn_more.addEventListener('click', (e) => {
        // Prevent bubbling
        e.stopPropagation();
    });

    btn_edit.addEventListener('click', (e) => {
        // Prevent bubbling
        e.stopPropagation();

        const itemData = getItemData();
        const cont_crud = document.querySelector('#bottom #crud');

        if (KeyGenComponent.isRendered()) {
            KeyGenComponent.unrender();
        };

        if (ReadComponent.isRendered()) {
            ReadComponent.unrender();
        }

        cont_crud.classList.add('open');
        CreatEditComponent.render('edit', itemData);
    });

    btn_delete.addEventListener('click', (e) => {
        // Prevent bubbling
        e.stopPropagation();

        const itemData = getItemData();
        // ADD CONFIRMATION LATER
        if (DeleteKeyItem(itemData.index)) {
            location.reload();
        };

    });
};

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => console.log("Texte copié !"))
        .catch(err => console.error("Erreur lors de la copie :", err));
}