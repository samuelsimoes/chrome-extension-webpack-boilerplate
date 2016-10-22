var WebpackDevServer = require("webpack-dev-server"),
    webpack = require("webpack"),
    config = require("../webpack.config"),
    env = require("./env"),
    path = require("path");

require("./prepare");

require("./prepare_script_tags");

config.entry["webpack-server"] =
  ("webpack-dev-server/client?http://localhost:" + env.PORT);

for (var entryName in config.entry) {
  config.entry[entryName] = ["webpack/hot/dev-server"].concat(config.entry[entryName]);
}

config.output.pathinfo = true;
config.output.publicPath = ("http://localhost:" + env.PORT + "/");

config.plugins =
  [new webpack.HotModuleReplacementPlugin()].concat(config.plugins || []);

var compiler = webpack(config);

var server =
  new WebpackDevServer(compiler, {
    hot: true,
    contentBase: path.join(__dirname, "../build"),
    headers: { "Access-Control-Allow-Origin": "*" }
  });

server.listen(env.PORT);
