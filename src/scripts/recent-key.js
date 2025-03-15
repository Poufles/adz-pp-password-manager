import ReadComponent from "./card-item-read";
import { UpdateKeyItem } from "./crud";
import MiscContainer from "./misc-container";
import MiscRecentKeys from "./misc-recent-keys";
import SVG from "./svg";

const template =
    `
        <div class="container" id="folder-info">
            <svg class="fill" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_30_757)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H4C1.8 0 0 1.8 0 4V28C0 30.2 1.8 32 4 32H36C38.2 32 40 30.2 40 28V8C40 5.8 38.2 4 36 4H20L16 0Z" fill="" />
                </g>
                <defs>
                    <clipPath id="clip0_30_757">
                        <rect width="40" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <p class="text color" id="folder-name">Personal</p>
        </div>
        <div class="container" id="key-item">
            <p class="text color" id="key-name">Facebook</p>
        </div>
`;

/**
 * Creates a component for recently opened key items
 * @param {Object} data - Contains information to be treated for a recent key item (Properties: item for data from storage, index for index of data)
 * @param {boolean} isOpened - (Optional) To see if it's an initial load or newly opened
 * @returns Recent key item component
 */
export default async function RecentKeyItem(data, isOpened = false) {
    const component = document.createElement('button');
    component.classList.add('container', 'card-folder', 'type-2');
    component.setAttribute('id', `recent-key-${data.index}`);

    let index = data.index;
    let itemData = await UpdateKeyItem(data.item, data.index, { isOpened });

    const getItemData = () => itemData;
    const setItemData = (newData) => { itemData = newData };
    const getItemIndex = () => index;

    const render = () => {
        component.dataset.value = getItemIndex();
        component.innerHTML = template;

        component.addEventListener('click', async function () {
            MiscContainer.unrender();
            ReadComponent.render(itemData);

            const recentKeyItem = await RecentKeyItem(itemData, true);
            
            MiscRecentKeys.insert(recentKeyItem);
            MiscRecentKeys.filter();
        });

        LoadInfo(component, itemData.item);

        return component;
    };

    const unrender = () => {
        MiscRecentKeys.pull();
    };

    return {
        render,
        unrender,
        getItemData,
        setItemData,
        getItemIndex
    }
};

/**
 * Load information of key item 
 * @param {Node} component - Component card for recent item
 * @param {Object} data - Object containing key item data
 */
function LoadInfo(component, data) {
    const cont_folderInfo = component.querySelector('#folder-info');
    const cont_keyItem = component.querySelector('#key-item');
    const p_folderName = cont_folderInfo.querySelector('#folder-name');
    const p_keyName = cont_keyItem.querySelector('#key-name');
    const svgIcon = SVG.getSVG(data.website.toLowerCase())

    cont_keyItem.prepend(document.createRange().createContextualFragment(svgIcon));
    p_folderName.textContent = data.folder || 'None';
    p_keyName.textContent = data.website;
};