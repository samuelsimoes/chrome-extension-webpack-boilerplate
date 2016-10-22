var fileSystem = require("fs-extra"),
    path = require("path");

// clean de dist folder
fileSystem.emptyDirSync(path.join(__dirname, "../build"));

// copy the src folder without the unprocessed assets
fileSystem.copySync(
  path.join(__dirname, "../src"),
  path.join(__dirname, "../build"),
  {
    filter: function (testedPath) {
      return !(/\/(js|css)/.test(testedPath));
    }
  }
);

require("./generate_manifest");
