import CreatEditComponent from "./card-createdit";
import KeyGenComponent from "./card-keygen";
import MiscContainer from "./misc-container";
import StorageHandler from "./storage-handler";

const cont_empty =
    `
                        <div class="container" id="empty-list">
                            <div id="texts">
                                <p class="text color" id="text-1">Your key list seems to be empty.</p>
                                <p class="text color" id="text-2">Why not create new ones !</p>
                            </div>
                            <button type="button" class="button" id="action">
                                <p class="text">Create New Item</p>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M24.6707 10.7421L14.4935 20.916C13.8182 21.5132 13.4005 22.3487 13.3333 23.113V26.6716L16.7733 26.6747C17.6637 26.6117 18.4925 26.1973 19.158 25.436L29.2611 15.3329L24.6707 10.7421ZM27.0281 8.38547L31.6182 12.9758L33.108 11.486C33.2523 11.3417 33.3334 11.1459 33.3334 10.9418C33.3334 10.7377 33.2523 10.5419 33.108 10.3976L29.6019 6.89143C29.4591 6.74757 29.2649 6.66667 29.0622 6.66667C28.8596 6.66667 28.6653 6.74757 28.5226 6.89143L27.0281 8.38547ZM36.6666 21.6667V33.3333C36.6666 35.1743 35.1743 36.6667 33.3333 36.6667H6.66665C4.8257 36.6667 3.33331 35.1743 3.33331 33.3333V6.66667C3.33331 4.82572 4.8257 3.33333 6.66665 3.33333H18.3333V6.66667H6.66665V33.3333H33.3333V21.6667H36.6666ZM29.0622 3.33333C30.1535 3.33333 31.1995 3.76903 31.9635 4.53904L35.465 8.04053C36.2345 8.81 36.6667 9.85361 36.6667 10.9418C36.6667 12.03 36.2345 13.0736 35.465 13.8431L21.5958 27.7063C20.4317 29.0492 18.7815 29.8742 16.891 30.0039H9.99998V28.3372L10.0054 22.9788C10.1474 21.2214 10.9644 19.5872 12.2108 18.489L26.159 4.54105C26.9273 3.76805 27.9722 3.33333 29.0622 3.33333Z"
                                        fill="" />
                                </svg>
                            </button>
                        </div>
`;

const ArticleKeysContainer = function () {
    const keys = [];
    const folders = []
    const container = document.querySelector('#page__dashboard #bottom section#articles');
    const component = document.createElement('section');
    component.classList.add('container');
    component.setAttribute('id', 'key-items');

    const getKeys = () => keys;
    const getFolders = () => folders;

    const render = () => {
        if (container && !container.contains(component)) {
            VerifyArticleEmptiness(component, keys);
            container.appendChild(component);
        }
    };

    const unrender = () => {
        if (container && container.contains(component)) {
            container.removeChild(component);
        }
    }

    const insert = ({ object, isNew = true }) => {
        if (!isNew) {
            const keyObject = getKeys()[object.getItemData().index];

            component.prepend(keyObject.updateRender());
            return;
        };

        keys.push(object);
        component.prepend(object.render());
    };

    const pull = (index) => {
        if (!Number.isFinite(index)) {
            console.error(`Error: Invalid index !`);
        };

        const keyItem = keys[index];
        if (component.contains(keyItem.render())) {
            keys.splice(index, 1);
            component.removeChild(keyItem.render());
        };
    };

    const UpdateEmptyList = () => VerifyArticleEmptiness(component, keys);

    return {
        render,
        unrender,
        insert,
        pull,
        getKeys,
        getFolders,
        UpdateEmptyList
    }
}();

function VerifyArticleEmptiness(component, keys) {
    const sessionAccount = StorageHandler.GetSessionStorage();
    const accountFolders = sessionAccount.folders;
    const cont_bottom = document.querySelector('#page__dashboard #bottom');
    const btn_favs = cont_bottom.querySelector('#tags #favs');
    const btn_folder = cont_bottom.querySelector('#types #folders');
    const p_current_folder = cont_bottom.querySelector('#articles p#actual');
    const isFav = btn_favs.classList.contains('checked');
    const isFolder = btn_folder.classList.contains('checked');

    if (isFolder && !isFav && accountFolders.length !== 0 && !p_current_folder) return;

    if (p_current_folder) {
        const currentFolder = p_current_folder.textContent;
        let folderItem;

        for (let index = 0; index < accountFolders.length; index++) {
            const folderObject = accountFolders[index];
            if (folderObject.name === currentFolder) {
                folderItem = folderObject;

                break;
            };
        };

        if (isFav) {
            for (let index = 0; index < folderItem.keys.length; index++) {
                const keyObject = folderItem.keys[index];
                const keyItem = keys[keyObject].getItemData().item;
                
                if (keyItem.fav) { return };
            }

            component.innerHTML = cont_empty;

            const container = component.querySelector('#empty-list');
            const p_text_1 = container.querySelector('p#text-1');
            const p_text_2 = container.querySelector('p#text-2');
            const btn_action = component.querySelector('button#action');

            p_text_1.textContent = 'It seems you have no favorite keys in this folder.';
            p_text_2.textContent = 'Click on the star icon of your key to favorite one !';
            container.removeChild(btn_action);

            return;
        };

        const keysInFolderLength = folderItem.keys.length;

        if (keysInFolderLength === 0) {
            component.innerHTML = cont_empty;

            const container = component.querySelector('#empty-list');
            const p_text_1 = container.querySelector('p#text-1');
            const p_text_2 = container.querySelector('p#text-2');

            p_text_1.textContent = 'It seems you have no keys in this folder.';
            p_text_2.textContent = 'Let\'s create one !';
            const btn_action = component.querySelector('button#action');

            btn_action.addEventListener('click', () => {
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
                    const cont_crud = document.querySelector('#page__dashboard #crud');

                    cont_crud.classList.add('open');
                    CreatEditComponent.render('create', undefined, {
                        isFolderAndKeysOpen: true
                    });
                };
            });
        };
    };

    if (isFav && isFolder) {
        for (let index = 0; index < accountFolders.length; index++) {
            const folderItem = accountFolders[index];

            if (folderItem.favorite) return;
        };

        component.innerHTML = cont_empty;

        const container = component.querySelector('#empty-list');
        const p_text_1 = container.querySelector('p#text-1');
        const p_text_2 = container.querySelector('p#text-2');
        const btn_action = container.querySelector('button#action');

        p_text_1.textContent = 'It seems you have no favorite folders.';
        p_text_2.textContent = 'Click on the star icon of your folder to favorite one !';
        container.removeChild(btn_action);

        return;
    }

    if (isFolder) {
        if (accountFolders.length === 0) {
            component.innerHTML = cont_empty;

            const container = component.querySelector('#empty-list');
            const p_text_1 = container.querySelector('p#text-1');
            const p_text_2 = container.querySelector('p#text-2');
            const btn_action = container.querySelector('button#action');

            p_text_1.textContent = 'It seems you have no folders.';
            p_text_2.textContent = 'Create one by creating new keys !';
            container.removeChild(btn_action);
        }

        return;
    };

    if (isFav) {
        for (let index = 0; index < keys.length; index++) {
            const currentKeyItem = keys[index];
            const currentKeyData = currentKeyItem.getItemData().item;
            const currentKeyFav = currentKeyData.fav;

            if (currentKeyFav) return;
        };

        component.innerHTML = cont_empty;

        const container = component.querySelector('#empty-list');
        const p_text_1 = container.querySelector('p#text-1');
        const p_text_2 = container.querySelector('p#text-2');
        const btn_action = container.querySelector('button#action');

        p_text_1.textContent = 'It seems you have no favorite keys.';
        p_text_2.textContent = 'Click on the star icon of your key to favorite one !';
        container.removeChild(btn_action);

        return;
    };

    if (keys.length === 0) {
        component.innerHTML = cont_empty;

        const btn_action = component.querySelector('button#action');

        btn_action.addEventListener('click', () => {
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
                const cont_crud = document.querySelector('#page__dashboard #crud');

                cont_crud.classList.add('open');
                CreatEditComponent.render('create');
            };
        });
    };
};

export default ArticleKeysContainer;