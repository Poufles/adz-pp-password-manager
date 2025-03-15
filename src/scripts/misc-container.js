const MiscContainer = function() {
    let isShown = false;
    const container = document.querySelector('#page__dashboard #bottom');
    const component = document.createElement('section');
    component.setAttribute('id', 'misc');

    const getComponent = () => component;
    const isRendered = () => isShown;

    const render = () => {
        const innerWidth = window.innerWidth;

        if (container && !container.contains(component) && innerWidth) {
            container.prepend(component);
            isShown = true;
        };
    };
    
    const unrender = () => {
        const innerWidth = window.innerWidth;

        if (container && container.contains(component) && innerWidth > 899) {
            container.removeChild(component);
            isShown = false;
        };
    };


    return {
        render,
        unrender,
        getComponent,
        isRendered
    }
}();

export default MiscContainer;

