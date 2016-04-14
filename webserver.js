var WebpackDevServer = require("webpack-dev-server"),
    webpack = require("webpack"),
    config = require("./webpack.config"),
    env = require("./env"),
    path = require("path");

require("./prepare");

require("./prepare_script_tags");

config.entry["webpack-server"] =
  ("webpack-dev-server/client?http://localhost:" + env.port);

var compiler = webpack(config);

var server =
  new WebpackDevServer(compiler, {
    port: env.port,
    contentBase: path.join(__dirname, "build")
  });

server.listen(env.port);
