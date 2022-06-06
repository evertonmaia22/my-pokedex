module.exports = {
    testIgnorePatterns: ["/node_modules"],
    setupFilesAfterEnv:[
        "<rootDir>/src/tests/setupTests.js</rootDir>"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir/node_modules/babel-jest>"
    },
    testEnviroment: 'jsdom'
};


