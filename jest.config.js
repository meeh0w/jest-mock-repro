/** @type {import('jest').Config} */

const config = {
  transform: {
    '\\.[jt]sx?$': require.resolve('babel-jest'),
  },
};

module.exports = config;
