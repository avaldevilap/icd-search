import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { MagicRegExpTransformPlugin } from 'magic-regexp/transform';
import simpleStackForm from 'simple-stack-form';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss(), MagicRegExpTransformPlugin.vite()],
  },
  integrations: [simpleStackForm()],
});
