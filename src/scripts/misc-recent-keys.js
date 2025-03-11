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
    const recentKeys = [];
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
    
    const insert = (__component) => {
        if (component && !component.contains(__component)) {
            component.appendChild(__component);
            recentKeys.push(__component);
        };
    };

    const pull = () => {
        if (recentKeys.length != 0) {
            const lastChild = recentKeys.pop();

            component.removeChild(lastChild);
        };
    };

    return {
        render,
        unrender,
        insert,
        pull
    }
}();

export default MiscRecentKeys;