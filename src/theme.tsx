import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React from 'react';

import { tokens } from './tokens/build/tokens';

const shadows = {
  elevation1: '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
  elevation2: '0px 4px 20px 0 rgba(0, 0, 0, 0.12)',
  elevation3: `0 16px 32px 0 rgba(0, 0, 0, 0.12)`,
  // easily recognizable locally in case an unconfigured elevation is used
  unconfigured: process.env.NODE_ENV === 'development' ? `10px 10px 5px 0px red;` : 'none',
};

export const mainTheme = createTheme({
  palette: {
    ...tokens.MainTheme,
  },
  shadows: [
    'none',
    // ...Object.values(tokens.elevation).map((elArr) =>
    //   elArr
    //     .map(
    //       (el) => `${el.x}px ${el.y}px ${el.blur}px ${el.spread}px ${el.color}`
    //     )
    //     .join(" ")
    // ),
    shadows.elevation1, // MUI default elevation for paper
    shadows.elevation2,
    shadows.elevation3,
    shadows.elevation1, // MUI default elevation for Topbar
    shadows.unconfigured,
    shadows.elevation2, // MUI default for buttons with visible focus
    shadows.unconfigured,
    shadows.elevation3, // MUI default elevation for popup menus, selects
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.unconfigured,
    shadows.elevation3, // MUI default elevation for dialogs
  ],
  shape: {
    borderRadius: Number(tokens.borderRadius.lg) ?? 0,
  },
  spacing: 4,
  typography: {
    ...tokens.typography,
  },
});

// do this automatically
mainTheme.components = {
  ...mainTheme.components,
};

export const Provider: React.FC = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
  </StyledEngineProvider>
);
