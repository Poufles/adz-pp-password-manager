import "../styles/auth.css";
import "../styles/auth-responsiveness.css";
import { hidden_eye, open_eye } from './svg.js';

const btn_new_account = document.querySelector('#sign-up');
const btn_visibility = document.querySelector('#visibility');
let isHolding = false;
let hasMoved = false;

btn_new_account.addEventListener('mousedown', () => {
    isHolding = true;
    hasMoved = false;
});

btn_new_account.addEventListener('mousemove', () => {
    if (isHolding) {
        hasMoved = true;
    }
});

btn_new_account.addEventListener('mouseup', () => {
    if (isHolding && !hasMoved) {
        document.location.href = '/register.html';
    }

    isHolding = false;
});

btn_visibility.addEventListener('mousedown', () => {
    isHolding = true;
    hasMoved = false;
});

btn_visibility.addEventListener('mousemove', () => {
    if (isHolding) {
        hasMoved = true;
    }
});

btn_visibility.addEventListener('mouseup', function() {
    let isHidden = !this.classList.contains('open-eye');
    if (isHolding && !hasMoved) {
        this.innerHTML = isHidden ? open_eye : hidden_eye;
        if (isHidden) {
            this.classList.add('open-eye');
        } else {
            this.classList.remove('open-eye');
        }
    };

    isHolding = false;
});
