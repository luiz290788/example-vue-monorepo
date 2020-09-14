module.exports = {
  name: 'my-first-vue-app',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/my-first-vue-app',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' },
    'vue-jest': { tsConfig: 'apps/my-first-vue-app/tsconfig.spec.json' },
  },
};
