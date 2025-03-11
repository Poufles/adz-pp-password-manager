import ReadComponent from "./card-item-read";
import { UpdateKeyItem } from "./crud";
import MiscRecentKeys from "./misc-recent-keys";

const template =
`
    <button class="container card-folder type-2" id="folder-1">
        <div class="container" id="folder-info">
            <svg class="fill" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_30_757)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H4C1.8 0 0 1.8 0 4V28C0 30.2 1.8 32 4 32H36C38.2 32 40 30.2 40 28V8C40 5.8 38.2 4 36 4H20L16 0Z" fill="black" />
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
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_45_704)">
                    <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#176AE6" />
                    <path d="M27.2838 25.3159L28.1394 20.0797H22.08V16.0872C22.08 14.4384 22.5222 13.2656 24.8866 13.2656L28.3866 13.2672V7.98719C28.3866 7.98719 26.1653 7.5 24.0816 7.5C19.7331 7.5 16.8553 10.3719 16.8553 15.2469V20.08H11.6131V25.3162H16.8541V39.7516C17.8794 39.9137 18.9297 40 20 40C20.7025 40 21.3963 39.9628 22.08 39.8922V25.3159H27.2838Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_45_704">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <p class="text color" id="key-name">Facebook</p>
        </div>
    </button>
`;

export default function RecentKeyItem() {
    let itemData;
    const component = document.createElement('button');
    component.classList.add('container', 'card-folder', 'type-2');

    const render = async (data) => {
        itemData = await UpdateKeyItem(data.item, data.index, { isOpened: true });

        component.innerHTML = template;

        component.addEventListener('click', () => {
            ReadComponent.render(itemData);
        });

        LoadInfo(component, itemData.item);

        MiscRecentKeys.insert(component);
    };

    const unrender = () => {
        MiscRecentKeys.pull();
    };

    return {
        render,
        unrender
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

    // ADD SVG LATER
    p_folderName.textContent = data.folder;
    p_keyName.textContent = data.website;
};