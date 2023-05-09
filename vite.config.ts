// @ts-ignore
import path from 'node:path';
import {defineConfig} from 'vite';
import {join, resolve} from "path";
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
import vueSetupExtend from 'vite-plugin-vue-setup-extend'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `/src`,
      '@vUtils': `${path.resolve(__dirname, 'src/common/utils.ts')}`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    vueSetupExtend(),
    Pages({
      exclude: ['**/components/*.vue', '**/*-components/*.vue', '**/*.ts', '**/*.js'],
      dirs: [
        {dir: 'src/pages', baseRoute: ''},
        // { dir: 'src/features/**/pages', baseRoute: 'features' },
        // { dir: 'src/admin/pages', baseRoute: 'admin' },
      ],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver({
        importStyle: "sass"
      })],
    })
  ],
  server: {
    host: true,
    port: 8077,
    watch: {
      usePolling: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
});

