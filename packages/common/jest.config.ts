import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  rootDir: '.',
  testMatch: ['**/*.spec.ts'],
  setupFiles: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  clearMocks: true,
  testEnvironment: 'node',
}

export default config
