console.log("evaled");

chrome.runtime.onInstalled.addListener(function() {
  console.log("installed");
});
