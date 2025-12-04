import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

const config = {
  preprocess: vitePreprocess({ script: true }),
  kit: {
    adapter: adapter()
  }
};

export default config;