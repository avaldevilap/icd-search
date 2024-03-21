import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { MagicRegExpTransformPlugin } from 'magic-regexp/transform';
import simpleStackForm from 'simple-stack-form';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss(), MagicRegExpTransformPlugin.vite()],
  },
  integrations: [simpleStackForm()],
  adapter: node({
    mode: 'standalone',
  }),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
