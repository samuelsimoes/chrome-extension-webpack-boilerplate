import React from "react";
import Button from "@material-ui/core/Button";

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

const Reload = () => {
  return (
    <Button onClick={sendRestore} variant="outlined" color="secondary">
      Reload
    </Button>
  );
};

export default Reload;
