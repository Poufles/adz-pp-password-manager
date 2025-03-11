const MiscContainer = function() {
    let isShown = false;
    const container = document.querySelector('#page__dashboard #bottom');
    const component = document.createElement('section');
    component.setAttribute('id', 'misc');

    const getComponent = () => component;
    const isRendered = () => isShown;

    const render = () => {
        if (container && !container.contains(component)) {
            container.prepend(component);
            isShown = true;
        };
    };
    
    const unrender = () => {
        if (container && container.contains(component)) {
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

