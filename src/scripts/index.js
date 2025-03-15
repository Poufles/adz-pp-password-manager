import { DateDifference } from "./date";
import StorageHandler from "./storage-handler";

function App() {
    // Validate existing local storage
    if (!StorageHandler.GetLocalStorage()) {
        const storageTemplate = { app: { accounts: [], websites: LoadWebsites() } };

        // Create new lowkey storage
        localStorage.setItem('lowkey', JSON.stringify(storageTemplate));
        // Register a copy
        StorageHandler.StorageCopy({
            localData: StorageHandler.GetLocalStorage()
        });
        // Redirect to login
        window.location.href = './auth.html';

    };

    // Check for any current sessions
    const storage = StorageHandler.GetLocalStorage();
    const accounts = storage.app.accounts;

    // Check if first time
    if (accounts.length === 0) {
        window.location.href = './register.html';
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
                window.location.href = './auth.html';
                account.inSession = false;
                StorageHandler.UpdateLocalStorage(storage)
                StorageHandler.StorageCopy({
                    sessionData: StorageHandler.GetSessionStorage()
                });

                return;
            } else {
                StorageHandler.UpdateSessionStorage(account);
                StorageHandler.StorageCopy({
                    sessionData: StorageHandler.GetSessionStorage()
                });
                window.location.href = './dashboard.html';

                return;
            }
        }
    }

    window.location.href = './auth.html';
};

// Start app
App();

function LoadWebsites() {
    const websites = [
        { name: "Facebook", link: "https://www.facebook.com" },
        { name: "Instagram", link: "https://www.instagram.com" },
        { name: "Twitter (X)", link: "https://www.twitter.com" },
        { name: "TikTok", link: "https://www.tiktok.com" },
        { name: "Snapchat", link: "https://www.snapchat.com" },
        { name: "Reddit", link: "https://www.reddit.com" },
        { name: "Discord", link: "https://www.discord.com" },
        { name: "Twitch", link: "https://www.twitch.tv" },
        { name: "Netflix", link: "https://www.netflix.com" },
        { name: "Spotify", link: "https://www.spotify.com" },
        { name: "SoundCloud", link: "https://www.soundcloud.com" },
        { name: "Steam", link: "https://store.steampowered.com" },
        { name: "Epic Games", link: "https://www.epicgames.com/store" },
        { name: "Xbox", link: "https://www.xbox.com" },
        { name: "PlayStation", link: "https://www.playstation.com" },
        { name: "Roblox", link: "https://www.roblox.com" },
        { name: "Minecraft", link: "https://www.minecraft.net" },
        { name: "Fortnite", link: "https://www.epicgames.com/fortnite" },
        { name: "Valorant", link: "https://playvalorant.com" },
        { name: "Riot Games", link: "https://www.riotgames.com" },
        { name: "Apex Legends", link: "https://www.ea.com/games/apex-legends" },
        { name: "Genshin Impact", link: "https://genshin.hoyoverse.com" },
        { name: "Dota 2", link: "https://www.dota2.com" },
        { name: "Gmail", link: "https://www.gmail.com" },
        { name: "Outlook", link: "https://outlook.live.com" },
        { name: "GitHub", link: "https://github.com" },
        { name: "Stack Overflow", link: "https://stackoverflow.com" },
        { name: "Medium", link: "https://medium.com" },
        { name: "Amazon", link: "https://www.amazon.com" },
        { name: "eBay", link: "https://www.ebay.com" },
        { name: "Shopee", link: "https://shopee.com" },
        { name: "Notion", link: "https://www.notion.so" },
        { name: "OneDrive", link: "https://onedrive.live.com" },
        { name: "WhatsApp", link: "https://web.whatsapp.com" },
        { name: "Messenger", link: "https://www.messenger.com" },
        { name: "Uber", link: "https://www.uber.com" },
    ];


    return websites;
}