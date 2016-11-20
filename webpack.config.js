var webpack = require("webpack"),
    path = require("path"),
    fileSystem = require("fs"),
    env = require("./utils/env"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

// load the secrets
var alias = {};

var secretsPath = path.join(__dirname, ("secrets." + env.NODE_ENV + ".js"));

if (fileSystem.existsSync(secretsPath)) {
  alias["secrets"] = secretsPath;
}

module.exports = {
  entry: {
    popup: path.join(__dirname, "src", "js", "popup.js"),
    options: path.join(__dirname, "src", "js", "options.js"),
    background: path.join(__dirname, "src", "js", "background.js")
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel" },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  resolve: {
    alias: alias
  },
  plugins: [
    // expose and write the allowed env vars on the compiled bundle
    new webpack.DefinePlugin({ "process.env": JSON.stringify(env) }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "popup.html"),
      filename: "popup.html",
      chunks: ["popup"],
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "options.html"),
      filename: "options.html",
      chunks: ["options"],
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "background.html"),
      filename: "background.html",
      chunks: ["background"],
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
};
