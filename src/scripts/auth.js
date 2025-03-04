import "../styles/auth.css";
import "../styles/auth-responsiveness.css";
import { hidden_eye, open_eye } from './svg.js';
import { Login } from "./account.js";

const btn_new_account = document.querySelector('#sign-up');
const input_password = document.querySelector('#password');
const btn_visibility = document.querySelector('#visibility');
const btn_login = document.querySelector('button#login');
let isHolding = false;
let hasMoved = false;

if (btn_login) {
    btn_login.addEventListener('click', () => {
        const user = document.querySelector('#username');
        const pass = document.querySelector('#password');
        Login(user.value, pass.value);
    });
}

// btn_new_account.addEventListener('mousedown', () => {
//     isHolding = true;
//     hasMoved = false;
// });

// btn_new_account.addEventListener('mousemove', () => {
//     if (isHolding) {
//         hasMoved = true;
//     }
// });

// btn_new_account.addEventListener('mouseup', () => {
//     if (isHolding && !hasMoved) {
//         document.location.href = '/register.html';
//     }

//     isHolding = false;
// });

// btn_visibility.addEventListener('mousedown', () => {
//     isHolding = true;
//     hasMoved = false;
// });

// btn_visibility.addEventListener('mousemove', () => {
//     if (isHolding) {
//         hasMoved = true;
//     }
// });

// btn_visibility.addEventListener('mouseup', function() {
//     let isHidden = !this.classList.contains('open-eye');
//     if (isHolding && !hasMoved) {
//         this.innerHTML = isHidden ? open_eye : hidden_eye;
//         if (isHidden) {
//             this.classList.add('open-eye');
//         } else {
//             this.classList.remove('open-eye');
//         }
//     };

//     isHolding = false;
// });

export function VisibilityFunction(inputField, button) {
    button.addEventListener('mousedown', () => {
        isHolding = true;
        hasMoved = false;
    });

    button.addEventListener('mousemove', () => {
        if (isHolding) {
            hasMoved = true;
        }
    });

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

VisibilityFunction(input_password, btn_visibility)