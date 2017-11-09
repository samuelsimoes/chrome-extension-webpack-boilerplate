import fileSystem from "fs-extra";
import path from "path";

// clean de dist folder
fileSystem.emptyDirSync(path.join(__dirname, "../build"));

import "./generate_manifest";
