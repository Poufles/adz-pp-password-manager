import KeyItem from "./card-key";
import { CreateNewKeyItem } from "./crud";
import StorageHandler from "./storage-handler";
import { hidden_eye, open_eye } from "./svg";

const CreationComponent = function () {
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

    // Create component
    const creator_card = document.createElement('section');
    creator_card.classList.add('card', 'creation');
    creator_card.setAttribute('id', 'creator');
    creator_card.innerHTML = component_template;

    // Get required info texts
    const p_required_email = creator_card.querySelector('#required-info #required #item-1');
    const p_required_password = creator_card.querySelector('#required-info #required #item-2');
    const p_required_website = creator_card.querySelector('#required-info #required #item-3');

    // Get optional info texts
    const p_optional_fav = creator_card.querySelector('#optional-info #optional #item-1');
    const p_optional_hint = creator_card.querySelector('#optional-info #optional #item-2');
    const p_option_folder = creator_card.querySelector('#optional-info #optional #item-3');

    // Get advise text
    const p_advise = creator_card.querySelector('#advise');

    // Get fav button
    const btn_fav = creator_card.querySelector('button#favorite');
    // Listener for favorite button
    btn_fav.addEventListener('mouseup', function () {
        let isFavorite = this.classList.contains('ticked');
        if (isFavorite) {
            this.classList.remove('ticked');
            p_optional_fav.classList.remove('ticked');
        } else {
            this.classList.add('ticked');
            p_optional_fav.classList.add('ticked');
        }
    });

    // Get email input
    const input_email = creator_card.querySelector('input#email');
    // Listener for email
    input_email.addEventListener('focus', () => {
        if (input_email.classList.contains('invalid')) {
            input_email.classList.remove('invalid');
            p_advise.classList.remove('invalid');
            p_advise.textContent = 'Be sure to double check !';
        }
    });

    input_email.addEventListener('blur', () => {
        const email = input_email.value;

        // Validate empty input
        if (email === '') {
            p_required_email.classList.remove('ticked');
            return;
        }

        if (!isValidEmail(email)) {
            input_email.classList.add('invalid');
            p_advise.classList.add('invalid')
            p_advise.textContent = 'Invalid Email !';
            p_required_email.classList.remove('ticked');
        } else {
            p_required_email.classList.add('ticked');
        }
    })

    // Get password input
    const input_pass = creator_card.querySelector('input#password');
    const btn_eye = creator_card.querySelector('button#eye-hidden');
    // Listener for password
    input_pass.addEventListener('blur', () => {
        const pass = input_pass.value;

        // Validate empty input
        if (pass === '') {
            p_required_password.classList.remove('ticked');
            return;
        } else {
            p_required_password.classList.add('ticked');
        }

    })
    // Listener for eye button
    btn_eye.addEventListener('mouseup', function () {
        let isHidden = !this.classList.contains('open-eye');
        this.innerHTML = isHidden ? open_eye : hidden_eye;
        if (isHidden) {
            input_pass.setAttribute('type', 'text');
            this.classList.add('open-eye');
        } else {
            input_pass.setAttribute('type', 'password');
            this.classList.remove('open-eye');
        }
    });

    // Get website container
    const cont_website = creator_card.querySelector('#input-website .dropdown');
    const input_website = cont_website.querySelector('input#website');
    const btn_website = cont_website.querySelector('button#arrow-website');
    const storage = StorageHandler.GetLocalStorage();
    const websites = storage.app.websites;
    // Create dropdown
    DropdownLoader({
        container: cont_website,
        inputField: input_website,
        button: btn_website,
        itemType: websites
    });
    // Listeners for website
    input_website.addEventListener('blur', () => {
        const website = input_website.value;

        // Validate empty input
        if (website === '') {
            p_required_website.classList.remove('ticked');
            return;
        } else {
            p_required_website.classList.add('ticked');
        }
    })

    // Get hint input
    const input_hint = creator_card.querySelector('input#hint');
    // Listener for hint
    input_hint.addEventListener('blur', () => {
        const hint = input_hint.value;

        // Validate empty input
        if (hint === '') {
            p_optional_hint.classList.remove('ticked');
            return;
        } else {
            p_optional_hint.classList.add('ticked');
        }
    });

    input_hint.addEventListener('keyup', function (e) {
        const p_notice = creator_card.querySelector('span#notice');
        const hint_length = this.value.length;

        if (hint_length > 40) {
            this.value = this.value.slice(0, 40);
            return;
        }

        p_notice.textContent = `(${hint_length} / 40 Characters)`;
    });

    input_hint.addEventListener('keydown', function (e) {
        const hint_length = this.value.length;
        if (hint_length > 40) {
            this.value = this.value.slice(0, 40);
        }
    });

    // Get folder container
    const cont_folder = creator_card.querySelector('#input-folder .dropdown');
    const input_folder = cont_folder.querySelector('input#folder');
    const btn_folder = cont_folder.querySelector('button#arrow-folder');
    const session = StorageHandler.GetSessionStorage();
    const folders = session.folders;
    // Create dropdown
    DropdownLoader({
        container: cont_folder,
        inputField: input_folder,
        button: btn_folder,
        itemType: folders
    });
    // Listeners for folder
    input_folder.addEventListener('blur', () => {
        const folder = input_folder.value;

        // Validate empty input
        if (folder === '') {
            p_option_folder.classList.remove('ticked');
            return;
        } else {
            p_option_folder.classList.add('ticked');
        }
    })

    // Get reset button
    const btn_reset = creator_card.querySelector('#input-actions #reset')
    // Listener for reset
    btn_reset.addEventListener('mousedown', () => {
        resetComponent()
    });

    // Get create button
    const btn_create = creator_card.querySelector('#input-actions #submit')
    // Listener for create
    btn_create.addEventListener('mousedown', async () => {
        const newItem = await CreateNewKeyItem({
            name: input_website.value,
            email: input_email.value,
            key: input_pass.value,
            website: input_website.value,
            fav: btn_fav.classList.contains('ticked'),
            hint: input_hint.value,
            folder: input_folder.value
        })

        // Append new item
        const cont_articles = document.querySelector('section#articles #key-items');
        cont_articles.appendChild(KeyItem(newItem));
    });

    const getComponent = () => creator_card;
    const resetComponent = () => {
        btn_fav.classList.remove('ticked');
        input_email.value = '';
        input_pass.value = '';
        input_website.value = '';
        input_hint.value = '';
        input_folder.value = '';
        p_required_email.classList.remove('ticked');
        p_required_password.classList.remove('ticked');
        p_required_website.classList.remove('ticked');
        p_optional_fav.classList.remove('ticked');
        p_optional_hint.classList.remove('ticked');
        p_option_folder.classList.remove('ticked');
        input_email.classList.remove('invalid');
        p_advise.classList.remove('invalid');
        p_advise.textContent = 'Be sure to double check !';
    };

    return {
        getComponent,
        resetComponent
    }
}();


/**
 * Creates and load items for dropdown component
 * @param {Node} container - The main container of the field 
 * @param {Node} inputField - The input field sibling of dropdown
 * @param {Node} button - The button sibling of dropdown
 * @param {String} itemType - The type of items to be loaded 
 */
function DropdownLoader({ container, inputField, button, itemType }) {
    // Listener for dropdown
    inputField.addEventListener('focus', () => {
        let dropdownExist = container.querySelector('#dropdown-items');

        // Verify existing dropdown
        if (!dropdownExist) {
            const dropdown = document.createElement('div');
            let itemCount = 0;

            dropdown.setAttribute('id', 'dropdown-items');
            container.appendChild(dropdown);

            // Verify item type
            if (itemType.length === 0) {
                return;
            }

            // Add item to the dropdown
            for (let type of itemType) {
                DropdownItemCreator(dropdown, inputField, type, itemCount);
                itemCount++
            }
        }
    });

    // Listener to remove dropdown
    inputField.addEventListener('blur', () => {
        let dropdownExist = container.querySelector('#dropdown-items');

        // Verify existing website dropdown
        if (dropdownExist) {
            dropdownExist.remove();
            dropdownExist = null;
        }
    });

    // Listener for input field acting as search
    inputField.addEventListener('keyup', () => {
        let dropdownExist = container.querySelector('#dropdown-items');

        // Verify existing website dropdown
        if (dropdownExist) {
            // Reset dropdown items
            dropdownExist.innerHTML = '';

            let itemCount = 0;

            // Verify item type
            if (itemType.length === 0) {
                return;
            }

            // Add item to the dropdown
            for (let type of itemType) {
                let name = type.name.toLowerCase();
                let searchInput = inputField.value.toLowerCase();

                if (name.includes(searchInput)) {
                    DropdownItemCreator(dropdownExist, inputField, type, itemCount)
                }

                itemCount++
            }
        }
    });

    // Listener for dropdown button(SVG)
    button.addEventListener('focus', () => {
        inputField.focus();
    });
};

/**
 * Creates items for dropdown
 * @param {*} container - Dropdown container
 * @param {*} inputField - Input field for selected item to go to
 * @param {*} load - Type of dropdown
 * @param {*} count - Item count
 */
function DropdownItemCreator(container, inputField, load, count) {
    const item = document.createElement('button');
    item.setAttribute('type', 'button');
    item.setAttribute('id', `item-${count}`);
    item.classList.add('text', 'item');
    item.textContent = load.name;

    item.addEventListener('mousedown', () => {
        inputField.value = load.name;
    });

    item.addEventListener('mouseenter', () => {
        inputField.value = load.name;
    });

    item.addEventListener('mouseleave', () => {
        inputField.value = '';
    });

    container.appendChild(item);
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

export default CreationComponent;