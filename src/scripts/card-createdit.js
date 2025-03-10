import { CreateNewKeyItem, UpdateKeyItem } from "./crud";
import KeyItem from "./card-key";
import StorageHandler from "./storage-handler";
import Encryption from "./password-encryption";
import { hidden_eye, open_eye } from "./svg";
import KeyGenComponent from "./card-keygen";

const component_template =
    `
        <div class="container" id="top">
            <div id="left">
                <p class="text color" id="title">New Key Item</p>
                <button class="button no-bg" id="favorite">
                    <svg class="stroke" width="40" height="40" viewBox="0 0 40 40" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.0525 4.43501L25.165 13.165C25.3363 13.5275 25.6663 13.7788 26.0488 13.8375L35.245 15.2375C36.2075 15.3838 36.5913 16.6225 35.895 17.3338L29.24 24.1288C28.9638 24.4113 28.8375 24.8175 28.9025 25.2163L30.4738 34.8113C30.6375 35.815 29.6325 36.5813 28.7713 36.1063L20.5463 31.5763C20.205 31.3875 19.7963 31.3875 19.455 31.5763L11.23 36.1063C10.37 36.58 9.36375 35.815 9.5275 34.8113L11.0988 25.2163C11.1638 24.8175 11.0375 24.4113 10.7613 24.1288L4.10625 17.3338C3.41 16.6225 3.79375 15.3838 4.75625 15.2375L13.9525 13.8375C14.335 13.7788 14.665 13.5275 14.8363 13.165L18.9488 4.43501C19.3788 3.52126 20.6213 3.52126 21.0525 4.43501Z"
                            stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
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
        <div class="wrapper" id="requirement">
            <div class="container" id="box">
                <div class="circle" id="circle-1"></div>
                <div class="circle" id="circle-2"></div>
                <div class="container info" id="required-info">
                    <p class=" text color" id="required-name">Required</p>
                    <ul class="list text color" id="required">
                        <li class="text color" id="item-1">Email Address</li>
                        <li id="item-2">Password</li>
                        <li id="item-3">Website</li>
                    </ul>
                </div>
                <div class="container info" id="optional-info">
                    <p class=" text color" id="optional-name">Optional</p>
                    <ul class="list text color" id="optional">
                        <li id="item-1">Favorite</li>
                        <li id="item-2">Hint</li>
                        <li id="item-3">Folder</li>
                    </ul>
                </div>
            </div>
        </div>
        <form action="#" method="post" id="create-form">
            <div class="container inputs" id="input-email">
                <label class="text color" for="email">Email Address</label>
                <input class="text-sub color" type="email" id="email">
            </div>
            <div class="container inputs" id="input-password">
                <label class="text color" for="password">Password</label>
                <div class="wrapper">
                    <div class="container">
                        <input class="text-sub color" type="password" id="password">
                        <button type="button" class="button no-bg" id="eye-hidden">
                            <?xml version="1.0" ?><svg enable-background="new 0 0 32 32" id="Glyph" version="1.1"
                                viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path
                                    d="M20.722,24.964c0.096,0.096,0.057,0.264-0.073,0.306c-7.7,2.466-16.032-1.503-18.594-8.942  c-0.072-0.21-0.072-0.444,0-0.655c0.743-2.157,1.99-4.047,3.588-5.573c0.061-0.058,0.158-0.056,0.217,0.003l4.302,4.302  c0.03,0.03,0.041,0.072,0.031,0.113c-1.116,4.345,2.948,8.395,7.276,7.294c0.049-0.013,0.095-0.004,0.131,0.032  C17.958,22.201,20.045,24.287,20.722,24.964z"
                                    id="XMLID_323_" />
                                <path
                                    d="M24.68,23.266c2.406-1.692,4.281-4.079,5.266-6.941c0.072-0.21,0.072-0.44,0-0.65  C27.954,9.888,22.35,6,16,6c-2.479,0-4.841,0.597-6.921,1.665L3.707,2.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414  l26,26c0.391,0.391,1.023,0.391,1.414,0c0.391-0.391,0.391-1.023,0-1.414L24.68,23.266z M16,10c3.309,0,6,2.691,6,6  c0,1.294-0.416,2.49-1.115,3.471l-8.356-8.356C13.51,10.416,14.706,10,16,10z"
                                    id="XMLID_325_" />
                            </svg>
                        </button>
                    </div>
                    <button type="button" id="keygen">
                        <p class="text">KeyGen</p>
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.53034 30.336C3.40314 31.4617 3.40314 33.294 4.53034 34.4204C5.65674 35.5474 7.48882 35.5474 8.60754 34.4204L9.4217 33.614L12.8167 37.0082C13.3973 37.5897 14.3278 37.5897 14.9091 37.0082L19.9687 31.9487C20.5501 31.3683 20.5501 30.4375 19.9687 29.8562L16.5743 26.462L22.6212 20.4074C23.9151 21.076 25.39 21.4534 26.9459 21.4534C32.1647 21.4534 36.3948 17.2239 36.3948 12.0047C36.3948 6.78616 32.1647 2.55584 26.9459 2.55584C21.7269 2.55584 17.4971 6.78616 17.4971 12.0047C17.4971 13.5606 17.8748 15.0356 18.5433 16.3295L4.53034 30.336ZM23.3117 12.0047C23.3117 9.99872 24.94 8.3704 26.9459 8.3704C28.9519 8.3704 30.5799 9.99872 30.5799 12.0047C30.5799 14.0107 28.9519 15.6388 26.9459 15.6388C24.9401 15.6388 23.3117 14.0106 23.3117 12.0047Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="container inputs" id="input-website">
                <label class="text color" for="website">Website</label>
                <div class="container dropdown">
                    <input class="text-sub color" type="text" id="website">
                    <button type="button" class="button no-bg" id="arrow-website">
                        <svg class="fill" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.72656 14.4297L7.86719 14.5938L18.4922 26.8203C18.8516 27.2344 19.3906 27.4922 19.9922 27.4922C20.5937 27.4922 21.1328 27.2266 21.4922 26.8203L32.1094 14.6172L32.2891 14.4141C32.4219 14.2188 32.5 13.9844 32.5 13.7344C32.5 13.0547 31.9219 12.5 31.2031 12.5H8.79687C8.07812 12.5 7.5 13.0547 7.5 13.7344C7.5 13.9922 7.58594 14.2344 7.72656 14.4297Z"/>
                            </svg>
                    </button>
                </div>
            </div>
            <div class="container inputs" id="input-hint">
                <label class="text color" for="hint">Hint <span id="notice">&lpar;Up to 40
                        Characters&rpar;</span></label>
                <input class="text color" type="text" id="hint">
            </div>
            <div class="container inputs" id="input-folder">
                <label class="text color" for="folder">Folder</label>
                <div class="container dropdown">
                    <input class="text color" type="text" id="folder">
                    <button type="button" class="button no-bg" id="arrow-folder">
                        <svg class="fill" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.72656 14.4297L7.86719 14.5938L18.4922 26.8203C18.8516 27.2344 19.3906 27.4922 19.9922 27.4922C20.5937 27.4922 21.1328 27.2266 21.4922 26.8203L32.1094 14.6172L32.2891 14.4141C32.4219 14.2188 32.5 13.9844 32.5 13.7344C32.5 13.0547 31.9219 12.5 31.2031 12.5H8.79687C8.07812 12.5 7.5 13.0547 7.5 13.7344C7.5 13.9922 7.58594 14.2344 7.72656 14.4297Z"/>
                            </svg>
                    </button>
                </div>
            </div>
            <div class="container inputs" id="input-actions">
                <button class="text color no-bg" type="reset" id="reset">Reset</button>
                <button class="text" type="button" id="submit">
                    <p class="text">Create</p>
                    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M24.6707 10.7421L14.4935 20.916C13.8182 21.5132 13.4005 22.3487 13.3333 23.113V26.6716L16.7733 26.6747C17.6637 26.6117 18.4925 26.1973 19.158 25.436L29.2611 15.3329L24.6707 10.7421ZM27.0281 8.38547L31.6182 12.9758L33.108 11.486C33.2523 11.3417 33.3334 11.1459 33.3334 10.9418C33.3334 10.7377 33.2523 10.5419 33.108 10.3976L29.6019 6.89143C29.4591 6.74757 29.2649 6.66667 29.0622 6.66667C28.8596 6.66667 28.6653 6.74757 28.5226 6.89143L27.0281 8.38547ZM36.6666 21.6667V33.3333C36.6666 35.1743 35.1743 36.6667 33.3333 36.6667H6.66665C4.8257 36.6667 3.33331 35.1743 3.33331 33.3333V6.66667C3.33331 4.82572 4.8257 3.33333 6.66665 3.33333H18.3333V6.66667H6.66665V33.3333H33.3333V21.6667H36.6666ZM29.0622 3.33333C30.1535 3.33333 31.1995 3.76903 31.9635 4.53904L35.465 8.04053C36.2345 8.81 36.6667 9.85361 36.6667 10.9418C36.6667 12.03 36.2345 13.0736 35.465 13.8431L21.5958 27.7063C20.4317 29.0492 18.7815 29.8742 16.891 30.0039H9.99998V28.3372L10.0054 22.9788C10.1474 21.2214 10.9644 19.5872 12.2108 18.489L26.159 4.54105C26.9273 3.76805 27.9722 3.33333 29.0622 3.33333Z" />
                    </svg>
                </button>
            </div>
        </form>
        <p class="text" id="advise">Be sure to double check !</p>
    `;


const CreatEditComponent = function () {
    let isShown = false;
    let isCollapsed = false;
    let componentMode;
    // Create component
    const container = document.querySelector('#bottom #crud');
    const component = document.createElement('section');
    component.classList.add('card', 'creation');
    component.setAttribute('id', 'creator');

    /**
     * Renders component
     * @param {String} mode - Mode to be rendered (create || edit) 
     * @param {Object} data - (Optional) Object to be passed when in edit mode
     */
    const render = (mode, data = null) => {
        componentMode = mode;
        component.innerHTML = component_template;

        const p_title = component.querySelector('#left #title')
        const p_submit = component.querySelector('#submit p');
        const btn_close = component.querySelector('#close');

        p_title.textContent = componentMode.charAt(0).toUpperCase() + componentMode.slice(1);
        p_submit.textContent = componentMode.charAt(0).toUpperCase() + componentMode.slice(1);;

        btn_close.addEventListener('click', () => {
            isShown = false;
            container.classList.remove('open');
            unrender();
        });

        LoadInputInfoAndListeners(component, data, unrender);
        LoadActionListener(component, data);

        if (!container.contains(component)) {
            container.appendChild(component);
            isShown = true;
        }
    };

    const unrender = () => {
        if (container.contains(component)) {
            container.removeChild(component);
            isShown = false;
        }
    }

    const collapseRender = () => {
        if (isCollapsed) return;

        isCollapsed = true;
        component.classList.add('collapsed');
        component.setAttribute('role', 'button');
        component.tabIndex = 0;

        component.addEventListener('click', uncollapseRender, { once: true });
    };

    const uncollapseRender = () => {
        if (KeyGenComponent.isRendered()) {
            KeyGenComponent.unrender();
        }

        isCollapsed = false;
        component.classList.remove('collapsed');
        component.removeAttribute('role');
        component.removeAttribute('tabindex');
    }

    const isRendered = () => isShown;
    const getMode = () => componentMode;

    return {
        render,
        unrender,
        isRendered,
        collapseRender,
        uncollapseRender,
        getMode
    }
}();

/**
 * Load listeners for input (and information for edit)
 * @param {Node} component - CreatEdit component
 * @param {Object} data - Data object for edit
 */
async function LoadInputInfoAndListeners(component, data) {
    const p_advise = component.querySelector('#advise');
    const form = component.querySelector('form');
    const btn_fav = component.querySelector('button#favorite');
    const input_email = form.querySelector('#email');
    const cont_password = form.querySelector('#input-password .wrapper>.container');
    const input_password = cont_password.querySelector('#password');
    const btn_keygen = form.querySelector('#keygen')
    const cont_website = form.querySelector('#input-website');
    const cont_dropdown = cont_website.querySelector('.dropdown');
    const input_website = cont_dropdown.querySelector('#website');
    const input_hint = form.querySelector('#hint');
    const input_folder = form.querySelector('#folder');
    const p_required_email = component.querySelector('#required #item-1');
    const p_required_password = component.querySelector('#required #item-2');
    const p_required_website = component.querySelector('#required #item-3');
    const p_optional_fav = component.querySelector('#optional #item-1');
    const p_optional_hint = component.querySelector('#optional #item-2');
    const p_optional_folder = component.querySelector('#optional #item-3');
    const btn_eye = component.querySelector('button#eye-hidden');

    if (data !== null) {
        LoadExistingData(data.item, {
            fav: btn_fav,
            email: input_email,
            password: input_password,
            website: input_website,
            hint: input_hint,
            folder: input_folder
        }, {
            fav: p_optional_fav,
            email: p_required_email,
            password: p_required_password,
            website: p_required_website,
            hint: p_optional_hint,
            folder: p_optional_folder,
        })
    };

    input_email.addEventListener('keyup', (e) => {
        const input = input_email.value;

        if (isValidEmail(input)) {
            p_required_email.classList.add('ticked');
        } else {
            p_required_email.classList.remove('ticked');
        }
    });

    input_email.addEventListener('focus', (e) => {
        const input = input_email.value;

        if (input == '') {
            input_email.classList.remove('invalid');
            p_advise.classList.remove('invalid');
            p_advise.textContent = 'Be sure to double check !';
        }

        if (input != '') {
            input_email.classList.remove('invalid');
            p_advise.classList.remove('invalid');
            p_advise.textContent = 'Be sure to double check !';
        }
    });

    input_email.addEventListener('blur', (e) => {
        const input = input_email.value;

        if (input == '') {
            input_email.classList.remove('invalid');
            p_advise.classList.remove('invalid');
            p_advise.textContent = 'Be sure to double check !';
        }

        if (input != '' && !isValidEmail(input)) {
            input_email.classList.add('invalid');
            p_advise.classList.add('invalid');
            p_advise.textContent = 'Invalid E-mail !';
        }
    });

    input_password.addEventListener('focus', () => {
        if (cont_password.classList.contains('invalid')) {
            cont_password.classList.remove('invalid');
            p_advise.classList.remove('invalid');
            p_advise.textContent = 'Be sure to double check !';
        }
    });

    input_password.addEventListener('keyup', (e) => TickRequiredOptional(input_password, p_required_password));

    input_website.addEventListener('focus', () => {
        if (cont_dropdown.classList.contains('invalid')) {
            cont_dropdown.classList.remove('invalid');
            p_advise.classList.remove('invalid');
            p_advise.textContent = 'Be sure to double check !';
        }
    });

    input_website.addEventListener('keyup', (e) => TickRequiredOptional(input_website, p_required_website));

    input_hint.addEventListener('keyup', (e) => TickRequiredOptional(input_hint, p_optional_hint));

    input_folder.addEventListener('keyup', (e) => TickRequiredOptional(input_folder, p_optional_folder));

    btn_fav.addEventListener('click', (e) => {
        const input = btn_fav.classList.contains('ticked') ? true : false;

        if (input) {
            btn_fav.classList.remove('ticked');
            p_optional_fav.classList.remove('ticked');
        } else {
            btn_fav.classList.add('ticked');
            p_optional_fav.classList.add('ticked');
        }
    });

    btn_eye.addEventListener('mouseup', function () {
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

    btn_keygen.addEventListener('click', (e) => {
        // Prevent bubbling
        e.stopPropagation();

        CreatEditComponent.collapseRender();
        KeyGenComponent.render();
    });

    LoadDropDownListeners(component, 'website');
    LoadDropDownListeners(component, 'folder');
}

/**
 * Load listeners for actions
 * @param {Node} component - CreatEdit component
 * @param {Object} data - Data object for edit
 */
function LoadActionListener(component, data) {
    const p_advise = component.querySelector('#advise');
    const form = component.querySelector('form');
    const btn_fav = component.querySelector('button#favorite');
    const input_email = form.querySelector('#email');
    const cont_password = form.querySelector('#input-password .wrapper>.container');
    const input_password = cont_password.querySelector('#password');
    const cont_website = form.querySelector('#input-website .dropdown');
    const input_website = cont_website.querySelector('#website');
    const input_hint = form.querySelector('#hint');
    const input_folder = form.querySelector('#folder');
    const btn_submit = form.querySelector('button#submit');
    const btn_reset = form.querySelector('button#reset');
    const p_required_email = component.querySelector('#required #item-1');
    const p_required_password = component.querySelector('#required #item-2');
    const p_required_website = component.querySelector('#required #item-3');
    const p_optional_fav = component.querySelector('#optional #item-1');
    const p_optional_hint = component.querySelector('#optional #item-2');
    const p_optional_folder = component.querySelector('#optional #item-3');

    btn_submit.addEventListener('click', async () => {
        const email = input_email.value;
        const key = input_password.value;
        const website = input_website.value;
        const fav = btn_fav.classList.contains('ticked') ? true : false;
        const hint = input_hint.value;
        const folder = input_folder.value;

        VerifyRequired('email', email, input_email, p_advise);
        VerifyRequired('password', key, cont_password, p_advise);
        VerifyRequired('website', website, cont_website, p_advise);

        if (!email || !key || !website) {
            p_advise.textContent = 'Required Information Missing !';
            p_advise.classList.add('invalid');
            
            return;
        }

        if (data !== null) {
            const newKey = await UpdateKeyItem({
                email,
                key,
                website,
                fav,
                hint,
                folder,
            }, data.index);

            // CHANGE THIS LATER
            // CreatEditComponent.unrender();
            location.reload();

            return;
        }

        const newKey = await CreateNewKeyItem({
            email,
            key,
            website,
            fav,
            hint,
            folder
        });

        KeyItem(newKey).render();
        CreatEditComponent.unrender();
    });

    btn_reset.addEventListener('click', (e) => {
        if (data != null) {
            e.preventDefault();
            LoadExistingData(data.item, {
                fav: btn_fav,
                email: input_email,
                password: input_password,
                website: input_website,
                hint: input_hint,
                folder: input_folder
            }, {
                fav: p_optional_fav,
                email: p_required_email,
                password: p_required_password,
                website: p_required_website,
                hint: p_optional_hint,
                folder: p_optional_folder,
            });
        };

        // DONT REMOVE 
        input_email.classList.remove('invalid');
        p_advise.classList.remove('invalid');
        p_advise.textContent = 'Be sure to double check !';
    });
};

function LoadDropDownListeners(component, dropdownFor) {
    const container = component.querySelector(`form #input-${dropdownFor}`);
    const cont_dropdown = container.querySelector('.dropdown');
    const inputField = cont_dropdown.querySelector(`#${dropdownFor}`);
    const btn_svg = cont_dropdown.querySelector(`#arrow-${dropdownFor}`);
    const reqOp = dropdownFor === 'website' ?
        component.querySelector('#required #item-3') :
        component.querySelector('#optional #item-3');

    btn_svg.addEventListener('click', () => {
        inputField.focus();
    });

    inputField.addEventListener('focus', () => {
        const storage = StorageHandler.GetLocalStorage();
        const isDropdownItemsExist = cont_dropdown.querySelector('#dropdown-items');
        let dataStorage;

        if (dropdownFor === 'website') {
            dataStorage = storage.app.websites;
        }

        if (dropdownFor === 'folder') {
            const sessionStorage = StorageHandler.GetSessionStorage();
            dataStorage = sessionStorage.folders;
        }

        if (!isDropdownItemsExist) {
            const cont_dropdown_items = document.createElement('div');
            cont_dropdown_items.setAttribute('id', 'dropdown-items');
            cont_dropdown.appendChild(cont_dropdown_items);

            for (let data of dataStorage) {
                const newItem = CreateDropdownItem(inputField, reqOp, data.name);

                cont_dropdown_items.appendChild(newItem);
            };
        };
    });

    inputField.addEventListener('blur', () => {
        const cont_dropdown_items = cont_dropdown.querySelector('#dropdown-items');

        if (cont_dropdown_items) {
            cont_dropdown.removeChild(cont_dropdown_items);
        };
    });

    inputField.addEventListener('input', (e) => {
        const storage = StorageHandler.GetLocalStorage();
        const search = inputField.value.toLowerCase();
        const cont_dropdown_items = cont_dropdown.querySelector('#dropdown-items');
        let dataStorage;

        if (dropdownFor === 'website') {
            dataStorage = storage.app.websites;
        }

        if (dropdownFor === 'folder') {
            const sessionStorage = StorageHandler.GetSessionStorage();
            dataStorage = sessionStorage.folders;
        }

        if (cont_dropdown_items) {
            cont_dropdown_items.innerHTML = '';

            for (let data of dataStorage) {
                const name = data.name;

                if (name.toLowerCase().includes(search)) {
                    const newItem = CreateDropdownItem(inputField, reqOp, name);
                    cont_dropdown_items.appendChild(newItem);
                }
            };
        }
    });
}

/**
 * Creates a dropdown item component
 * @param {Node} inputField - Input element to write the item name on 
 * @param {String} data - A text receiving the name of the item 
 * @returns Dropdown item
 */
function CreateDropdownItem(inputField, reqOpText, data) {
    const btn_dropdownItem = document.createElement('button');
    const itemName = data;

    let hasInput = inputField.value ? true : false;

    btn_dropdownItem.setAttribute('type', 'button');
    btn_dropdownItem.classList.add('text', 'item');
    btn_dropdownItem.textContent = itemName;

    btn_dropdownItem.addEventListener('mouseenter', (e) => {
        inputField.value = itemName;
    })

    btn_dropdownItem.addEventListener('mouseleave', (e) => {
        if (!hasInput) {
            inputField.value = '';
        }
    })

    btn_dropdownItem.addEventListener('mousedown', (e) => {
        inputField.value = itemName;
        reqOpText.classList.add('ticked');
        hasInput = true;
    })

    btn_dropdownItem.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            inputField.value = websiteName;
            reqOpText.classList.add('ticked');
            hasInput = true;
        }
    })

    return btn_dropdownItem;
};

/**
 * Loads existing data for editing
 * @param {Object} data - Object that contains information about key
 * @param {Object} inputObject - Object containing nodes of input elements
 * @param {Object} reqOpObject - Object containing nodes of required and optional elements
 */
async function LoadExistingData(data, inputObject, reqOpObject) {
    const account = StorageHandler.GetSessionStorage();
    const decryptedKey = await Encryption.decryptData(account.masterkey, data.key);

    inputObject.email.value = data.email;
    inputObject.password.value = decryptedKey;
    inputObject.website.value = data.website;
    inputObject.hint.value = data.hint;
    inputObject.folder.value = data.folder;

    if (data.fav) {
        inputObject.fav.classList.add('ticked');
        reqOpObject.fav.classList.add('ticked');
    } else {
        inputObject.fav.classList.remove('ticked');
        reqOpObject.fav.classList.remove('ticked');
    };

    TickRequiredOptional(inputObject.email, reqOpObject.email);
    TickRequiredOptional(inputObject.password, reqOpObject.password);
    TickRequiredOptional(inputObject.website, reqOpObject.website);
    TickRequiredOptional(inputObject.hint, reqOpObject.hint);
    TickRequiredOptional(inputObject.folder, reqOpObject.folder);
}

/**
 * Tick Required/Optional when conditions are met
 * @param {Node} data - Input element containing information 
 * @param {Node} toTick - Element to be ticked 
 */
function TickRequiredOptional(data, toTick) {
    const input = data.value;

    if (input != '') {
        toTick.classList.add('ticked');
    } else {
        toTick.classList.remove('ticked');
    }
}

function VerifyRequired(infoText, input, inputContainer, pAdvise) {
    const infoTextTitleCase = infoText.charAt(0).toUpperCase() + infoText.slice(1);

    if (!input) {
        inputContainer.classList.add('invalid');
        pAdvise.textContent = `${infoTextTitleCase} is required !`;
        pAdvise.classList.add('invalid');
    }
}

/**
 * Validates email (From ChatGPT)
 * @param {String} email - Email input 
 * @returns True if email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export default CreatEditComponent;