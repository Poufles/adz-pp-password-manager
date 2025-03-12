const template =
`
    <?xml version="1.0" ?><svg class="feather feather-check" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>
    <p class="text" id="message"><span id="item-name">Item</span> Copied !</p>
`;

const HintTool = function () {
    // <div class="container comp-hint-tool" id="hint">
    const component = document.createElement('div');
    component.classList.add('container', 'comp-hint-tool');
    component.setAttribute('id', 'hint');

    const play = (message) => {
        if (document.body.contains(component)) return;

        const span_itemName = component.querySelector('#item-name');
        
        component.innerHTML = template;
        span_itemName.textContent = message;
        
        document.body.appendChild(component);
        setTimeout(() => {
            document.body.removeChild(component);
        }, 5000);
    };

    return {
        play
    }
}();

export default HintTool;