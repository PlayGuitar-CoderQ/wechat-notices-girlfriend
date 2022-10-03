/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: 'node',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    '@config/(.*)':'<rootDir>/config/$1'
  },
};