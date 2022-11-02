module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
  },
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/utils/test/setup/setupTest.ts'],
  setupFilesAfterEnv: ['<rootDir>/utils/test/setup/js-dom.ts', '<rootDir>/utils/test/setup/storybook.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
};
