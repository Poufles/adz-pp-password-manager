const template =
`
    <?xml version="1.0" ?><svg class="feather feather-check" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>
    <p class="text" id="message"></p>
`;

export default function HintTool(message) {
    const component = document.createElement('div');
    component.classList.add('container', 'comp-hint-tool');
    component.setAttribute('id', 'hint');

    const play = () => {
        if (document.body.contains(component)) return;

        component.innerHTML = template;

        const p_message = component.querySelector('p#message');
        p_message.textContent = message;
        
        document.body.appendChild(component);
        component.classList.add('play');
        setTimeout(() => {
            document.body.removeChild(component);
            component.classList.remove('play');
        }, 3000);
    };

    return {
        play
    };
};