// THIS IS MEANT FOR TESTS
// MAY OR MAY NOT BE FULLY IMPLEMENTED

const sctn_bottom = document.querySelector('#bottom');
const sctn_misc = document.querySelector('#misc');
const btn_create = document.querySelector('#create');

btn_create.addEventListener('click', () => {
    const hasCreateElement = document.querySelector('#card');
    
    if (!hasCreateElement) {
        const card_element = document.createElement('section');
        card_element.setAttribute('id', 'card');
        sctn_bottom.appendChild(card_element);
    } else {
        sctn_bottom.removeChild(hasCreateElement);
    }
});