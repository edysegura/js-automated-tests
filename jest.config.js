module.exports = {
  roots: ['<rootDir>/tests/unit-tests'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
}
