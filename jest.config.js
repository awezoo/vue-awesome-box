module.exports = {
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': 'vue3-jest',
        '^.+\\js$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest',
    },
}
