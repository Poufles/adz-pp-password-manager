const template =
    `
        <div class="container" id="top">
            <div id="left">
                <p class="text color" id="title">KeyGen</p>
                <svg class="fill" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.53034 30.336C3.40314 31.4617 3.40314 33.294 4.53034 34.4204C5.65674 35.5474 7.48882 35.5474 8.60754 34.4204L9.4217 33.614L12.8167 37.0082C13.3973 37.5897 14.3278 37.5897 14.9091 37.0082L19.9687 31.9487C20.5501 31.3683 20.5501 30.4375 19.9687 29.8562L16.5743 26.462L22.6212 20.4074C23.9151 21.076 25.39 21.4534 26.9459 21.4534C32.1647 21.4534 36.3948 17.2239 36.3948 12.0047C36.3948 6.78616 32.1647 2.55584 26.9459 2.55584C21.7269 2.55584 17.4971 6.78616 17.4971 12.0047C17.4971 13.5606 17.8748 15.0356 18.5433 16.3295L4.53034 30.336ZM23.3117 12.0047C23.3117 9.99872 24.94 8.3704 26.9459 8.3704C28.9519 8.3704 30.5799 9.99872 30.5799 12.0047C30.5799 14.0107 28.9519 15.6388 26.9459 15.6388C24.9401 15.6388 23.3117 14.0106 23.3117 12.0047Z" />
                </svg>
            </div>
            <div id="right">
                <button type="circle" class="circle" id="close">
                    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.83331 31.1667C9.16665 31.5 9.49998 31.6667 9.99998 31.6667C10.5 31.6667 10.8333 31.5 11.1666 31.1667L20 22.3333L28.8333 31.1667C29.1666 31.5 29.6666 31.6667 30 31.6667C30.3333 31.6667 30.8333 31.5 31.1666 31.1667C31.8333 30.5 31.8333 29.5 31.1666 28.8333L22.3333 20L31.1666 11.1667C31.8333 10.5 31.8333 9.5 31.1666 8.83333C30.5 8.16667 29.5 8.16667 28.8333 8.83333L20 17.6667L11.1666 8.83333C10.5 8.16667 9.49998 8.16667 8.83331 8.83333C8.16665 9.5 8.16665 10.5 8.83331 11.1667L17.6666 20L8.83331 28.8333C8.16665 29.5 8.16665 30.5 8.83331 31.1667Z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="wrapper" id="key-box">
            <div class="container" id="box">
                <div class="circle" id="circle-1"></div>
                <div class="circle" id="circle-2"></div>
                <input type="text" class="text-sub color" id="password-test" placeholder="Key Will Appear Here !">
            </div>
        </div>
        <div id="generate-form">
            <div class="container inputs" id="input-indicator">
                <div class="container">
                    <p class="text color">Password Strength</p>
                    <p class="text color" id="text-indicator">No Input</p>
                </div>
                <div class="container" id="indicator-bar">
                    <div id="indicator" data-value="0" style="--value: 0%"></div>
                </div>
            </div>
            <div class="container inputs" id="input-length">
                <div class="container">
                    <p class="text color">Password Length</p>
                    <p class="text color" id="text-indicator">16</p>
                </div>
                <input class="text-sub color" type="range" min="8" max="20" id="length-range">
            </div>
            <div class="container inputs" id="input-major-alphabet">
                <p class="text color">A-Z</p>
                <label tabindex="0" role="button" class="text color" for="major-alphabet">
                    <div id="thumb"></div>
                </label>
                <input class="text color" type="checkbox" id="major-alphabet">
            </div>
            <div class="container inputs" id="input-minor-alphabet">
                <p class="text-sub color">a-z</p>
                <label tabindex="0" role="button" class="text color" for="minor-alphabet">
                    <div id="thumb"></div>
                </label>
                <input class="text color" type="checkbox" id="minor-alphabet">
            </div>
            <div class="container inputs" id="input-num">
                <p class="text color">0-9</p>
                <label tabindex="0" role="button" class="text color" for="num">
                    <div id="thumb"></div>
                </label>
                <input class="text color" type="checkbox" id="num">
            </div>
            <div class="container inputs" id="input-sign">
                <p class="text color">!@#$%^&*()</p>
                <label tabindex="0" role="button" class="text color" for="sign">
                    <div id="thumb"></div>
                </label>
                <input class="text color" type="checkbox" id="sign">
            </div>
            <div class="container inputs" id="input-actions">
                <button class="text color" id="copy">
                    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M27.5 27.5V32.5C27.5 35.3807 25.3807 37.5 22.5 37.5H7.5C4.61929 37.5 2.5 35.3807 2.5 32.5V17.5C2.5 14.6193 4.61929 12.5 7.5 12.5H12.5V7.5C12.5 4.61929 14.6193 2.5 17.5 2.5H32.5C35.3807 2.5 37.5 4.61929 37.5 7.5V22.5C37.5 25.3807 35.3807 27.5 32.5 27.5H27.5ZM22.5 27.5H17.5C14.6193 27.5 12.5 25.3807 12.5 22.5V17.5H7.5V32.5H22.5V27.5ZM17.5 7.5V22.5H32.5V7.5H17.5Z" />
                    </svg>
                </button>
                <button class="text" id="generate">
                    <p class="text">Generate</p>
                </button>
            </div>
        </div>
        <div class="text" id="advise">
            <p id="dyk">Did You Know !</p>
            <p id="msg">
                You can also test your own password
                by typing on the password panel ?
            </p>
        </div>
`;

const KeyGenComponent = function () {
    let isShown = false;

    const container = document.querySelector('#page__dashboard #bottom');
    const component = document.createElement('section');
    component.classList.add('card', 'creation');
    component.setAttribute('id', 'generator');

    const render = () => {
        component.innerHTML = template;

        const btn_close = component.querySelector('#close');

        btn_close.addEventListener('click', () => {
            unrender();
        });

        LoadInputListeners(component);

        if (!container.contains(component)) {
            container.appendChild(component);
            isShown = true;
        }
    };

    const unrender = () => {
        if (container.contains(component)) {
            container.removeChild(component);
            isShown = false;
        };
    };

    const isRendered = () => isShown;

    return {
        render,
        unrender,
        isRendered
    };
}();

/**
 * Load listeners for input elements
 * @param {Node} component - KeyGen component 
 */
function LoadInputListeners(component) {

};

function LoadActionListeners() {

}

function GenerateKey() {

};

export default KeyGenComponent;