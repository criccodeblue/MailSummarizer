(async () => {
  const utilsSrc = chrome.runtime.getURL("utils.js");
  const { consoleExtension, modifyDom } = await import(utilsSrc);

  console.log("extension running");
  consoleExtension("Extension is running");

  modifyDom();
})();
