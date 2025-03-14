import Encryption from "./password-encryption";
import StorageHandler from "./storage-handler";
import { hidden_eye, open_eye } from "./svg";

const template =
    `
            <div class="circle" id="circle-1"></div>
            <div class="circle" id="circle-2"></div>            
            <div class="container" id="header">
                <div class="container" id="header-text">
                    <div class="container-icon">
                        <?xml version="1.0" ?><svg style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="grid_system"/><g id="_icons"><g><path d="M21.2,16.5L14.6,4.7c-0.5-1-1.5-1.5-2.6-1.5S9.9,3.7,9.4,4.7L2.8,16.5c-0.5,0.9-0.5,2.1,0,3S4.3,21,5.4,21h13.2    c1.1,0,2-0.6,2.6-1.5S21.7,17.5,21.2,16.5z M19.5,18.5c-0.1,0.1-0.3,0.5-0.9,0.5H5.4c-0.5,0-0.8-0.3-0.9-0.5s-0.3-0.5,0-1    l6.6-11.9c0.3-0.5,0.7-0.5,0.9-0.5s0.6,0,0.9,0.5l6.6,11.9C19.7,18,19.5,18.4,19.5,18.5z"/><path d="M12,9c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3C13,9.4,12.6,9,12,9z"/><circle cx="12" cy="16" r="1"/></g></g></svg>
                    </div>
                    <p class="text color" id="header-text-message">
                        Attention
                    </p>
                </div>
                <button type="button" class="button circle" id="header-close">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.83331 31.1667C9.16665 31.5 9.49998 31.6667 9.99998 31.6667C10.5 31.6667 10.8333 31.5 11.1666 31.1667L20 22.3333L28.8333 31.1667C29.1666 31.5 29.6666 31.6667 30 31.6667C30.3333 31.6667 30.8333 31.5 31.1666 31.1667C31.8333 30.5 31.8333 29.5 31.1666 28.8333L22.3333 20L31.1666 11.1667C31.8333 10.5 31.8333 9.5 31.1666 8.83333C30.5 8.16667 29.5 8.16667 28.8333 8.83333L20 17.6667L11.1666 8.83333C10.5 8.16667 9.49998 8.16667 8.83331 8.83333C8.16665 9.5 8.16665 10.5 8.83331 11.1667L17.6666 20L8.83331 28.8333C8.16665 29.5 8.16665 30.5 8.83331 31.1667Z" fill=""/>
                        </svg>
                </button>
            </div>
            <div class="container" id="content">
                <div class="container" id="text">
                    <p class="text color" id="text-message">You are changing a critical information. Please confirm with your master password:</p>
                </div>
                <div class="container" id="input">
                    <input type="password" class="text-sub color" placeholder="Enter your password">
                    <div class="container-icon">
                        <button type="button" class="button no-bg" id="visibility">
                            <?xml version="1.0" ?><svg enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20.722,24.964c0.096,0.096,0.057,0.264-0.073,0.306c-7.7,2.466-16.032-1.503-18.594-8.942  c-0.072-0.21-0.072-0.444,0-0.655c0.743-2.157,1.99-4.047,3.588-5.573c0.061-0.058,0.158-0.056,0.217,0.003l4.302,4.302  c0.03,0.03,0.041,0.072,0.031,0.113c-1.116,4.345,2.948,8.395,7.276,7.294c0.049-0.013,0.095-0.004,0.131,0.032  C17.958,22.201,20.045,24.287,20.722,24.964z" id="XMLID_323_"/><path d="M24.68,23.266c2.406-1.692,4.281-4.079,5.266-6.941c0.072-0.21,0.072-0.44,0-0.65  C27.954,9.888,22.35,6,16,6c-2.479,0-4.841,0.597-6.921,1.665L3.707,2.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414  l26,26c0.391,0.391,1.023,0.391,1.414,0c0.391-0.391,0.391-1.023,0-1.414L24.68,23.266z M16,10c3.309,0,6,2.691,6,6  c0,1.294-0.416,2.49-1.115,3.471l-8.356-8.356C13.51,10.416,14.706,10,16,10z" id="XMLID_325_"/></svg>
                        </button>
                    </div>
                </div>
                <div class="container" id="action">
                    <button type="button" class="button no-bg text" id="action-cancel">Cancel</button>
                    <button type="button" class="button text" id="action-confirm">I AGREE</button>
                </div>
            </div>
`;

const MessageBox = function () {
    let critical;
    let confirmOnly;
    const cont_overlay = document.createElement('div');
    const component = document.createElement('div');

    cont_overlay.setAttribute('id', 'overlay');
    component.classList.add('component-message-box');
    component.setAttribute('id', 'message-confirmation');

    const create = (message, { isEdit, isLogout, isConfirmOnly, isCritical } = {}) => {
        critical = isCritical;
        confirmOnly = isConfirmOnly;

        component.innerHTML = template;
        LoadInformation(component, message, { isEdit, isLogout, isConfirmOnly, isCritical });
        cont_overlay.appendChild(component);
    };

    const render = () => {
        document.body.prepend(cont_overlay);
        cont_overlay.classList.add('open');

        const cont_input = component.querySelector('#input');
        const input_password = cont_input.querySelector('input');
        const btn_visibility = component.querySelector('#input button#visibility');

        component.addEventListener('click', (e) => {
            e.stopPropagation();
        })

        input_password.addEventListener('focus', () => {
            if (cont_input.classList.contains('invalid')) {
                cont_input.classList.remove('invalid');
                input_password.placeholder = 'Enter your password';
            };
        });

        btn_visibility.addEventListener('click', function () {
            let isHidden = !this.classList.contains('open-eye');
            this.innerHTML = isHidden ? open_eye : hidden_eye;
            if (isHidden) {
                input_password.setAttribute('type', 'text');
                this.classList.add('open-eye');
            } else {
                input_password.setAttribute('type', 'password');
                this.classList.remove('open-eye');
            }
        });

        // PROMISE IS NEW TO ME
        // SO I LET THE BASE CODE BE TAKEN FROM CHATGPT
        // AND MODIFIED IT TO MY OWN
        // SEE THE COMMENT CODE FAR DOWN
        return new Promise((resolve) => {
            const btn_close = component.querySelector('button#header-close');
            const btn_cancel = component.querySelector('button#action-cancel');
            const btn_confirm = component.querySelector('button#action-confirm');

            cont_overlay.addEventListener('click', (e) => {
                if (confirmOnly) {
                    unrender()
                    resolve(true);    
                };

                unrender();
                resolve(false);
            });

            btn_close.addEventListener('click', () => {
                if (confirmOnly) {
                    unrender()
                    resolve(true);    
                };

                unrender();
                resolve(false);
            });

            btn_cancel.addEventListener('click', () => {
                unrender();
                resolve(false);
            });

            btn_confirm.addEventListener('click', async () => {
                if (critical) {
                    const cont_input = component.querySelector('#input');
                    const input_password = cont_input.querySelector('input');

                    const isMatch = await VerifyPassword(input_password.value)

                    console.log(isMatch);

                    if (!isMatch) {
                        cont_input.classList.add('invalid');
                        input_password.value = '';
                        input_password.placeholder = 'Invalid Password !';

                        return;
                    };

                    unrender();
                    resolve(true);
                    return;
                };

                unrender();
                resolve(true);
            });
        });
    };

    const unrender = () => {
        critical = undefined;
        confirmOnly = undefined
        cont_overlay.classList.remove('open');

        setTimeout(() => {
            if (document.body.contains(cont_overlay)) {
                document.body.removeChild(cont_overlay);
            }
            component.innerHTML = '';
        }, 200);
    };

    return {
        create,
        render,
        unrender
    };
}();

function LoadInformation(component, message, { isEdit, isLogout, isConfirmOnly, isCritical } = {}) {
    const p_header_message = component.querySelector('#header-text-message');
    const p_content_message = component.querySelector('#content #text-message');
    const cont_input = component.querySelector('#content #input');
    const btn_cancel = component.querySelector('button#action-cancel');
    const btn_confirm = component.querySelector('button#action-confirm');

    if (isLogout) {
        cont_input.setAttribute('style', 'display: none');
        p_header_message.textContent = 'End Session ?';
        btn_confirm.textContent = 'End Session';
    };

    if (isConfirmOnly) {
        btn_cancel.setAttribute('style', 'display: none');
        p_header_message.textContent = ' Account Updated !';
        cont_input.setAttribute('style', 'display: none');
    };

    if (isEdit) {
        p_header_message.textContent = 'Cancel Edit ?';
        cont_input.setAttribute('style', 'display: none');
        btn_confirm.textContent = 'Apply Changes';
    };

    if (isCritical) {
        p_header_message.textContent = 'Attention !';
    };

    if (message !== 'default') {
        p_content_message.textContent = message;
    };
};

async function VerifyPassword(password) {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const masterkey = sessionStorage.masterkey;

    const isMatch = await Encryption.comparePassword(password, masterkey);

    if (isMatch) return true;
    return false;
};

export default MessageBox;






// FROM CHATGPT
// const showConfirmModal = (function () {
//     return function (message) {
//         return new Promise((resolve) => {
//             // Create modal elements
//             const backdrop = document.createElement('div');
//             backdrop.className = 'modal-backdrop';

//             const modal = document.createElement('div');
//             modal.className = 'modal';
//             modal.innerHTML = `
//             <p>${message}</p>
//             <button class="confirm">Confirm</button>
//             <button class="cancel">Cancel</button>
//             `;

//             backdrop.appendChild(modal);
//             document.body.appendChild(backdrop);

//             // Event listeners for buttons
//             const cleanup = () => document.body.removeChild(backdrop);

//             modal.querySelector('.confirm').onclick = () => {
//                 cleanup();
//                 resolve(true);
//             };

//             modal.querySelector('.cancel').onclick = () => {
//                 cleanup();
//                 resolve(false);
//             };
//         });
//     };
// })();