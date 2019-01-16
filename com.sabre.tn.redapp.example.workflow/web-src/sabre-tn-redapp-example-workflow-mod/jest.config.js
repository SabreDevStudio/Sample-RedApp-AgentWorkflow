var fs = require('fs');
var path = require('path');

var jestConfig = require('./src/tests/jest-config.js');

if( !jestConfig.resolver ) {
    jestConfig.moduleNameMapper = jestConfig.moduleNameMapper || {};

    var nodeModulesDir = path.join(__dirname, 'node_modules');

    fs.readdirSync(nodeModulesDir)
        .map(function(it) {
            return path.join(nodeModulesDir, it, 'module.js')
        })
        .filter(function(it) {
            return fs.existsSync(it)
        })
        .map(function(it) {
            return path.dirname(it)
        })
        .forEach(function(it) {
            jestConfig.moduleNameMapper['^(' + path.basename(it) + ')$'] = path.join(it, 'meta/ngv-jest/$1/index.js');
            jestConfig.moduleNameMapper['^(' + path.basename(it) + ')/(.+)$'] = path.join(it, 'meta/ngv-jest/$1/$2.js');
        });
}

module.exports = jestConfig;
