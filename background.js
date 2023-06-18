chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it (like read the url)
  if (changeInfo.status === "complete") {
    chrome.scripting.executeScript({
      target: { tabId: tabId, allFrames: true },
      files: ["index.js"],
    });
  }
});
