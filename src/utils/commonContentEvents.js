chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "reload") {
    setTimeout(() => window.location.reload(), 2000);
  }
  console.log(message);
  return true;
});

const sendRestore = () => {
  chrome.runtime.sendMessage({
    type: "restore-extension",
  });
};

export default sendRestore;
