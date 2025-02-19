module.exports = {
  roots: ['<rootDir>/app/js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
}
