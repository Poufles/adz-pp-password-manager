import ArticleKeysContainer from "./article-items";
import MessageBox from "./message-box";
import Encryption from "./password-encryption";
import StorageHandler from "./storage-handler";
import { hidden_eye, open_eye } from "./svg";

const template =
    `
    <div class="container" id="top">
            <div id="left">
                <p class="text color" id="title">Settings</p>
                <svg class="fill" width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_29_534)">
                        <path
                            d="M28.9032 21.2525C30.6331 19.4971 31.8055 17.2696 32.273 14.8498C32.7405 12.4301 32.4824 9.92618 31.5309 7.65275C30.5795 5.37933 28.9773 3.43787 26.9256 2.07243C24.874 0.706979 22.4645 -0.0215302 20 -0.0215302C17.5355 -0.0215302 15.126 0.706979 13.0744 2.07243C11.0227 3.43787 9.4205 5.37933 8.46907 7.65275C7.51763 9.92618 7.25946 12.4301 7.727 14.8498C8.19454 17.2696 9.36692 19.4971 11.0968 21.2525C7.83147 22.5361 5.02741 24.7716 3.04861 27.6689C1.0698 30.5662 0.00764272 33.9914 4.01881e-07 37.5C-0.000185825 37.8284 0.0643515 38.1535 0.189922 38.4569C0.315493 38.7603 0.499635 39.036 0.731818 39.2682C0.964002 39.5004 1.23967 39.6845 1.54307 39.8101C1.84647 39.9356 2.17164 40.0002 2.5 40H37.5C37.8284 40.0002 38.1535 39.9356 38.4569 39.8101C38.7603 39.6845 39.036 39.5004 39.2682 39.2682C39.5004 39.036 39.6845 38.7603 39.8101 38.4569C39.9356 38.1535 40.0002 37.8284 40 37.5C39.9924 33.9914 38.9302 30.5662 36.9514 27.6689C34.9726 24.7716 32.1685 22.5361 28.9032 21.2525ZM20 5C21.4834 5 22.9334 5.43987 24.1668 6.26398C25.4001 7.08809 26.3614 8.25943 26.9291 9.62987C27.4968 11.0003 27.6453 12.5083 27.3559 13.9632C27.0665 15.418 26.3522 16.7544 25.3033 17.8033C24.2544 18.8522 22.918 19.5665 21.4632 19.8559C20.0083 20.1453 18.5003 19.9968 17.1299 19.4291C15.7594 18.8614 14.5881 17.9001 13.764 16.6668C12.9399 15.4334 12.5 13.9834 12.5 12.5C12.5022 10.5116 13.2931 8.60518 14.6991 7.19914C16.1052 5.79309 18.0116 5.00221 20 5ZM5.24904 35C5.82992 32.1787 7.36544 29.6438 9.59693 27.8223C11.8284 26.0008 14.6195 25.0041 17.5 25H22.5C25.3805 25.0041 28.1716 26.0008 30.4031 27.8223C32.6346 29.6438 34.1701 32.1787 34.751 35H5.24904Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_29_534">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
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
        <div class="wrapper" id="preferences">
            <div class="container" id="box">
                <div class="circle" id="circle-1"></div>
                <div class="circle" id="circle-2"></div>
                <p class="text color" id="title">Preferences</p>
                <ul class="container" id="preference-options">
                    <li class="option" id="dark-mode">
                        <p class="text color" id="name">
                            Dark Mode
                        </p>
                        <label tabindex="0" role="button" class="text color" for="dark">
                            <div id="thumb"></div>
                        </label>
                        <input class="text color" type="checkbox" id="dark">
                    </li>
                    <li class="option" id="animations">
                        <p class="text color" id="name">
                            Animations
                        </p>
                        <label tabindex="0" role="button" class="text color" for="animation">
                            <div id="thumb"></div>
                        </label>
                        <input class="text color" type="checkbox" id="animation">
                    </li>
                </ul>
            </div>
        </div>
        <div id="settings-info">
            <div class="container inputs" id="info-username">
                <p class="text color">Username</p>
                <p class="text-sub color" id="username">Loading...</p>
            </div>
            <div class="container inputs" id="info-password">
                <p class="text color">Master Key</p>
                <p class="text color" id="password">Hashed, Encrypted, and Safe !</p>
            </div>
            <div class="container inputs" id="info-email">
                <p class="text color">Email Address</p>
                <p class="text-sub color" id="email">Available Soon!</p>
            </div>
            <div class="container inputs" id="info-date">
                <p class="text color">Date of Creation</p>
                <p class="text color" id="date">Loading...</p>
            </div>
            <div class="container inputs" id="input-actions">
                <button class="text" type="button" id="edit">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M24.6707 10.7421L14.4935 20.916C13.8182 21.5132 13.4005 22.3487 13.3333 23.113V26.6716L16.7733 26.6747C17.6637 26.6117 18.4925 26.1973 19.158 25.436L29.2611 15.3329L24.6707 10.7421ZM27.0281 8.38547L31.6182 12.9758L33.108 11.486C33.2523 11.3417 33.3334 11.1459 33.3334 10.9418C33.3334 10.7377 33.2523 10.5419 33.108 10.3976L29.6019 6.89143C29.4591 6.74757 29.2649 6.66667 29.0622 6.66667C28.8596 6.66667 28.6653 6.74757 28.5226 6.89143L27.0281 8.38547ZM36.6666 21.6667V33.3333C36.6666 35.1743 35.1743 36.6667 33.3333 36.6667H6.66665C4.8257 36.6667 3.33331 35.1743 3.33331 33.3333V6.66667C3.33331 4.82572 4.8257 3.33333 6.66665 3.33333H18.3333V6.66667H6.66665V33.3333H33.3333V21.6667H36.6666ZM29.0622 3.33333C30.1535 3.33333 31.1995 3.76903 31.9635 4.53904L35.465 8.04053C36.2345 8.81 36.6667 9.85361 36.6667 10.9418C36.6667 12.03 36.2345 13.0736 35.465 13.8431L21.5958 27.7063C20.4317 29.0492 18.7815 29.8742 16.891 30.0039H9.99998V28.3372L10.0054 22.9788C10.1474 21.2214 10.9644 19.5872 12.2108 18.489L26.159 4.54105C26.9273 3.76805 27.9722 3.33333 29.0622 3.33333Z" />
                    </svg>
                </button>
            </div>
        </div>
        <p class="text" id="advise">Adjust to your own liking!</p>
`;

const template_edit =
    `
    <div class="container" id="top">
            <div id="left">
                <button type="button" class="text color no-bg" id="show-mode">
                    Settings
                </button>
                <div id="arrow">
                    <svg class="fill" width="40" height="40" viewBox="0 0 40 40" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.72656 14.4297L7.86719 14.5938L18.4922 26.8203C18.8516 27.2344 19.3906 27.4922 19.9922 27.4922C20.5937 27.4922 21.1328 27.2266 21.4922 26.8203L32.1094 14.6172L32.2891 14.4141C32.4219 14.2188 32.5 13.9844 32.5 13.7344C32.5 13.0547 31.9219 12.5 31.2031 12.5H8.79687C8.07812 12.5 7.5 13.0547 7.5 13.7344C7.5 13.9922 7.58594 14.2344 7.72656 14.4297Z"
                            fill="" />
                    </svg>
                </div>
                <p class="text color" id="current-mode">Edit Mode</p>
                <svg id="icon-mode" class="fill" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M24.6707 10.7421L14.4935 20.916C13.8182 21.5132 13.4005 22.3487 13.3333 23.113V26.6716L16.7733 26.6747C17.6637 26.6117 18.4925 26.1973 19.158 25.436L29.2611 15.3329L24.6707 10.7421ZM27.0281 8.38547L31.6182 12.9758L33.108 11.486C33.2523 11.3417 33.3334 11.1459 33.3334 10.9418C33.3334 10.7377 33.2523 10.5419 33.108 10.3976L29.6019 6.89143C29.4591 6.74757 29.2649 6.66667 29.0622 6.66667C28.8596 6.66667 28.6653 6.74757 28.5226 6.89143L27.0281 8.38547ZM36.6666 21.6667V33.3333C36.6666 35.1743 35.1743 36.6667 33.3333 36.6667H6.66665C4.8257 36.6667 3.33331 35.1743 3.33331 33.3333V6.66667C3.33331 4.82572 4.8257 3.33333 6.66665 3.33333H18.3333V6.66667H6.66665V33.3333H33.3333V21.6667H36.6666ZM29.0622 3.33333C30.1535 3.33333 31.1995 3.76903 31.9635 4.53904L35.465 8.04053C36.2345 8.81 36.6667 9.85361 36.6667 10.9418C36.6667 12.03 36.2345 13.0736 35.465 13.8431L21.5958 27.7063C20.4317 29.0492 18.7815 29.8742 16.891 30.0039H9.99998V28.3372L10.0054 22.9788C10.1474 21.2214 10.9644 19.5872 12.2108 18.489L26.159 4.54105C26.9273 3.76805 27.9722 3.33333 29.0622 3.33333Z"
                        fill="" />
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
        <div class="wrapper" id="preferences">
            <div class="container" id="box">
                <div class="circle" id="circle-1"></div>
                <div class="circle" id="circle-2"></div>
                <p class="text color" id="title">Preferences</p>
                <ul class="container" id="preference-options">
                    <li class="option" id="dark-mode">
                        <p class="text color" id="name">
                            Dark Mode
                        </p>
                        <label tabindex="0" role="button" class="text color" for="dark">
                            <div id="thumb"></div>
                        </label>
                        <input class="text color" type="checkbox" id="dark">
                    </li>
                    <li class="option" id="animations">
                        <p class="text color" id="name">
                            Animations
                        </p>
                        <label tabindex="0" role="button" class="text color" for="animation">
                            <div id="thumb"></div>
                        </label>
                        <input class="text color" type="checkbox" id="animation">
                    </li>
                </ul>
            </div>
        </div>
        <form action="#" id="settings-info">
            <div class="container inputs" id="input-username">
                <label class="text color" for="username">Username</label>
                <input class="text-sub color" type="text" id="username" placeholder="New Username">
            </div>
            <div class="container inputs" id="input-password">
                <label class="text-sub color" for="password">Master Key</label>
                <div class="container">
                    <input class="text-sub color" id="password" type="password"
                        placeholder="New Password">
                    <button class="button no-bg" id="eye-hidden">
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
            </div>
            <div class="container inputs" id="info-email">
                <p class="text color">Email Address</p>
                <p class="text-sub color" id="email">Available Soon!</p>
            </div>
            <div class="container inputs" id="info-date">
                <p class="text color">Date of Creation</p>
                <p class="text color" id="date">03/01/2025</p>
            </div>
            <div class="container inputs" id="input-actions">
                <button class="text color no-bg" type="reset" id="reset">Reset</button>
                <button class="text" type="button" id="edit">
                    <p class="text">Save</p>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M24.6707 10.7421L14.4935 20.916C13.8182 21.5132 13.4005 22.3487 13.3333 23.113V26.6716L16.7733 26.6747C17.6637 26.6117 18.4925 26.1973 19.158 25.436L29.2611 15.3329L24.6707 10.7421ZM27.0281 8.38547L31.6182 12.9758L33.108 11.486C33.2523 11.3417 33.3334 11.1459 33.3334 10.9418C33.3334 10.7377 33.2523 10.5419 33.108 10.3976L29.6019 6.89143C29.4591 6.74757 29.2649 6.66667 29.0622 6.66667C28.8596 6.66667 28.6653 6.74757 28.5226 6.89143L27.0281 8.38547ZM36.6666 21.6667V33.3333C36.6666 35.1743 35.1743 36.6667 33.3333 36.6667H6.66665C4.8257 36.6667 3.33331 35.1743 3.33331 33.3333V6.66667C3.33331 4.82572 4.8257 3.33333 6.66665 3.33333H18.3333V6.66667H6.66665V33.3333H33.3333V21.6667H36.6666ZM29.0622 3.33333C30.1535 3.33333 31.1995 3.76903 31.9635 4.53904L35.465 8.04053C36.2345 8.81 36.6667 9.85361 36.6667 10.9418C36.6667 12.03 36.2345 13.0736 35.465 13.8431L21.5958 27.7063C20.4317 29.0492 18.7815 29.8742 16.891 30.0039H9.99998V28.3372L10.0054 22.9788C10.1474 21.2214 10.9644 19.5872 12.2108 18.489L26.159 4.54105C26.9273 3.76805 27.9722 3.33333 29.0622 3.33333Z" />
                    </svg>
                </button>
            </div>
        </form>
        <p class="text" id="advise">Adjust to your own liking!</p>
`;

const SettingComponent = function () {
    let accountData;
    const container_overlay = document.createElement('div');
    const component = document.createElement('div');

    container_overlay.setAttribute('id', 'overlay');
    component.classList.add('card', 'creation', 'settings');

    container_overlay.addEventListener('click', () => {
        unrender();
    });

    component.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    const getAccountData = () => accountData;
    const setAccountData = (newData) => accountData = newData;

    const create = () => {
        accountData = StorageHandler.GetSessionStorage()
        component.innerHTML = template;
        component.setAttribute('id', 'show');

        const btn_close = component.querySelector('button#close');
        const btn_edit = component.querySelector('button#edit');

        btn_close.addEventListener('click', () => {
            unrender();
        });


        btn_edit.addEventListener('click', () => {
            edit();
        });

        LoadCreateInfo(component, getAccountData);
        container_overlay.appendChild(component);
    };

    const render = () => {
        document.body.prepend(container_overlay);
        container_overlay.classList.add('open');
    }

    const unrender = (isHide = false) => {
        if (isHide) {
            container_overlay.classList.remove('open');
            setTimeout(() => {
                document.body.removeChild(container_overlay);
            }, 200);

            return;
        };

        container_overlay.classList.remove('open');
        setTimeout(() => {
            container_overlay.removeChild(component);
            document.body.removeChild(container_overlay);

            accountData = undefined;
        }, 200);
    };

    const edit = () => {
        component.innerHTML = template_edit;
        component.setAttribute('id', 'edit');

        const btn_close = component.querySelector('button#close');
        btn_close.addEventListener('click', () => {
            unrender();
        });

        LoadEditInfoAndListeners(component, getAccountData, setAccountData, create)
    }

    return {
        create,
        render,
        unrender
    }
}();

/**
 * Load information for component
 * @param {Node} component - Setting component element
 * @param {Object} getItemData - Function to get item data
 */
function LoadCreateInfo(component, getAccountData) {
    let data = getAccountData();
    console.log(data)
    const p_username = component.querySelector('#username');
    const p_date_of_creation = component.querySelector('#date');
    const cbox_dark_mode = component.querySelector('#dark');
    const cbox_animation = component.querySelector('#animation');

    p_username.textContent = data.username;
    p_date_of_creation.textContent = data.dateofcreation;
    cbox_dark_mode.checked = data.preference.dark;
    cbox_animation.checked = data.preference.animation;
};

/**
 * Load information and listeners for component in edit mode
 * @param {Node} component - Setting component element
 * @param {Object} getAccountData - Function to get item data
 * @param {Object} setAccountData - Function to set item data
 * @param {Object} create - Function to go back to create mode
 */
function LoadEditInfoAndListeners(component, getAccountData, setAccountData, create) {
    let data = getAccountData();
    const btn_back = component.querySelector('#show-mode');
    const input_username = component.querySelector('input#username');
    const input_password = component.querySelector('input#password');
    const btn_eye = component.querySelector('#eye-hidden');
    const p_date_of_creation = component.querySelector('#date');
    const cbox_dark_mode = component.querySelector('#dark');
    const cbox_animation = component.querySelector('#animation');
    const btn_reset = component.querySelector('button#reset');
    const btn_edit = component.querySelector('button#edit');

    input_username.value = data.username;
    p_date_of_creation.textContent = data.dateofcreation;
    cbox_dark_mode.checked = data.preference.dark;
    cbox_animation.checked = data.preference.animation;

    btn_back.addEventListener('click', () => {
        create();
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

    btn_reset.addEventListener('click', (e) => {
        e.preventDefault();

        input_username.value = data.username;
        input_password.value = '';
    });

    btn_edit.addEventListener('click', async () => {
        const username = input_username.value;
        const password = input_password.value;

        if (username && password) {
            SettingComponent.unrender(true);

            // ADD CONFIRMATION LATER
            MessageBox.create('default', {
                isCritical: true
            });

            const isConfirm = await MessageBox.render();

            if (!isConfirm) {
                SettingComponent.render();
                return;
            };

            data.username = username;

            const length = data.keys.length;
            const hashedKey = await Encryption.hashPassword(password);

            for (let index = 0; index < length; index++) {
                const key = data.keys[index];

                // Change password encryption based on new hashed key (new password)
                const encryptedKey = key.key;
                const decryptedKey = await Encryption.decryptData(data.masterkey, encryptedKey);

                const newEncryptedKey = await Encryption.encryptData(hashedKey, decryptedKey);

                key.key = newEncryptedKey

                // Update item in DOM
                const articleKeyObject = ArticleKeysContainer.getKeys()[index];

                articleKeyObject.updateRender({
                    item: key,
                    index
                });
            }

            // Update masterkey and account data in this component
            data.masterkey = hashedKey;
            setAccountData(data);
            // Update session storage
            StorageHandler.UpdateSessionStorage(data);
            // Get local storage 
            const storage = StorageHandler.GetLocalStorage();
            const accounts = storage.app.accounts;
            // Iterate over storage
            for (let i = 0; i < accounts.length; i++) {
                if (accounts[i].inSession) {
                    storage.app.accounts[i] = StorageHandler.GetSessionStorage();
                    StorageHandler.UpdateLocalStorage(storage);
                };
            };

            setTimeout(async () => {
                MessageBox.create('Account has been successfully updated ! Signing out of session.', {
                    isConfirmOnly: true
                });

                let isForcedLogout = await MessageBox.render();

                if (isForcedLogout) {
                    const account = StorageHandler.GetSessionStorage();

                    account.inSession = false;
                    account.lastSession = new Date().toISOString();

                    StorageHandler.UpdateSessionStorage(account, true);
                    // Get local storage 
                    const storage = StorageHandler.GetLocalStorage();
                    const accounts = storage.app.accounts;
                    // Iterate over storage
                    for (let i = 0; i < accounts.length; i++) {
                        if (accounts[i].inSession) {
                            storage.app.accounts[i] = account;
                            StorageHandler.UpdateLocalStorage(storage);
                            window.location.href = '/auth.html';
                        };
                    };
                };
            }, 200);
        };
    });
};

export default SettingComponent;