// THIS IS MEANT FOR TESTS
// MAY OR MAY NOT BE FULLY IMPLEMENTED

import { CurrentTimeToday } from "./date";

const sctn_bottom = document.querySelector('#bottom');
const sctn_misc = document.querySelector('#misc');
const btn_create = document.querySelector('#create');
const p_date = document.querySelector('#clock');

setInterval(() => {
    p_date.textContent = CurrentTimeToday();
}, 1000);

btn_create.addEventListener('click', () => {
    const hasCreateElement = document.querySelector('#card');

    if (!hasCreateElement && window.innerWidth > 899) {
        const card_element = document.createElement('section');
        card_element.setAttribute('id', 'card');
        sctn_bottom.appendChild(card_element);
        sctn_bottom.removeChild(sctn_misc);

        return;
    }

    if (!hasCreateElement && window.innerWidth <= 899) {
        const card_element = document.createElement('section');
        card_element.setAttribute('id', 'card');
        card_element.classList.add('modal');
        sctn_bottom.appendChild(card_element);

        return;
    }

    if (hasCreateElement) {
        sctn_bottom.prepend(sctn_misc);
        sctn_bottom.removeChild(hasCreateElement);
    }
});

window.addEventListener('resize', () => {
    const hasCreateElement = document.querySelector('#card');

    if (hasCreateElement && window.innerWidth <= 899) {
        hasCreateElement.remove();
        hasCreateElement.classList.add('modal');
        hasCreateElement.textContent = " Oh hey you read this shit lmfao ";
        document.body.appendChild(hasCreateElement)
        if (!document.querySelector('#misc')) {
            sctn_bottom.prepend(sctn_misc);
        }
    }

    if (hasCreateElement && window.innerWidth > 899) {
        hasCreateElement.remove();
        hasCreateElement.classList.remove('modal');
        sctn_bottom.appendChild(hasCreateElement);
        if (document.querySelector('#misc')) {
            sctn_bottom.removeChild(sctn_misc);
        }
    }
});