import FilterRecent from "./filter-recent";
import RecentKeyItem from "./recent-key";

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
    };

    const unrender = () => {
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
        
        if (length != 0) {
            for (let index = 0; index < length - 1; index++) {
                const recentKey = recentKeys[index];

                if (recentKey.getItemIndex() === object.getItemIndex()) {
                    recentKeys.splice(index, 1);
                    console.log(recentKeys)
                };
            };
        };

        recentKeys.push(object);
    };

    const pull = () => {
        const cont_items = component.querySelector('#items');
        let lastChild;

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

        for (let recentKey of recentKeys) {
            cont_items.appendChild(await recentKey.render())
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