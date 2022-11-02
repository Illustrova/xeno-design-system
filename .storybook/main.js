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

    if (process.env.BASE_URL) {
      config.base = process.env.BASE_URL;
    }

    return config;
  },
  managerHead: (head, { configType }) => {
    const baseUrl = process.env.BASE_URL ?? '';

    head += `
      <link rel="apple-touch-icon" sizes="180x180" href="${baseUrl}/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="${baseUrl}/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="${baseUrl}/favicon-16x16.png" />
      <link rel="manifest" href="${baseUrl}/site.webmanifest" />
      <link rel="mask-icon" href="${baseUrl}/safari-pinned-tab.svg" color="#81a5f2" />
      <meta name="msapplication-TileColor" content="#baccf3" />
      <meta name="theme-color" content="#ffffff" />`;
    return head;
  },
};
