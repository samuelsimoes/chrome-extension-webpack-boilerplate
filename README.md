# Chrome Extension Webpack Boilerplate

A basic foundation boilerplate for rich Chrome Extensions using [Webpack](https://webpack.github.io/) to help you write modular and modern Javascript code, load CSS easily and [automatic reload the browser on code changes](https://webpack.github.io/docs/webpack-dev-server.html#automatic-refresh).

## Developing a new extension
_I'll assume that you already read the [Webpack docs](https://webpack.js.org) and the [Chrome Extension](https://developer.chrome.com/extensions/getstarted) docs._


1. Check if your Node.js version is >= 6.
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
8. Have fun.

## Structure
All your extension's development code must be placed in `src` folder, including the extension manifest.

The boilerplate is already prepared to have a popup, a options page and a background page. You can easily customize this.

Each page has its own [assets package defined](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate/blob/master/webpack.config.js#L16-L20). So, to code on popup you must start your code on `src/js/popup.js`, for example.

You must use the [ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) to a better code organization. The boilerplate is already prepared to that and [here you have a little example](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate/blob/master/src/js/popup.js#L2-L4).

## Webpack auto-reload and HRM
To make your workflow much more efficient this boilerplate uses the [webpack server](https://webpack.github.io/docs/webpack-dev-server.html) to development (started with `yarn run server`) with auto reload feature that reloads the browser automatically every time that you save some file o your editor.

You can run the dev mode on other port if you want. Just specify the env var `port` like this:

```
$ PORT=6002 yarn run start
```

## Content Scripts

Although this boilerplate uses the webpack dev server, it's also prepared to write all your bundles files on the disk at every code change, so you can point, on your extension manifest, to your bundles that you want to use as [content scripts](https://developer.chrome.com/extensions/content_scripts), but you need to exclude these entry points from hot reloading [(why?)](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate/issues/4#issuecomment-261788690). To do so you need to expose which entry points are content scripts on the `webpack.config.js` using the `chromeExtensionBoilerplate -> notHotReload` config. Look the example below.

Let's say that you want use the `myContentScript` entry point as content script, so on your `webpack.config.js` you will configure the entry point and exclude it from hot reloading, like this:

```js
{
  …
  entry: {
    myContentScript: "./src/js/myContentScript.js"
  },
  chromeExtensionBoilerplate: {
    notHotReload: ["myContentScript"]
  }
  …
}
```

and on your `src/manifest.json`:

```json
{
  "content_scripts": [
    {
      "matches": ["https://www.google.com/*"],
      "js": ["myContentScript.bundle.js"]
    }
  ]
}

```

## Packing
After the development of your extension run the command

```
$ NODE_ENV=production yarn run build
```
Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## Secrets
If you are developing an extension that talks with some API you probably are using different keys for testing and production. Is a good practice you not commit your secret keys and expose to anyone that have access to the repository.

To this task this boilerplate import the file `./secrets.<THE-NODE_ENV>.js` on your modules through the module named as `secrets`, so you can do things like this:

_./secrets.development.js_

```js
export default { key: "123" };
```

_./src/popup.js_

```js
import secrets from "secrets";
ApiCall({ key: secrets.key });
```
:point_right: The files with name `secrets.*.js` already are ignored on the repository.

## With React.js
:bulb: If you want use [React.js](https://facebook.github.io/react/) with this boilerplate, check the **[react branch](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate/tree/react)**.


## Contributing

1. **Please!! Do not create a pull request without an issue before discussing the problem.**
2. On your PR make sure that you are following the current codebase style.
3. Your PR must be single purpose. Resolve just one problem on your PR.
4. Make sure to commit in the same style that we are committing until now on the project.

-------------
Samuel Simões ~ [@samuelsimoes](https://twitter.com/samuelsimoes) ~ [Blog](http://blog.samuelsimoes.com/)
