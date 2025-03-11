const template =
`
        <div class="circle"></div>
        <p class="text color" id="title">
            Keys Status
        </p>
        <div class="container circular-percentage" style="--percent: 0%">
            <div id="circle"></div>
            <p class="text color" id="percentage">0%</p>
        </div>
        <p class="text color" id="keys-checked">
            10 / 10 Keys Checked
        </p>
        <p class="text color" id="status">
            No Vulnerabilities Found !
        </p>
`;

const MiscKeysSecurity = function() {
    const component = document.createElement('article');
    component.classList.add('container');
    component.setAttribute('id', 'key-status');

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

    

    return {
        render,
        unrender
    };
}();

export default MiscKeysSecurity;