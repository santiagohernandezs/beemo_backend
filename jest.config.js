/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/db/singleton.ts'],
  moduleNameMapper: {
    '@shared/helpers/(.*)': '<rootDir>/src/shared/helpers/$1',
    '@user/(.*)': '<rootDir>/src/user/$1',
    '@db/(.*)': '<rootDir>/src/db/$1'
  }
}
