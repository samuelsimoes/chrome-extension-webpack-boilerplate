var manifest = require("./src/manifest.json"),
    fileSystem = require("fs"),
    path = require("path"),
    env = require("./env");

// generates the manifest file using the package.json informations
manifest.description = process.env.npm_package_description;
manifest.version = process.env.npm_package_version;

if (env.mode === "development") {
  manifest.content_security_policy =
    manifest.content_security_policy.replace("%PORT%", env.port);
} else {
  manifest.content_security_policy =
    manifest.content_security_policy.replace("http://localhost:%PORT%", "");
}

fileSystem.writeFileSync(
  path.join(__dirname, "build", "manifest.json"),
  JSON.stringify(manifest)
);
