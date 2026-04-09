import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

export default defineConfig({
  test: {
    globals: true,
    root: './',
    environment: 'node',
    env: {
      DOTENV_CONFIG_PATH: '.env.test',
    },
    setupFiles: ['dotenv/config', './src/test/setup.ts'],
    exclude: ['node_modules', 'dist'],
  },
  plugins: [
    // This is required to build the test files with SWC
    swc.vite({
      // Explicitly set the module type to avoid errors
      module: { type: 'es6' },
    }),
  ],
});
