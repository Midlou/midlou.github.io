import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://midlou.com',
  integrations: [
    react(), 
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
  }),
  ]
});
