import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import legacy from '@vitejs/plugin-legacy';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const viteSetings = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        terms: resolve(__dirname, 'pages/terms/indexTermsUK.html'),
      },
    },
    sourcemap: false,
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    checker({ typescript: true }),
  ],
  server: {
    open: true,
    port: 3000,
  },
};

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    viteSetings.build.sourcemap = true;
    return viteSetings;
  } else {
    viteSetings.build.sourcemap = false;
    return viteSetings;
  }
});
