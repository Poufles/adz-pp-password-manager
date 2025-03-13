const StorageHandler = function () {
    let localCopy;
    let sessionCopy;

    /**
     * @returns Object that is stored in the local storage
     */
    const GetLocalStorage = () => {
        return JSON.parse(localStorage.getItem('lowkey'));
    }

    /**
     * @returns Object that is stored in the session storage
     */
    const GetSessionStorage = () => {
        return JSON.parse(sessionStorage.getItem('lowkey-session'));
    }

    /**
     * Updates the local storage
     * @param {Object} update - Object that contains the update 
     */
    const UpdateLocalStorage = (update) => {
        localStorage.setItem('lowkey', JSON.stringify(update));
    };

    /**
     * Updates the session storage
     * @param {Object} update - Object that contains the update 
     * @param {boolean} hasEnded - (Optional) Defines if the session has ended 
     */
    const UpdateSessionStorage = (update, hasEnded = false) => {
        if (hasEnded) {
            sessionStorage.removeItem('lowkey-session');
            return;
        }

        sessionStorage.setItem('lowkey-session', JSON.stringify(update));
    }

    const StorageCopy = ({ localData, sessionData } = {}) => {
        if (localData) localCopy = localData;
        if (sessionData) sessionCopy = sessionData;

        return { localCopy, sessionCopy };
    }

    return {
        GetLocalStorage,
        GetSessionStorage,
        UpdateLocalStorage,
        UpdateSessionStorage,
        StorageCopy
    }
}();

export default StorageHandler;