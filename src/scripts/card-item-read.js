/*
 * NOTE:
 * BETTER CODING STYLE HERE COZ I CANT READ
 * WHAT I WROTE IN card-creation.js
 */

import Encryption from "./password-encryption";
import StorageHandler from "./storage-handler";
import { icon_facebook } from "./svg";

const template =
    `
        <div class="container" id="top">
            <div id="left">
                <p class="text color" id="title">Loading...</p>
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
                <div class="container" id="box">
                    <div class="circle" id="circle-1"></div>
                    <div class="circle" id="circle-2"></div>
                    <div id="icon-logo">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_45_704)">
                                <path
                                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                                    fill="#176AE6" />
                                <path
                                    d="M27.2838 25.3159L28.1394 20.0797H22.08V16.0872C22.08 14.4384 22.5222 13.2656 24.8866 13.2656L28.3866 13.2672V7.98719C28.3866 7.98719 26.1653 7.5 24.0816 7.5C19.7331 7.5 16.8553 10.3719 16.8553 15.2469V20.08H11.6131V25.3162H16.8541V39.7516C17.8794 39.9137 18.9297 40 20 40C20.7025 40 21.3963 39.9628 22.08 39.8922V25.3159H27.2838Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_45_704">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="container" id="info-text">
                        <p class="text color" id="info-name">Loading...</p>
                        <a href="" target="_blank" id="info-link">
                            <span class="text" id="website">Loading...</span>
                            <svg class="fill" width="40" height="40" viewBox="0 0 40 40" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M31.6667 23.3333V31.6667C31.6667 33.5076 30.1743 35 28.3333 35H8.33333C6.49238 35 5 33.5076 5 31.6667V11.6667C5 9.82572 6.49238 8.33333 8.33333 8.33333H16.6667V11.6667H8.33333V31.6667H28.3333V23.3333H31.6667ZM31.6618 10.6904L19.507 22.8452L17.15 20.4882L29.3048 8.33333H21.6618V5H34.9952V18.3333H31.6618V10.6904Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="item-form">
            <div class="container inputs" id="item-email">
                <p class="text color">Email Address</p>
                <div class="container">
                    <p class="text-sub color" id="email">Loading...
                    </p>
                    <button id="copy">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M27.5 27.5V32.5C27.5 35.3807 25.3807 37.5 22.5 37.5H7.5C4.61929 37.5 2.5 35.3807 2.5 32.5V17.5C2.5 14.6193 4.61929 12.5 7.5 12.5H12.5V7.5C12.5 4.61929 14.6193 2.5 17.5 2.5H32.5C35.3807 2.5 37.5 4.61929 37.5 7.5V22.5C37.5 25.3807 35.3807 27.5 32.5 27.5H27.5ZM22.5 27.5H17.5C14.6193 27.5 12.5 25.3807 12.5 22.5V17.5H7.5V32.5H22.5V27.5ZM17.5 7.5V22.5H32.5V7.5H17.5Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="container inputs" id="item-password">
                <p class="text color">Password</p>
                <div class="container">
                    <p class="text-sub color" id="password">Loading...</p>
                    <button id="copy">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M27.5 27.5V32.5C27.5 35.3807 25.3807 37.5 22.5 37.5H7.5C4.61929 37.5 2.5 35.3807 2.5 32.5V17.5C2.5 14.6193 4.61929 12.5 7.5 12.5H12.5V7.5C12.5 4.61929 14.6193 2.5 17.5 2.5H32.5C35.3807 2.5 37.5 4.61929 37.5 7.5V22.5C37.5 25.3807 35.3807 27.5 32.5 27.5H27.5ZM22.5 27.5H17.5C14.6193 27.5 12.5 25.3807 12.5 22.5V17.5H7.5V32.5H22.5V27.5ZM17.5 7.5V22.5H32.5V7.5H17.5Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="container inputs" id="item-hint">
                <p class="text color">Hint</p>
                <p class="text color" id="hint">Loading...</p>
            </div>
            <div class="container inputs" id="item-folder">
                <p class="text color">Folder</p>
                <p class="text color" id="folder">Loading...</p>
            </div>
            <div class="container inputs" id="input-actions">
                <button class="text" type="button" id="submit">
                    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M24.6707 10.7421L14.4935 20.916C13.8182 21.5132 13.4005 22.3487 13.3333 23.113V26.6716L16.7733 26.6747C17.6637 26.6117 18.4925 26.1973 19.158 25.436L29.2611 15.3329L24.6707 10.7421ZM27.0281 8.38547L31.6182 12.9758L33.108 11.486C33.2523 11.3417 33.3334 11.1459 33.3334 10.9418C33.3334 10.7377 33.2523 10.5419 33.108 10.3976L29.6019 6.89143C29.4591 6.74757 29.2649 6.66667 29.0622 6.66667C28.8596 6.66667 28.6653 6.74757 28.5226 6.89143L27.0281 8.38547ZM36.6666 21.6667V33.3333C36.6666 35.1743 35.1743 36.6667 33.3333 36.6667H6.66665C4.8257 36.6667 3.33331 35.1743 3.33331 33.3333V6.66667C3.33331 4.82572 4.8257 3.33333 6.66665 3.33333H18.3333V6.66667H6.66665V33.3333H33.3333V21.6667H36.6666ZM29.0622 3.33333C30.1535 3.33333 31.1995 3.76903 31.9635 4.53904L35.465 8.04053C36.2345 8.81 36.6667 9.85361 36.6667 10.9418C36.6667 12.03 36.2345 13.0736 35.465 13.8431L21.5958 27.7063C20.4317 29.0492 18.7815 29.8742 16.891 30.0039H9.99998V28.3372L10.0054 22.9788C10.1474 21.2214 10.9644 19.5872 12.2108 18.489L26.159 4.54105C26.9273 3.76805 27.9722 3.33333 29.0622 3.33333Z" />
                    </svg>
                </button>
            </div>
        </div>
        <p class="text" id="advise">All Safe and Secure !</p>
`;
const container = document.querySelector('#page__dashboard #bottom');

const ReadComponent = function () {
    const component = document.createElement('section');
    component.classList.add('card', 'creation');
    component.setAttribute('id', 'item-info');

    const render = (data) => {
        component.innerHTML = template;

        const btn_close = component.querySelector('#close');

        btn_close.addEventListener('click', () => unrender());

        LoadInformation(component, data);
        
        if (!container.contains(component)) {
            container.appendChild(component);
        }
    }

    const unrender = () => {
        if (container.contains(component)) {
            container.removeChild(component);
        }
    }

    return {
        render,
        unrender,
    }
}();

async function LoadInformation(component, data) {
    const account = StorageHandler.GetSessionStorage();
    const decryptedKey = await Encryption.decryptData(account.masterkey, data.key);
    const websites = StorageHandler.GetLocalStorage().app.websites;
    const p_title = component.querySelector('#left p#title');
    const btn_fav = component.querySelector('button#favorite');
    const cont_icon = component.querySelector('#icon-logo');
    const p_website = component.querySelector('#info-text #info-name');
    const a_link = component.querySelector('#info-text #info-link');
    const span_link = a_link.querySelector('span#website');
    const p_email = component.querySelector('#item-email p#email');
    const p_password = component.querySelector('#item-password p#password');
    const p_hint = component.querySelector('#item-hint p#hint');
    const p_folder = component.querySelector('#item-folder p#folder');

    p_title.textContent = data.website;
    if (data.fav == true) {
        btn_fav.classList.add('ticked')
    } else {
        btn_fav.classList.remove('ticked')
    };
    cont_icon.innerHTML = icon_facebook; // CHANGE LATER;
    p_website.textContent = data.website;
    for (let website of websites) {
        if (website.name == data.website) {
            a_link.href = website.link
            span_link.textContent = `${website.name}.com`;
            break;
        }
    }
    p_email.textContent = data.email;
    p_password.textContent = decryptedKey.split('').map(char => '•').join('');
    p_hint.textContent = data.hint || 'None';
    p_folder.textContent = data.folder || 'None';

    const btn_email_copy = component.querySelector('#item-email #copy')
    const btn_password_copy = component.querySelector('#item-password #copy')

    btn_email_copy.addEventListener('click', () => copyToClipboard(data.email));
    btn_password_copy.addEventListener('click', () => copyToClipboard(decryptedKey));
};

// Function by ChatGPT
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => console.log("Texte copié !"))
        .catch(err => console.error("Erreur lors de la copie :", err));
}

export default ReadComponent;