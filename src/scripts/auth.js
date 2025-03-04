import "../styles/auth.css";
import "../styles/auth-responsiveness.css";
import { hidden_eye, open_eye } from './svg.js';
import { Login } from "./account.js";
import StorageHandler from "./storage-handler.js";
import { DateDifference } from "./date.js";

// Check account in session 
const storage = StorageHandler.GetLocalStorage();
const accounts = storage.app.accounts;

for (let account of accounts) {
    if (account.inSession) {
        let minuteDifference = DateDifference({
            date: account.lastSession,
            type: 'minute'
        });

        if (minuteDifference > 20) {
            window.location.href = '/auth.html';
            account.inSession = false;
            StorageHandler.UpdateLocalStorage(storage);
        } else {
            StorageHandler.UpdateSessionStorage(account);
            window.location.href = '/dashboard.html';
        }
    }
}

const btn_suggestion_sign_up = document.querySelector('#login_page button#sign-up');
const btn_visibility = document.querySelector('#login_page #visibility');
const btn_login = document.querySelector('#login_page button#login');
const input_username = document.querySelector('#login_page #username');
const input_password = document.querySelector('#login_page #password');

let isHolding = false;
let hasMoved = false;

// Listener for log in button
if (btn_login) {
    btn_login.addEventListener('click', async () => {
        const user = document.querySelector('#username');
        const pass = document.querySelector('#password');

        // Verify for empty inputs
        if (user.value === '' || pass.value === '') {
            const txt_invalid = document.querySelector('#invalid');
    
            txt_invalid.textContent = 'Please enter your account credentials !'
            txt_invalid.classList.add('invalid');
            return;
        }

        // Verify account credentials
        const isLoggedIn = await Login(user.value, pass.value);

        if (isLoggedIn) {
            window.location.href = '/dashboard.html';
        } else {
            const txt_invalid = document.querySelector('#invalid');

            txt_invalid.textContent = 'Invalid Username/Password !';
            txt_invalid.classList.add('invalid');
            console.error('Invalid Username/Password');
        }
    });
}

// Listener for sign up suggestion link
if (btn_suggestion_sign_up) {
    MouseHandler(btn_suggestion_sign_up);

    btn_suggestion_sign_up.addEventListener('mouseup', () => {
        if (isHolding && !hasMoved) {
            window.location.href = '/register.html';
        }

        isHolding = false;
    });
}

// Listener for eye icon and password input elements
if (input_password && btn_visibility) {
    MouseHandler(btn_visibility);
    VisibilityFunction(input_password, btn_visibility)
}

// Listener for username input element
if (input_username) {
    input_username.addEventListener('focus', () => {
        const txt_invalid = document.querySelector('#invalid');
        
        txt_invalid.classList.remove('invalid');
    })
}

// Listener for password input element
if (input_password) {
    input_password.addEventListener('focus', () => {
        const txt_invalid = document.querySelector('#invalid');

        txt_invalid.classList.remove('invalid');
    })
}


/**
 * @param {NodeElement} button - Element to add event listener to handle mouse input 
 */
export function MouseHandler(button) {
    button.addEventListener('mousedown', () => {
        isHolding = true;
        hasMoved = false;
    });

    button.addEventListener('mousemove', () => {
        if (isHolding) {
            hasMoved = true;
        }
    });
};

/**
 * Used for changing a password visibility
 * @inputField {NodeElement} Input element that takes the password 
 * @button {NodeElement} Button element that is clickable to change password visibility 
 */
export function VisibilityFunction(inputField, button) {
    button.addEventListener('mouseup', function () {
        let isHidden = !this.classList.contains('open-eye');
        if (isHolding && !hasMoved) {
            this.innerHTML = isHidden ? open_eye : hidden_eye;
            if (isHidden) {
                inputField.setAttribute('type', 'text');
                this.classList.add('open-eye');
            } else {
                inputField.setAttribute('type', 'password');
                this.classList.remove('open-eye');
            }
        };

        isHolding = false;
    });
};