import "../img/icon-128.png";
import "../img/icon-34.png";

console.log(" #### Background script loaded succesfully");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type == "restore-extension") {
    chrome.runtime.reload();
  }
  sendResponse();
});
