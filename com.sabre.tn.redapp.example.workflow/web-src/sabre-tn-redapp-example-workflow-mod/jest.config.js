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
            try {
                var jc = require(path.join(it, 'meta/ngv-jest/jest.json'));

                for( var i in jc.moduleNameMapper ) {
                    jestConfig.moduleNameMapper[i] = path.join(it, jc.moduleNameMapper[i]);
                }
            } catch( e ) {
                jestConfig.moduleNameMapper['^(' + path.basename(it) + ')$'] = path.join(it, 'meta/ngv-jest/$1/index.js');
                jestConfig.moduleNameMapper['^(' + path.basename(it) + ')/(.+)$'] = path.join(it, 'meta/ngv-jest/$1/$2.js');
            }
        });
}

function isTestFile(filename) {
    return filename.endsWith('.test.js') || filename.endsWith('.test.ts') || filename.endsWith('.test.tsx');
}

function findTests(dir) {
    if( !fs.existsSync(dir) ) {
        return false;
    }

    var files = fs.readdirSync(dir);

    for( var i in files ) {
        var filename = files[i];
        var fullFilename = path.join(dir, filename);

        var stat = fs.statSync(fullFilename);

        if( stat.isDirectory() && findTests(filename) ) {
            return true;
        } else if( stat.isFile() && isTestFile(filename) ) {
            return true;
        }
    }

    return false;
}

if( findTests(path.join(__dirname, 'src/tests/jest')) ) {
    jestConfig.testMatch = [
        "<rootDir>/src/tests/jest/**/*.test.(ts|tsx|js)"
    ];
}

if( process.env.CONCIERGE_MULTI_CONCIERGE_ENV === 'true' ) {
    jestConfig.testResultsProcessor = "jest-teamcity-reporter";
}

jestConfig.coverageReporters = ["json"];

jestConfig.coverageDirectory = "coverage/";

jestConfig.collectCoverageFrom = ["src/code/**/*.{js,jsx,ts,tsx}"];

jestConfig.coveragePathIgnorePatterns = [
    "src/code/Context.ts",
    "src/code/index.ts"
];

jestConfig.coverageThreshold = jestConfig.coverageThreshold ||
    {
        'global': {
            'branches': 0,
            'lines'   : 0
        }
    };

module.exports = jestConfig;
