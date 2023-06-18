chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it (like read the url)
  console.log(changeInfo);
  if (changeInfo?.url?.includes("mail.google")) {
    // do something here

    chrome.scripting.executeScript({
      target: { tabId: tabId, allFrames: true },
      files: ["index.js"],
    });
  }
});
