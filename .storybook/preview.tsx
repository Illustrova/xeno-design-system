import { CssBaseline } from '@mui/material';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import * as XenoTheme from '../src/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export const decorators = [
  (Story: React.FC) => (
    <XenoTheme.Provider>
      <CssBaseline />
      <Story />
    </XenoTheme.Provider>
  ),
  withDesign,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*|Callback$' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
