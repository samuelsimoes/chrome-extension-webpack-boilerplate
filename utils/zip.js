var webpack = require("webpack"),
    ZipPlugin = require("zip-webpack-plugin"),
    config = require("../webpack.config");

delete config.chromeExtensionBoilerplate;

config.plugins = (config.plugins || []).concat(new ZipPlugin({
  path: '..', // don't save the zip file inside the build directory
  filename: 'dist', // file will be dist.zip
  extension: 'zip'
}))

webpack(
  config,
  function (err) { if (err) throw err; }
);
