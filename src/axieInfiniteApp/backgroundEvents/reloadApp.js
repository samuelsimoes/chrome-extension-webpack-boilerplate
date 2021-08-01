chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type == "restore-extension") {
    chrome.tabs.query({}, function (tabs) {
      tabs.map((tab) => chrome.tabs.sendMessage(tab.id, { type: "reload" }));
    });
    setTimeout(() => chrome.runtime.reload(), 1000);
  }
  sendResponse();
});

self.reloadApp = () => chrome.runtime.reload();
