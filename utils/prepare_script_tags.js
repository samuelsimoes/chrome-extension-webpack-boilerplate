/*eslint no-shadow:0*/

/**
 * The main idea here is add the localhost on script tags with data-bundle
 * attribute on development mode.
 */
var env = require("./env"),
    fileSystem = require("fs"),
    path = require("path");

var buildPath = path.join(__dirname, "../build");

var appendLocalhost = function (content) {
  content =
    content.replace(
      new RegExp("(<script data-bundle src=['|\"])", "g"),
      ("$1http://localhost:" + env.PORT + "/")
    );

  content =
    content.replace(
      /(<\/body>)/,
      "<script src=\"http://localhost:" + env.PORT + "/webpack-dev-server.js\"></script>$1"
    );

  return content;
};

var innerFilesPath = fileSystem.readdirSync(buildPath);

for (var i = 0, l = innerFilesPath.length; i < l; i++) {
  var innerFilePath = path.join(buildPath, innerFilesPath[i]);

  if (/\.html$/.test(innerFilePath)) {
    var content = fileSystem.readFileSync(innerFilePath, "utf-8");
    fileSystem.writeFileSync(innerFilePath, appendLocalhost(content));
  }
}
