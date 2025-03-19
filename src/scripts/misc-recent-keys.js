import FilterRecent from "./filter-recent";

const template =
    `
        <div class="circle"></div>
        <p class="text color" id="title">
            Recently Accessed
        </p>
        <div class="container" id="items">
        </div>
`;

const MiscRecentKeys = function () {
    let recentKeys = [];
    const component = document.createElement('article');
    component.classList.add('container');
    component.setAttribute('id', 'recent-files');

    const render = (container) => {
        component.innerHTML = template;

        if (container && !container.contains(component)) {
            container.appendChild(component);
        };

        const cont_items = component.querySelector('#items');

        cont_items.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault(); 
                cont_items.scrollBy({ left: e.deltaY, behavior: "smooth" });
            }
        });
    };

    const unrender = (container) => {
        if (container && container.contains(component)) {
            container.removeChild(component);
        };
    };

    /**
     * Inserts new recent item
     * @param {Object} object - Key item object
     * @returns 
     */
    const insert = (object) => {
        const length = recentKeys.length;

        if (length != -1) {
            for (let index = 0; index < length; index++) {
                const recentKey = recentKeys[index];

                if (recentKey.getItemIndex() === object.getItemIndex()) {
                    recentKeys.splice(index, 1);
                    break;
                };
            };
        };

        recentKeys.push(object);
    };

    const pull = ({ isDeletedKey, deleteKeyIndex } = {}) => {
        const cont_items = component.querySelector('#items');
        let lastChild;

        if (isDeletedKey) {
            if (recentKeys.length != 0) {
                lastChild = recentKeys[deleteKeyIndex];
                cont_items.removeChild(lastChild.render());
                recentKeys.splice(deleteKeyIndex, 1);
            };

            return;
        };

        if (recentKeys.length != 0) {
            lastChild = recentKeys.pop();
        };

        if (cont_items && !cont_items.contains()) {
            cont_items.removeChild(lastChild);
        };
    };

    const filter = async () => {
        const cont_items = component.querySelector('#items');

        cont_items.innerHTML = '';
        recentKeys = FilterRecent.sortItems(recentKeys);

        const length = recentKeys.length;
        let recentCount = 0;

        for (let index = 0; index < length; index++) {
            if (recentCount === 5) {
                break;
            }

            if (recentKeys[index].getItemIndex() === -1) {
                continue;
            }

            const recentKey = recentKeys[index];
            const keyItem = recentKey.getItemData().item;

            if (keyItem.openedAt !== -1) {
                cont_items.appendChild(await recentKey.render());
                recentCount++;
            };
        };
    };

    return {
        render,
        unrender,
        insert,
        pull,
        filter,
    }
}();

export default MiscRecentKeys;