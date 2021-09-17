import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const config: UserConfig = {
  alias: [
    {
      find: `@`,
      replacement: resolve(__dirname, `src`),
    },
  ],
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, `src/index.ts`),
      name: `PrimerVuePoc`,
    },
    rollupOptions: {
      external: [`vue`],
      output: {
        globals: {
          vue: `Vue`,
        },
      },
    },
  },
}

export default config
