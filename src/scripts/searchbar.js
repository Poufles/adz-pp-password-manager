import ArticleKeysContainer from "./article-keys";
import { FolderItem } from "./card-folder";
import KeyItem from "./card-key";
import StorageHandler from "./storage-handler";

const template =
    `
    <div class="container searchbar">
        <input type="text" name="" class="text color" id="search-item"
            placeholder="Search a key...">
            <button type="button" class="button circle" id="search">
                <svg width="40" height="40" viewBox="0 0 40 40" class="fill"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M34.2675 30.7325L27.9212 24.3863C29.2325 22.41 30 20.0437 30 17.5C30 10.6075 24.3925 5 17.5 5C10.6075 5 5 10.6075 5 17.5C5 24.3925 10.6075 30 17.5 30C20.0437 30 22.41 29.2325 24.3863 27.9212L30.7325 34.2675C31.7075 35.2437 33.2925 35.2437 34.2675 34.2675C35.2437 33.2913 35.2437 31.7087 34.2675 30.7325ZM8.75 17.5C8.75 12.675 12.675 8.75 17.5 8.75C22.325 8.75 26.25 12.675 26.25 17.5C26.25 22.325 22.325 26.25 17.5 26.25C12.675 26.25 8.75 22.325 8.75 17.5Z" />
                </svg>
            </button>
    </div>
`;

const Searchbar = function () {
    const component = document.createElement('div');
    component.classList.add('container');
    component.setAttribute('id', 'search');

    /**
     * Renders the component
     */
    const render = () => {
        const container = document.querySelector('section#articles');

        component.innerHTML = template;

        if (!container) {
            return;
        };

        if (!container.contains(component)) {
            LoadListeners(component);
            container.appendChild(component);
        };
    }

    /**
     * Queries the text input in search
     * @param {String} query - String text of search input 
     * @param {*} options - (Optional) Additional queries for searching. Acccepts boolean for the following properties: fav && folder
     */
    const query = (query, { fav = false, folder = false } = {}) => {
        const cont_key_items = document.querySelector('#page__dashboard section#articles #key-items');
        
        cont_key_items.innerHTML = '';
        SearchAlgorithm(query, { fav, folder });
    };

    /**
     * Tells if the component has an input
     * @returns An object with properties of query (a string text of search input) and status (a boolean defining if there is a search input)
     */
    const hasSearchItem = () => {
        const input_search = component.querySelector('input#search-item');
        const hasSearch = input_search.value;
        let search = {
            query: hasSearch,
            status: false
        };

        if (hasSearch) {
            search.status = true;
        };

        return search;
    };

    return {
        render,
        query,
        hasSearchItem
    }
}();

/**
 * Load listeners of component
 * @param {Node} component - Searchbar component
 */
function LoadListeners(component) {
    const cont_keys = document.querySelector('#page__dashboard #articles #key-items')
    const tags = document.querySelector('#page__dashboard #articles #tags');
    const types = document.querySelector('#page__dashboard #articles #types');
    const input_search = component.querySelector('input#search-item');
    const btn_search = component.querySelector('button#search');

    if (input_search) {
        input_search.addEventListener('input', () => {
            const btn_favs = tags.querySelector('#favs');
            const btn_folders = types.querySelector('#folders');
            const query = input_search.value;

            let isFavs = btn_favs.classList.contains('checked');
            let isFolders = btn_folders.classList.contains('checked');

            Searchbar.query(query, {
                fav: isFavs,
                folder: isFolders
            });
        });
    };

    if (btn_search) {
        btn_search.addEventListener('click', () => {
            const btn_favs = tags.querySelector('#favs');
            const btn_folders = types.querySelector('#folders');
            const query = input_search.value;

            let isFavs = btn_favs.classList.contains('checked');
            let isFolders = btn_folders.classList.contains('checked');

            Searchbar.query(query, {
                fav: isFavs,
                folder: isFolders
            });
        });
    };
}

/**
 * Searching algorithm
 * @param {String} query - String of text for searching 
 * @param {*} options - (Optional) Additional queries for searching. Acccepts boolean for the following properties: fav && folder
 */
function SearchAlgorithm(query, { fav = false, folder = false } = {}) {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const keys = sessionStorage.keys;
    const keyLength = keys.length;
    const folders = sessionStorage.folders;
    const folderLength = folders.length;

    if (folder) {
        for (let index = 0; index < folderLength; index++) {
            const folderItem = folders[index];
            const folderName = folderItem.name;

            if (fav) {
                const isFav = folderItem.favorite;

                if (folderName.toLowerCase().includes(query.toLowerCase()) && isFav) {
                    const item = FolderItem({
                        item: folderItem,
                        index: index
                    });

                    item.render();
                };

                continue;
            }

            if (folderName.toLowerCase().includes(query.toLowerCase())) {
                const item = FolderItem({
                    item: folderItem,
                    index: index
                });

                item.render();
            };
        };

        return;
    };

    for (let index = 0; index < keyLength; index++) {
        const key = keys[index];
        const keyName = key.website;

        if (fav) {
            const isFav = key.fav;
            
            if (keyName.toLowerCase().includes(query.toLowerCase()) && isFav) {
                const item = KeyItem({
                    item: key,
                    index: index
                });

                ArticleKeysContainer.insert({
                    childNode: item.render(),
                    object: item
                });
                
                // const item = KeyItem({
                //     item: key,
                //     index: index
                // }).create();

                // ArticleKeysContainer.insert(item);
                // item.render();
            };

            continue;
        }

        if (keyName.toLowerCase().includes(query.toLowerCase())) {
            const item = KeyItem({
                item: key,
                index: index
            });

            ArticleKeysContainer.insert({
                childNode: item.render(),
                object: item
            });
            
            // const item = KeyItem({
            //     item: key,
            //     index: index
            // }).create();

            // ArticleKeysContainer.insert(item);

            // item.render();
        };
    };
}

export default Searchbar;