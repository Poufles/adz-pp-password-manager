import { DateDifference } from "./date";
import StorageHandler from "./storage-handler";

function App() {
    let storageCopy;
    let sessionCopy;

    // Validate existing local storage
    if (!StorageHandler.GetLocalStorage()) {
        const storageTemplate = { app: { accounts: [], websites: LoadWebsites() } };

        // Create new lowkey storage
        localStorage.setItem('lowkey', JSON.stringify(storageTemplate));
        storageCopy = localStorage.getItem('lowkey');
        // Redirect to login
        window.location.href = '/auth.html';
    }

    // Check for any current sessions
    const storage = StorageHandler.GetLocalStorage();
    const accounts = storage.app.accounts;

    // Check if first time
    if (accounts.length === 0) {
        window.location.href = '/register.html';
        return;
    }

    // Check every account for session
    for (let account of accounts) {
        if (account.inSession) {
            let minuteDifference = DateDifference({
                date: account.lastSession,
                type: 'minute'
            });

            if (minuteDifference > 20) {
                window.location.href = '/auth.html';
                account.inSession = false;
                StorageHandler.UpdateLocalStorage(storage)
                return;
            } else {
                StorageHandler.UpdateSessionStorage(account);
                sessionCopy = account;
                window.location.href = '/dashboard.html';
                return;
            }
        }
    }

    window.location.href = '/auth.html';
};

// Start app
App();
setTimeout(() => {
    if (window.location.pathname === '/index.html') {
        App();
    }
}, 5000);

function LoadWebsites() {
    const websites = [
        { name: "Facebook", link: "https://www.facebook.com" },
        { name: "Instagram", link: "https://www.instagram.com" },
        { name: "Twitter (X)", link: "https://www.twitter.com" },
        { name: "TikTok", link: "https://www.tiktok.com" },
        { name: "Snapchat", link: "https://www.snapchat.com" },
        { name: "Reddit", link: "https://www.reddit.com" },
        { name: "Discord", link: "https://www.discord.com" },
        { name: "YouTube", link: "https://www.youtube.com" },
        { name: "Twitch", link: "https://www.twitch.tv" },
        { name: "Netflix", link: "https://www.netflix.com" },
        { name: "Prime Video", link: "https://www.primevideo.com" },
        { name: "Spotify", link: "https://www.spotify.com" },
        { name: "SoundCloud", link: "https://www.soundcloud.com" },
        { name: "Steam", link: "https://store.steampowered.com" },
        { name: "Epic Games Store", link: "https://www.epicgames.com/store" },
        { name: "Xbox", link: "https://www.xbox.com" },
        { name: "PlayStation Network", link: "https://www.playstation.com" },
        { name: "Roblox", link: "https://www.roblox.com" },
        { name: "Minecraft", link: "https://www.minecraft.net" },
        { name: "Fortnite", link: "https://www.epicgames.com/fortnite" },
        { name: "Valorant", link: "https://playvalorant.com" },
        { name: "League of Legends", link: "https://www.leagueoflegends.com" },
        { name: "Apex Legends", link: "https://www.ea.com/games/apex-legends" },
        { name: "Genshin Impact", link: "https://genshin.hoyoverse.com" },
        { name: "Dota 2", link: "https://www.dota2.com" },
        { name: "PUBG", link: "https://www.pubg.com" },
        { name: "Google", link: "https://www.google.com" },
        { name: "Yahoo Mail", link: "https://mail.yahoo.com" },
        { name: "Outlook", link: "https://outlook.live.com" },
        { name: "GitHub", link: "https://github.com" },
        { name: "GitLab", link: "https://gitlab.com" },
        { name: "Stack Overflow", link: "https://stackoverflow.com" },
        { name: "Medium", link: "https://medium.com" },
        { name: "Wikipedia", link: "https://www.wikipedia.org" },
        { name: "Amazon", link: "https://www.amazon.com" },
        { name: "eBay", link: "https://www.ebay.com" },
        { name: "AliExpress", link: "https://www.aliexpress.com" },
        { name: "Shopee", link: "https://shopee.com" },
        { name: "Trello", link: "https://trello.com" },
        { name: "Notion", link: "https://www.notion.so" },
        { name: "Google Drive", link: "https://drive.google.com" },
        { name: "Dropbox", link: "https://www.dropbox.com" },
        { name: "OneDrive", link: "https://onedrive.live.com" },
        { name: "WeTransfer", link: "https://wetransfer.com" },
        { name: "Telegram", link: "https://web.telegram.org" },
        { name: "WhatsApp", link: "https://web.whatsapp.com" },
        { name: "Messenger", link: "https://www.messenger.com" },
        { name: "Signal", link: "https://signal.org" },
        { name: "Uber", link: "https://www.uber.com" },
        { name: "Lyft", link: "https://www.lyft.com" },
        { name: "Airbnb", link: "https://www.airbnb.com" },
        { name: "Tripadvisor", link: "https://www.tripadvisor.com" },
        { name: "Indeed", link: "https://www.indeed.com" },
        { name: "Fiverr", link: "https://www.fiverr.com" },
        { name: "Upwork", link: "https://www.upwork.com" }
    ]


    return websites;
}