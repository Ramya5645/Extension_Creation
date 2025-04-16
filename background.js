chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "lookupOxford",
      title: "Look up \"%s\" in Oxford Dictionary",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "lookupOxford") {
      const query = info.selectionText.trim();
      const url = `https://www.oxfordlearnersdictionaries.com/definition/english/${encodeURIComponent(query)}`;
      chrome.tabs.create({ url });
    }
  });
  