const template =
    `
    <div class="circle" id="circle-1"></div>
        <div class="circle" id="circle-2"></div>
        <div class="container" id="header">
            <p class="text color" id="title">Terms and Conditions</p>
            <p class="text color" id="sub-title">(Please read)</p>
        </div>
        <div id="body">
            <p class="text color" id="">
                This website/application is <span class="important">NOT</span> designed to be used commercially. This is created in order to understand how webpack works including JavaScript, HTML, and CSS; and is considered as a personal project and personal study. Please <span class="important">NOTE</span> that <span class="important">ALL LOGOS AND TRADEMARKS</span> displayed in this application <span class="important">BELONG TO THEIR RESPECTIVE OWNERS</span>. This application is <span class="important">NOT</span> affiliated, endorsed, or sponsored by any of these companies. The logos are used solely for <span class="important">IDENTIFICATION PURPOSES</span> to help users recognize their accounts. If this constitutes an issue, they will be removed immediately upon request. Furthermore, if you wish to use this as your personal password manager, feel free to do so but make sure to know how this application works by reading the following:
            </p>
            <ul id="terms">
                <li class="term" id="term-1">
                    <p class="text color term-title" id="">
                        1. Local Storages
                    </p>
                    <p class="text color term-message">
                        The website/application does not send any information to any server as it uses localStorage and sessionStorage; which are local storages stored in your own browser, and can be seen with inspect mode. This storage can be wiped clean or deleted through deleting history data and deleting it manually in the inspect mode. Therefore, if you ever delete your browser history, your data in this website will also be deleted and the website, nor the author, have any means of resolving this problem.
                    </p>
                </li>
                <li class="term" id="term-2">
                    <p class="text color term-title" id="">
                        2. Different Device, Different Storage
                    </p>
                    <p class="text color term-message">
                        When creating an account and storing new keys(passwords) in the website/application, they are locally stored as previously mentioned. No data is transferred on the cloud nor to a server. This signifies that your account, including all your settings and keys, are all save to a single device. If you try to log-in with the same credentials on another device, it will be invalid as your account is solely saved to the device you that you used to create it.
                    </p>
                    <p class="text color example">
                        Example: Creating an account on a computer and logging in a phone or another computer will result to invalid or inexisting account.
                    </p>
                </li>
                <li class="term" id="term-3">
                    <p class="text color term-title" id="">
                        3. Bugs and Inconveniences
                    </p>
                    <p class="text color term-message">
                        There maybe certain moments that occur in the site that may lead to inconveniences and malfunctions as the author is still new in creating websites and applications. If ever you encountered one, you may try to restart the website or message me through my social links found in the header of the dashboard.
                    </p>
                </li>
                <li class="term" id="term-4">
                    <p class="text color term-title" id="">
                        4. Personal Project and Legal Notice
                    </p>
                    <p class="text color term-message">
                        Lastly and as previously mentioned, this is a personal project and is not for commercial use. The author does not earn money nor receive anything as this is nothing but a way to understand programming concepts.
                    </p>
                    <p class="text color term-message">
                        Additionally, to reiterate:
                    </p>
                    <ul id="legal-notice">
                        <li class="text color notice" id="notice-1">
                            <span class="important">LOGOS AND TRADEMARKS BELONG TO THEIR RESPECTIVE OWNERS.</span>
                        </li>
                        <li class="text color notice" id="notice-2">
                            This website/application is <span class="important">NOT</span> affiliated, sponsored, or in partnership with any of these companies.
                        </li>
                        <li class="text color notice" id="notice-3">
                            The logos are used exclusively for identification purposes to help users recognize their accounts.
                        </li>
                        <li class="text color notice" id="notice-4">
                            If any rights holders object to their use, the logos will be removed immediately upon request.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="container" id="actions">
            <button type="button" class="button text" id="confirm" disabled>I understand, proceed.</button>
        </div>
`;

const TermsAndConditions = function () {
    const container_overlay = document.createElement('div');
    const component = document.createElement('div');

    component.classList.add('container', 'comp-tac');
    component.setAttribute('id', 'terms-and-conditions');

    container_overlay.setAttribute('id', 'overlay');
    container_overlay.appendChild(component)

    component.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    const render = () => {
        const body = document.body;
        component.innerHTML = template;

        if (!body.contains(container_overlay)) {
            body.prepend(container_overlay);
            container_overlay.classList.add('open');
        }

        const cont_tnc_body = component.querySelector('#body');
        const btn_confirm = component.querySelector('#actions #confirm');

        cont_tnc_body.addEventListener('scroll', () => {
            if (cont_tnc_body.scrollTop + cont_tnc_body.clientHeight >= cont_tnc_body.scrollHeight) {
                btn_confirm.disabled = false;
            }
        });

        return new Promise((resolve) => {
            container_overlay.addEventListener('click', () => {
                unrender();
                resolve(false);
            }, { once: true });
    
            btn_confirm.addEventListener('click', () => {
                unrender();
                resolve(true);
            }, { once: true });
        });
    };

    const unrender = () => {
        const body = document.body;

        if (body.contains(container_overlay)) {
            container_overlay.classList.remove('open');

            setTimeout(() => {
                body.removeChild(container_overlay);
                component.innerHTML = '';
            }, 200);
        };
    };

    return { render }
}();

export default TermsAndConditions