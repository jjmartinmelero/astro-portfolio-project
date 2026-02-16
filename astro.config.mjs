// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: node({
    mode: 'standalone',
  }),
  env: {
    schema: {
      CONTENT_ISLAND_SECRET_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
        optional: false,
        default: 'INFORM_VALID_TOKEN',
      }),
      FROM_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
        optional: false,
        default: 'INFORM_VALID_TOKEN',
      }),
      TO_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
        optional: false,
        default: 'INFORM_VALID_TOKEN',
      }),
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: false,
        default: 'INFORM_VALID_TOKEN',
      }),
    },
  },
});
