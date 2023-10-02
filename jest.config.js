module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest', //target any ts file and use ts-jest to transform it to js so we can run test

    },
    testEnvironment: "node",
    testRegex: "/src/.*\\.(test|spec)?\\.(ts|tsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    roots: ["<rootDir>/src"],
}