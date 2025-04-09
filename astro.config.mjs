import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown'

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://midlou.com',
  integrations: [
    tailwind(),
    partytown({
      config: { forward: ["dataLayer.push"], },
    }),
    vue()]
});
