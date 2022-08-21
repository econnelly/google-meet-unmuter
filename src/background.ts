import Tab = chrome.tabs.Tab;
import ChromeWindow = chrome.windows.Window

const unmuteMeet = () => {
    getAllTabs()
}

const injectScript = (window: ChromeWindow, tab: Tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['inject.js']
    }, () => {
        chrome.windows.update(window.id, {focused: true})
    });
}
const activateTab = (window: ChromeWindow, tab: Tab) => {
    if (tab.url.indexOf("meet\.google") >= 0) {
        chrome.tabs.update(tab.id, {'active': true}, () => {
            injectScript(window, tab)
        });
    }
}

const getAllTabs = () => {
    chrome.windows.getAll({populate:true},(windows) => {
        windows.forEach((window: ChromeWindow) => {
            window.tabs.forEach((tab) => {
                activateTab(window, tab)
            });
        });
    });
}

chrome.action.onClicked.addListener((tab: Tab) => {
    unmuteMeet()
});