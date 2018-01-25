var WebpackDevServer = require("webpack-dev-server"),
    ChromeExtensionReloader  = require('webpack-chrome-extension-reloader'),
    webpack = require("webpack"),
    config = require("../webpack.config"),
    env = require("./env"),
    path = require("path");

var options = (config.chromeExtensionBoilerplate || {});
config.plugins =
  [new ChromeExtensionReloader()].concat(config.plugins || []);

delete config.chromeExtensionBoilerplate;

var compiler = webpack(config);

var server =
  new WebpackDevServer(compiler, {
    contentBase: path.join(__dirname, "../build"),
    headers: { "Access-Control-Allow-Origin": "*" }
  });

server.listen(env.PORT);
