import "../styles/auth.css";
import "../styles/auth-responsiveness.css";
import { MouseHandler, RemoveInvalid, VisibilityFunction } from "./auth.js";
import { Register } from "./account.js";

function Reg() {
    const input_username = document.querySelector('#register_page #username');
    const input_password = document.querySelector('#register_page #password');
    const btn_visibility = document.querySelector('#register_page #visibility');
    const btn_register = document.querySelector('#register_page button#register');
    const input_confirm_password = document.querySelector('#register_page #confirm-password');
    const btn_visibility_confirm = document.querySelector('#register_page #visibility-confirm');
    const btn_login = document.querySelector('#register_page #login');

    let state = { isHolding: false, hasMoved: false }

    // Listener for login suggestion
    if (btn_login) {
        MouseHandler(btn_login, state);

        btn_login.addEventListener('mouseup', () => {
            if (state.isHolding && !state.hasMoved) {
                window.location.href = './auth.html';
            }

            state.isHolding = false;
        });
    }

    // Listener for register/ create button
    if (btn_register) {
        btn_register.addEventListener('click', async () => {
            const username = document.querySelector('#register_page #username');
            const pass = document.querySelector('#register_page #password');
            const conf_pass = document.querySelector('#register_page #confirm-password');

            // Verify password length
            if (pass.value.length < 8) {
                const txt_invalid = document.querySelector('#register_page #invalid');

                txt_invalid.textContent = "8 Password Length Required !";
                txt_invalid.classList.add('invalid');
                return;
            }

            // Verify password and confirmation password
            if (pass.value !== conf_pass.value) {
                const txt_invalid = document.querySelector('#register_page #invalid');

                txt_invalid.textContent = "Passwords don't match !";
                txt_invalid.classList.add('invalid');
                return;
            }

            // Verify registry
            let isRegistered = await Register(username.value, conf_pass.value);
            if (isRegistered) {
                window.location.href = './dashboard.html';
            } else {
                const txt_invalid = document.querySelector('#register_page #invalid');

                txt_invalid.textContent = "Username already exists !";
                txt_invalid.classList.add('invalid');
                return;
            }
        });
    }

    // Listeners for input elements
    if (input_username && input_password && input_confirm_password) {
        input_username.addEventListener('focus', () => {
            RemoveInvalid();
        });

        input_password.addEventListener('focus', () => {
            RemoveInvalid();
        });

        input_confirm_password.addEventListener('focus', () => {
            RemoveInvalid();
        });
    }

    // Listeners for eye icon and password input elements
    if (btn_visibility && input_password) {
        MouseHandler(btn_visibility, state);
        VisibilityFunction(input_password, btn_visibility, state);
    }

    if (btn_visibility_confirm && input_confirm_password) {
        MouseHandler(btn_visibility_confirm, state);
        VisibilityFunction(input_confirm_password, btn_visibility_confirm, state);
    };
};

Reg();