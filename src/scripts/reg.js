import "../styles/auth.css";
import "../styles/auth-responsiveness.css";
import { VisibilityFunction } from "./auth.js";
import { Register } from "./account.js";

// const btn_new_account = document.querySelector('#sign-up');
const input_password = document.querySelector('#password');
const btn_visibility = document.querySelector('#visibility');
const btn_register = document.querySelector('button#register');
const inputy_confirm_password = document.querySelector('#confirm-password');
const btn_visibility_confirm = document.querySelector('#visibility-confirm');
// let isHolding = false;
// let hasMoved = false;

btn_register.addEventListener('click', () => {
    const input_username = document.querySelector('#username');
    const input_confirm_password = document.querySelector('#confirm-password');

    Register(input_username.value, input_confirm_password.value);
});

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
//         document.location.href = '/auth.html';
//     }

//     isHolding = false;
// });

VisibilityFunction(input_password, btn_visibility);
VisibilityFunction(inputy_confirm_password, btn_visibility_confirm);