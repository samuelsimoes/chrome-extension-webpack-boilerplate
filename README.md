# Chrome Extension Webpack Boilerplate

A basic foundation boilerplate for rich Chrome Extensions using [Webpack](https://webpack.github.io/)

This repo is forked by @mizchi and modify to my custom (modernize and ts).

## Developing a new extension

_I'll assume that you already read the [Webpack docs](https://webpack.js.org) and the [Chrome Extension](https://developer.chrome.com/extensions/getstarted) docs._

1. Check if your Node.js version is >= 10.
2. Clone the repository.
3. Install [yarn](https://yarnpkg.com/lang/en/docs/install/).
4. Run `yarn`.
5. Change the package's name and description on `package.json`.
6. Change the name of your extension on `src/manifest.json`.
7. Run `yarn run start`
8. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
9. Have fun.

## How to develop

```
yarn dev
```

All your extension's development code must be placed in `src` folder, including the extension manifest.

The boilerplate is already prepared to have a popup, a options page and a background page. You can easily customize this.

## Packing

```
yarn build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## Secrets

If you are developing an extension that talks with some API you probably are using different keys for testing and production. Is a good practice you not commit your secret keys and expose to anyone that have access to the repository.

To this task this boilerplate import the file `./secrets.<THE-NODE_ENV>.js` on your modules through the module named as `secrets`, so you can do things like this:

_./secrets.development.js_

```js
export default { key: "123" };
```

_./src/popup.ts_

```js
import secrets from "secrets";
ApiCall({ key: secrets.key });
```

:point_right: The files with name `secrets.*.js` already are ignored on the repository.

---

## LICENSE

MIT

- Kotaro Chikuba ~ [@mizchi](https://twitter.com/mizchi)
- Samuel Simões ~ [@samuelsimoes](https://twitter.com/samuelsimoes) ~ [Blog](http://blog.samuelsimoes.com/)
