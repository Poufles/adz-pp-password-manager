const ArticleKeysContainer = function () {
    const keys = [];
    const container = document.querySelector('#page__dashboard #bottom section#articles');
    const component = document.createElement('section');
    component.classList.add('container');
    component.setAttribute('id', 'key-items');

    const getKeys = () => keys;

    const render = () => {
        if (container && !container.contains(component)) {
            container.appendChild(component);
        }
    };

    const unrender = () => {
        if (container && container.contains(component)) {
            container.removeChild(component);
        }
    }

    const insert = ({ childNode, object, isNew = true }) => {
        if (!isNew) {
            component.prepend(childNode);
            return;
        };

        if (!component.contains(childNode)) {
            keys.push(object);
            component.prepend(childNode);
        };
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

    return {
        render,
        unrender,
        insert,
        pull,
        getKeys
    }
}();

export default ArticleKeysContainer;