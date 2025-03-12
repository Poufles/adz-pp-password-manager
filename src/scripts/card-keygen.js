import CreatEditComponent from "./card-createdit";
import MiscContainer from "./misc-container";
import { hidden_eye, open_eye } from "./svg";

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
                <button class="circle" id="close">
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
                <button class="" id="visibility">
                        <?xml version="1.0" ?><svg enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20.722,24.964c0.096,0.096,0.057,0.264-0.073,0.306c-7.7,2.466-16.032-1.503-18.594-8.942  c-0.072-0.21-0.072-0.444,0-0.655c0.743-2.157,1.99-4.047,3.588-5.573c0.061-0.058,0.158-0.056,0.217,0.003l4.302,4.302  c0.03,0.03,0.041,0.072,0.031,0.113c-1.116,4.345,2.948,8.395,7.276,7.294c0.049-0.013,0.095-0.004,0.131,0.032  C17.958,22.201,20.045,24.287,20.722,24.964z" id="XMLID_323_"/><path d="M24.68,23.266c2.406-1.692,4.281-4.079,5.266-6.941c0.072-0.21,0.072-0.44,0-0.65  C27.954,9.888,22.35,6,16,6c-2.479,0-4.841,0.597-6.921,1.665L3.707,2.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414  l26,26c0.391,0.391,1.023,0.391,1.414,0c0.391-0.391,0.391-1.023,0-1.414L24.68,23.266z M16,10c3.309,0,6,2.691,6,6  c0,1.294-0.416,2.49-1.115,3.471l-8.356-8.356C13.51,10.416,14.706,10,16,10z" id="XMLID_325_"/></svg>
                    </button>
                <input type="password" class="text-sub color" id="password-test" placeholder="Key Will Appear Here !">
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
                    <p class="text color" id="text-indicator">14</p>
                </div>
                <input class="text-sub color" type="range" min="8" max="20" id="length-range">
            </div>
            <div class="container inputs" id="input-major-alphabet">
                <p class="text color">A-Z</p>
                <label tabindex="0" role="button" class="text color" for="major-alphabet">
                    <div id="thumb"></div>
                </label>
                <input class="text color" type="checkbox" id="major-alphabet" checked>
            </div>
            <div class="container inputs" id="input-minor-alphabet">
                <p class="text-sub color">a-z</p>
                <label tabindex="0" role="button" class="text color" for="minor-alphabet">
                    <div id="thumb"></div>
                </label>
                <input class="text color" type="checkbox" id="minor-alphabet" checked>
            </div>
            <div class="container inputs" id="input-num">
                <p class="text color">0-9</p>
                <label tabindex="0" role="button" class="text color" for="num">
                    <div id="thumb"></div>
                </label>
                <input class="text color" type="checkbox" id="num" checked>
            </div>
            <div class="container inputs" id="input-sign">
                <p class="text color">!@#$%^&*()</p>
                <label tabindex="0" role="button" class="text color" for="sign">
                    <div id="thumb"></div>
                </label>
                <input class="text color" type="checkbox" id="sign" checked>
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

    const container = document.querySelector('#bottom #crud');
    const component = document.createElement('section');
    component.classList.add('card', 'creation');
    component.setAttribute('id', 'generator');

    const render = () => {
        component.innerHTML = template;

        const btn_close = component.querySelector('#close');

        btn_close.addEventListener('click', () => {
            unrender();
            MiscContainer.render();
            container.classList.remove('open');

            if (CreatEditComponent.isRendered()) {
                container.classList.add('open');
                CreatEditComponent.uncollapseRender();
            };
        });

        LoadListeners(component);

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
 * Load listeners for elements
 * @param {Node} component - KeyGen component 
 */
function LoadListeners(component) {
    const btn_visibility = component.querySelector('#visibility');
    const btn_generate = component.querySelector('#generate')
    const btn_copy = component.querySelector('#copy');
    const p_showGenerated = component.querySelector('#password-test');
    const p_strength = component.querySelector('#input-indicator #text-indicator');
    const indicator_strength = component.querySelector('#input-indicator #indicator');
    const p_length = component.querySelector('#input-length #text-indicator');
    const input_length = component.querySelector('#length-range');
    const cb_uppercase = component.querySelector('#major-alphabet');
    const cb_lowercase = component.querySelector('#minor-alphabet');
    const cb_numbers = component.querySelector('#num');
    const cb_symbols = component.querySelector('#sign');

    input_length.addEventListener('input', () => {
        p_length.textContent = input_length.value;
    })

    p_showGenerated.addEventListener('input', () => {
        const key = p_showGenerated.value;
        const keyStrength = VerifyStrength(key);

        indicator_strength.setAttribute('style', `--value: ${String(keyStrength) == 'NaN' ? 0 : keyStrength}%`);
        p_strength.textContent = String(keyStrength) === 'NaN' ? 'No Input' : `${keyStrength}%`;
    });

    btn_visibility.addEventListener('click', function() {
        let isHidden = !this.classList.contains('open-eye');
        this.innerHTML = isHidden ? open_eye : hidden_eye;
        if (isHidden) {
            p_showGenerated.setAttribute('type', 'text');
            this.classList.add('open-eye');
        } else {
            p_showGenerated.setAttribute('type', 'password');
            this.classList.remove('open-eye');
        }
    });

    btn_generate.addEventListener('click', () => {
        const length = input_length.value;
        const uppercase = cb_uppercase.checked;
        const lowercase = cb_lowercase.checked;
        const numbers = cb_numbers.checked;
        const symbols = cb_symbols.checked;

        if (uppercase || lowercase || numbers || symbols) {
            const key = GenerateKey(length, uppercase, lowercase, numbers, symbols);
            const keyStrength = VerifyStrength(key);

            indicator_strength.setAttribute('style', `--value: ${keyStrength}%`);
            p_strength.textContent = `${keyStrength}%`;

            p_showGenerated.value = key;
        } else {
            p_showGenerated.value = '';
            p_showGenerated.placeholder = 'Tick at least one option !';

            setTimeout(() => {
                p_showGenerated.placeholder = 'Key Will Appear Here !'
            }, 5000);
        };
    });

    btn_copy.addEventListener('click', () => {
        const generatedKey = p_showGenerated.value;

        copyToClipboard(generatedKey);
    });
};

/**
 * Do I really need to explain
 * @param {Number} length 
 * @param {boolean} uppercase 
 * @param {boolean} lowercase 
 * @param {boolean} numbers 
 * @param {boolean} symbols 
 * @returns Generated key
 */
function GenerateKey(length, uppercase, lowercase, numbers, symbols) {
    const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const NUMS = '0123456789';
    const SYMBOLS = '!@#$%^&*()-_=+[]{}|;:,.<>?/~`';
    let pool = '';

    if (uppercase) pool += LETTERS;
    if (lowercase) pool += LETTERS.toLowerCase();
    if (numbers) pool += NUMS;
    if (symbols) pool += SYMBOLS;

    let generatedKey = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let iter = 0; iter < length; iter++) {
        generatedKey += pool[array[iter] % pool.length];
    }

    return generatedKey;
};

/**
 * Verify the strength of the password passed
 * @param {String} password 
 * @returns Returns strength of the password in string (0 to 100);
 */
export function VerifyStrength(password) {
    const length = password.length;

    let upperCount = 0, lowerCount = 0, numCount = 0, symbolCount = 0;
    let uniqueChars = new Set();
    let consecutiveChars = 0;
    let lastChar = '';

    const SYMBOLS = '!@#$%^&*()-_=+[]{}|;:,.<>?/~`';
    const NUMS = '0123456789';
    const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let char of password) {
        uniqueChars.add(char);

        if (LETTERS.includes(char)) upperCount++;
        else if (LETTERS.toLowerCase().includes(char)) lowerCount++;
        else if (NUMS.includes(char)) numCount++;
        else if (SYMBOLS.includes(char)) symbolCount++;

        if (char === lastChar) {
            consecutiveChars++;
        } else {
            consecutiveChars = 0;
        }
        lastChar = char;
    }

    let score = 0;

    if (length >= 8) score += 20;
    if (length >= 12) score += 10;
    if (length >= 16) score += 10;

    if (upperCount > 0) score += 10;
    if (lowerCount > 0) score += 10;
    if (numCount > 0) score += 15;
    if (symbolCount > 0) score += 20;

    let uniqueRatio = uniqueChars.size / length;
    score += Math.min(20, uniqueRatio * 20);

    if (consecutiveChars > 2) score -= 10;

    let categoryCount = (upperCount > 0) + (lowerCount > 0) + (numCount > 0) + (symbolCount > 0);
    if (categoryCount === 1) score -= 30;

    if (numCount === 0) score -= 10;
    if (symbolCount === 0) score -= 10;

    score = Math.max(0, Math.min(100, score));

    return score.toFixed(2);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => console.log("Texte copié !"))
        .catch(err => console.error("Erreur lors de la copie :", err));
}

export default KeyGenComponent;