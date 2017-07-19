var fileSystem = require("fs-extra"),
    path = require("path")

var sourceDir = path.join(__dirname, '../src/assets'),
    destDir = path.join(__dirname, '../build/assets')

if (fileSystem.existsSync(sourceDir)) {
  fileSystem.copySync(sourceDir, destDir);
}
