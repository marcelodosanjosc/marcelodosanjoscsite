import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcelocaldasdevops.com',
  base: '/',
  build: {
    format: 'file'
  }
});
