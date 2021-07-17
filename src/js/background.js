import "../img/icon-128.png";
import "../img/icon-34.png";

console.log(" #### Background script loaded succesfully");

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type == "restore-extension") {
    chrome.tabs.query({}, function (tabs) {
      tabs.map((tab) => chrome.tabs.sendMessage(tab.id, { type: "reload" }));
    });
    setTimeout(() => chrome.runtime.reload(), 1000);
  }

  if (message.type === "query-axies-market") {
    chrome.tabs.query({}, function (tabs) {
      tabs.map((tab) =>
        chrome.tabs.sendMessage(tab.id, { type: "fetch-marketplace" })
      );
    });
  }

  if (message.type == "axies-market") {
    chrome.tabs.query({}, function (tabs) {
      tabs.map((tab) =>
        chrome.tabs.sendMessage(tab.id, {
          type: "axies-query-response",
          message,
        })
      );
    });
  }

  sendResponse();
});

chrome.runtime.onMessage.addListener(function (message) {
  if (message && message.type == "copy") {
    var input = document.createElement("textarea");
    document.body.appendChild(input);
    input.value = message.text;
    input.focus();
    input.select();
    document.execCommand("Copy");
    input.remove();
  }
});
