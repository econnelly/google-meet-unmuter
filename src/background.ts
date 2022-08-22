import Tab = chrome.tabs.Tab;
import ChromeWindow = chrome.windows.Window

async function unmuteMeet() {
    await getAllTabs()
}

async function injectScript (window: ChromeWindow, tab: Tab) {
    await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['inject.js']
    });
    await chrome.windows.update(window.id, {focused: true})
}
async function activateTab(window: ChromeWindow, tab: Tab) {
    await chrome.tabs.update(tab.id, {'active': true});
    await injectScript(window, tab)
}

async function getAllTabs() {
    const windows = await chrome.windows.getAll({populate: true});
    windows.forEach((window: ChromeWindow) => {
        window.tabs.forEach((tab) => {
            if (tab.url.indexOf("meet\.google") >= 0) {
                activateTab(window, tab)
            }
        });
    });
}

chrome.action.onClicked.addListener(() => {
    unmuteMeet()
});