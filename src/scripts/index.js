import { DateDifference } from "./date";

function App() {
    let storageCopy;
    let sessionCopy;

    // Validate existing local storage
    if (!localStorage.getItem('lowkey')) {
        const storageTemplate = { app: { accounts: [], websites: { sitename: "link" } } };

        // Create new lowkey storage
        localStorage.setItem('lowkey', JSON.stringify(storageTemplate));
        storageCopy = localStorage.getItem('lowkey');
        // Redirect to login
        window.location.href = '/auth.html';
    }

    // Check for any current sessions
    const storage = JSON.parse(localStorage.getItem('lowkey'));
    const accounts = storage.app.accounts;

    // Check if first time
    if (accounts.length === 0) {
        window.location.href = '/register.html';
        return;
    }

    // Check every account for session
    accounts.forEach(account => {
        // Validate account in session
        if (account.inSession) {
            let minuteDifference = DateDifference({
                date: account.lastSession,
                type: 'minute'
            });

            if (minuteDifference > 20) {
                window.location.href = '/auth.html';
                account.inSession = false;
                localStorage.setItem('lowkey', JSON.stringify(storage));

                return;
            } else {
                sessionStorage.setItem('session', JSON.stringify(account));
                sessionCopy = account
                window.location.href = '/dashboard.html';

                return;
            }
        }
    });

    window.location.href = '/auth.html';
};

App();