'use strict';

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('VIRTUAL CAM!!')
  const scriptEl = document.createElement('script');

  scriptEl.setAttribute('type', 'module');

  scriptEl.setAttribute('src', chrome.extension.getURL('main.js'));

  document.head.append(scriptEl);
});
