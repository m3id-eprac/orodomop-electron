module.exports = {
    globals: {
        'ts-jest': {
            tsconfigFile: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    // transform: {
    //     '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
    // },
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest"],
    },
    testMatch: [
        '**/test/electron/**/*.test.(ts|js)'
    ],
    testEnvironment: 'node'
};
