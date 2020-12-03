module.exports = {
  collectCoverageFrom: ['src/**/*.{js,ts,tsx}'],
  rootDir: '../..',
  setupFiles: ['./config/test/test-shim.js'],
  testRegex: '/.*\\.test\\.js?$',
  coverageReporters: ['text-summary', 'lcov'],
  verbose: true,
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['node_modules'],
  globals: {
    NODE_ENV: 'test',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/build'],
  //Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./config/test/jest.setup.js'],
};
