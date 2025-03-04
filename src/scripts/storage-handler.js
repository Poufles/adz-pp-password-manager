const StorageHandler = function () {
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
     */
    const UpdateSessionStorage = (update) => {
        sessionStorage.setItem('lowkey-session', JSON.stringify(update));
    }

    return {
        GetLocalStorage,
        GetSessionStorage,
        UpdateLocalStorage,
        UpdateSessionStorage
    }
}();

export default StorageHandler;