console.log("dev tools");
chrome.devtools.panels.create(
  "TestPanel",
  "", // icon画像を指定できる
  "./panel.html",
  panel => {
    console.log("created", panel);
  } // callback
);
