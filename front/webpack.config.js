const path = require("path");

module.exports = {
    entry: {
        bundle: "./scripts/index.js", // Esto generará bundle.js
      
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js" 
    },
    mode: "development"
};
