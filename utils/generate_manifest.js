var manifest = require("../src/manifest.json"),
    fileSystem = require("fs"),
    path = require("path"),
    env = require("./env");

// generates the manifest file using the package.json informations
manifest.description = process.env.npm_package_description;
manifest.version = process.env.npm_package_version;

fileSystem.writeFileSync(
  path.join(__dirname, "../build/manifest.json"),
  JSON.stringify(manifest)
);
