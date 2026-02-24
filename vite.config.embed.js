import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

/** Build embed widget → public/embed/chatbot.js + chatbot_ui.css. Loader at public/chatbot.js loads this. */
export default defineConfig({
  plugins: [vue()],
  define: {
    // Browser has no process; Vue runtime expects process.env.NODE_ENV
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'public/embed',
    emptyOutDir: true,
    lib: {
      entry: fileURLToPath(new URL('src/embed/embed.js', import.meta.url)),
      name: 'ChatbotWidget',
      formats: ['iife'],
      fileName: () => 'chatbot.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        intro: 'var process = { env: { NODE_ENV: "production" } };',
      },
    },
    minify: true,
    sourcemap: true,
  },
});
