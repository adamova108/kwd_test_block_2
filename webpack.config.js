const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const fs = require('fs');

// Read package.json to get asset paths
const packageJson = require('./package.json');

// Define source and output paths
const sourcePath = path.resolve(__dirname, 'assets/source/blocks');
const outputPath = path.resolve(__dirname, 'assets/blocks');

// Check if index.js exists in source path
const entry = {};
if (fs.existsSync(path.join(sourcePath, 'index.js'))) {
    entry.index = path.join(sourcePath, 'index.js');
}

// Create new webpack config
const config = {
    ...defaultConfig,
    entry,
    output: {
        path: outputPath,
        filename: '[name].js',
    },
};

module.exports = config; 