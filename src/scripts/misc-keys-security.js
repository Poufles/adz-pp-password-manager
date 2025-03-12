import { VerifyStrength } from "./card-keygen";
import Encryption from "./password-encryption";
import StorageHandler from "./storage-handler";

const template =
    `
        <div class="circle"></div>
        <p class="text color" id="title">
            Keys Status
        </p>
        <div class="container circular-percentage" style="--percent: 0%">
            <div id="circle"></div>
            <p class="text color" id="percentage">0%</p>
        </div>
        <p class="text color" id="keys-checked">
            Loading...
        </p>
        <p class="text color" id="status">
            Loading...
        </p>
`;

const MiscKeysSecurity = function () {
    const component = document.createElement('article');
    component.classList.add('container');
    component.setAttribute('id', 'key-status');

    const render = async (container) => {
        component.innerHTML = template;

        if (container && !container.contains(component)) {
            container.appendChild(component);
            await LoadSecurityInformation(component);
        };
    };

    const unrender = (container) => {
        if (container && container.contains(component)) {
            container.removeChild(component);
        };
    };

    const refresh = async () => {
        await LoadSecurityInformation(component)
    };

    return {
        render,
        unrender,
        refresh
    };
}();

async function LoadSecurityInformation(component) {
    const status = await CheckSecurity();
    const length = status.length;
    const cont_circular_percentage = component.querySelector('.circular-percentage');
    const p_percentage = cont_circular_percentage.querySelector('#percentage');
    const p_keys = component.querySelector('#keys-checked');
    const p_status = component.querySelector('#status');

    let percentCount;
    let count = 0;

    for (let index = 0; index < length; index++) {
        const keyStatus = status[index].status;

        if (keyStatus) count++;
    };

    percentCount = (count / length) * 100;

    cont_circular_percentage.setAttribute('style', `--percent: ${percentCount}%`);
    p_keys.textContent = `${count} / ${length} Keys are secured !`;
    p_percentage.textContent = `${String(percentCount) === 'NaN' ? 0 : percentCount.toFixed(0)}%`;
    
    if (percentCount == 100) {
        p_status.textContent = 'No Vulnerabilities Found !';
    } else {
        p_status.setAttribute('style', 'color: red;');
        p_status.textContent = `${length - count} Keys are not secured !`;
    }
};

async function CheckSecurity() {
    const sessionStorage = StorageHandler.GetSessionStorage();
    const keys = sessionStorage.keys;
    const masterkey = sessionStorage.masterkey;
    const keyArr = [];
    const statusArr = [];

    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        const password = await Encryption.decryptData(masterkey, key.key);
        const strength = VerifyStrength(password);
        keyArr.push({ strength, index });
    };

    for (let index = 0; index < keyArr.length; index++) {
        const key = keyArr[index];
        let status = false;

        if (String(key.strength) !== 'NaN' && key.strength >= 70.00) {
            status = true;
        };

        statusArr.push({
            strength: key.strength,
            index: key.index,
            status
        });
    };

    return statusArr;
};

export default MiscKeysSecurity;