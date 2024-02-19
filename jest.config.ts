import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.paths.json';

const customModuleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

const config: Config = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    _DEV_: true,
  },
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 50,
      statements: 0,
    },
  },
  displayName: {
    name: 'MOBILE',
    color: 'red',
  },
  collectCoverageFrom: ['src//.ts?(x)', '!src//_stories_/*'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/_mocks_',
    '<rootDir>/src/_tests_',
    '<rootDir>/jest',
    '<rootDir>/dist',
  ],
  automock: false,
  setupFiles: ['<rootDir>/jest/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup-test.ts'],
  testMatch: ['<rootDir>/**/*.test.ts?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/lib', '<rootDir>/dist'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/jest/mocks/svgMoock.ts',
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/mocks/imageMock.ts",
    ...customModuleNameMapper,
  },
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'jsdom',
  coverageReporters: ['text-summary', 'lcov', 'text'],
};

export default config;