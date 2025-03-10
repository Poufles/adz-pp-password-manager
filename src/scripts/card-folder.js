import { DeleteFolderItem, UpdateFolderItemFav } from "./crud";
import Searchbar from "./searchbar";

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
                <svg class="fill" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_30_757)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16 0H4C1.8 0 0 1.8 0 4V28C0 30.2 1.8 32 4 32H36C38.2 32 40 30.2 40 28V8C40 5.8 38.2 4 36 4H20L16 0Z"
                            fill="" />
                    </g>
                    <defs>
                        <clipPath id="clip0_30_757">
                            <rect width="40" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>
            <span id="item-info">
                <p class="text color" id="name">Folder naem</p>
            </span>
        </span>
        <span class="compartment-mid">
            <span tabindex="0" role="button" class="button">
                <p class="text"><span id="key-count">0</span> keys in folder</p>
            </span>
        </span>
        <span class="compartment-right" id="actions">
            <span tabindex="0" class="button" role="button" id="delete">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 3.33333C10.815 3.33333 3.33331 10.815 3.33331 20C3.33331 29.185 10.815 36.6667 20 36.6667C29.185 36.6667 36.6666 29.185 36.6666 20C36.6666 10.815 29.185 3.33333 20 3.33333ZM20 6.66666C27.3835 6.66666 33.3333 12.6165 33.3333 20C33.3333 27.3835 27.3835 33.3333 20 33.3333C12.6164 33.3333 6.66665 27.3835 6.66665 20C6.66665 12.6165 12.6164 6.66666 20 6.66666Z"
                        fill="" />
                    <path
                        d="M26.178 13.8214C26.0232 13.6666 25.8395 13.5438 25.6373 13.4601C25.4351 13.3763 25.2183 13.3332 24.9995 13.3332C24.7806 13.3332 24.5639 13.3763 24.3617 13.4601C24.1595 13.5438 23.9757 13.6666 23.821 13.8214L20 17.6423L16.1791 13.8214C16.0243 13.6666 15.8406 13.5438 15.6383 13.4601C15.4361 13.3763 15.2194 13.3332 15.0005 13.3332C14.7817 13.3332 14.5649 13.3763 14.3627 13.4601C14.1605 13.5438 13.9768 13.6666 13.822 13.8214C13.6673 13.9761 13.5445 14.1599 13.4607 14.3621C13.377 14.5643 13.3339 14.781 13.3339 14.9999C13.3339 15.2188 13.377 15.4355 13.4607 15.6377C13.5445 15.8399 13.6673 16.0236 13.822 16.1784L17.643 19.9993L13.822 23.8203C13.6673 23.9751 13.5445 24.1588 13.4607 24.361C13.377 24.5632 13.3339 24.78 13.3339 24.9988C13.3339 25.2177 13.377 25.4344 13.4607 25.6366C13.5445 25.8389 13.6673 26.0225 13.822 26.1773C13.9768 26.3321 14.1605 26.4549 14.3627 26.5386C14.5649 26.6224 14.7817 26.6655 15.0005 26.6655C15.2194 26.6655 15.4361 26.6224 15.6383 26.5386C15.8406 26.4549 16.0243 26.3321 16.1791 26.1773L20 22.3564L23.821 26.1773C24.1335 26.4899 24.5575 26.6655 24.9995 26.6655C25.4415 26.6655 25.8654 26.4899 26.178 26.1773C26.3328 26.0225 26.4555 25.8389 26.5393 25.6366C26.623 25.4344 26.6662 25.2177 26.6662 24.9988C26.6662 24.78 26.623 24.5632 26.5393 24.361C26.4555 24.1588 26.3328 23.9751 26.178 23.8203L22.357 19.9993L26.178 16.1784C26.3328 16.0236 26.4555 15.8399 26.5393 15.6377C26.623 15.4355 26.6662 15.2188 26.6662 14.9999C26.6662 14.781 26.623 14.5643 26.5393 14.3621C26.4555 14.1599 26.3328 13.9761 26.178 13.8214Z"
                        fill="" />
                </svg>
            </span>
        </span>
`;

export function FolderItem(data) {
    let itemData = data;

    const container = document.querySelector('#bottom #articles #key-items')
    const component = document.createElement('button');
    component.classList.add('container', 'article-item', 'folder');
    component.innerHTML = template;

    const getItemData = () => itemData;
    const setItemData = (newData) => { itemData = newData };

    const render = () => {
        component.dataset.item = itemData.index;
        component.setAttribute('id', `item-${itemData.index}`);

        LoadInformation(component, itemData);
        LoadListeners(component, getItemData, setItemData);

        container.prepend(component);
    }

    return {
        render,
    }
};

/**
 * Loads folder item information 
 * @param {Node} component - Key item component 
 * @param {Object} data - Object that contains information for the folder
 */
function LoadInformation(component, data) {
    const svg_fav = component.querySelector('span#favorite svg');
    const p_name = component.querySelector('#name');
    const cont_key_count = component.querySelector('.compartment-mid');
    const span_key_count = cont_key_count.querySelector('#key-count');
    const isFav = data.item.favorite;
    const itemName = data.item.name;
    const keys = data.item.keys;

    if (isFav) {
        svg_fav.classList.add('ticked')
    } else {
        svg_fav.classList.remove('ticked');
    }

    p_name.textContent = itemName.charAt(0).toUpperCase() + itemName.slice(1);
    span_key_count.textContent = keys.length;
}

function LoadListeners(component, getItemData, setItemData) {
    const btn_fav = component.querySelector('span#favorite');
    const btn_delete = component.querySelector('#delete');

    component.addEventListener('click', () => {
        console.log('Component');
    });

    if (btn_fav) {
        btn_fav.addEventListener('click', (e) => {
            // Prevent bubbling
            e.stopPropagation();

            const itemData = getItemData();
            // Change item favorite status
            const sp_fav = btn_fav.querySelector('svg');
            sp_fav.classList.toggle('ticked');

            const newData = itemData.item;
            newData.favorite = sp_fav.classList.contains('ticked');

            setItemData(itemData);
            UpdateFolderItemFav(itemData.item, itemData.index);

            // Update query
            const btn_favs = document.querySelector('#page__dashboard #tags #favs');
            let isFavs = btn_favs.classList.contains('checked');

            const searchStatus = Searchbar.hasSearchItem();
            Searchbar.refresh(searchStatus.query, {
                fav: isFavs,
                folder: true
            });
        });
    }

    if (btn_delete) {
        btn_delete.addEventListener('click', (e) => {
            // Prevent bubbling
            e.stopPropagation();

            const itemData = getItemData();

            if (DeleteFolderItem(itemData.index)) {
                const container = document.querySelector('#page__dashboard section#articles #key-items');

                if (container.contains(component)) {
                    container.removeChild(component);
                };
            };
        });
    };
};