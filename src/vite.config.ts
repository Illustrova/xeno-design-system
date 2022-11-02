import react from '@vitejs/plugin-react';
import * as path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, Plugin } from 'vite';
import svgr from 'vite-plugin-svgr';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'xeno',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['@emotion/react', '@emotion/styled', /react.*/, /@mui\/.*/],
      output: {
        globals: {
          '@emotion/react': '@emotion/react',
          '@emotion/styled': '@emotion/styled',
          '@mui/material': '@mui/material',
          react: 'react',
        },
      },
    },
  },
  define: {
    'process.env': process.env,
  },

  plugins: [
    react(),
    svgr(),
    // visualizer is actually fine
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    visualizer({
      gzipSize: true,
      template: 'network',
      open: false,
    }) as Plugin,
  ],
});
