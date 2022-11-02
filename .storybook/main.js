const svgr = require('vite-plugin-svgr');

const path = require('path');

module.exports = {
  addons: [
    // "@storybook/addon-links",
    '@storybook/addon-essentials',
    'storybook-addon-designs',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  staticDirs: ['../public'],

  async viteFinal(config) {
    config.plugins.push(svgr());
    config.resolve.alias = {
      ...config.resolve.alias,
      // adding emotion aliases to fix docs, see https://github.com/eirslett/storybook-builder-vite/issues/219#issuecomment-1023666193
      '@emotion/react': path.resolve(path.join(__dirname, '../node_modules/@emotion/react')),
      '@emotion/styled': path.resolve(path.join(__dirname, '../node_modules/@emotion/styled')),
      '@emotion/core': path.resolve(path.join(__dirname, '../node_modules/@emotion/react')),
      'emotion-theming': path.resolve(path.join(__dirname, '../node_modules/@emotion/react')),
    };
    return config;
  },
};
