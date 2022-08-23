import { fileURLToPath, URL } from "url"
import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import { createHtmlPlugin } from "vite-plugin-html"
import VueI18n from "@intlify/vite-plugin-vue-i18n"
import { resolve } from "path"
import ViteYaml from "@modyfi/vite-plugin-yaml"

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    plugins: [
      vue(),

      createHtmlPlugin({
        inject: {
          data: {
            title: `${process.env.VITE_APP_TITLE} - ${mode}`
          }
        }
      }),

      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [resolve(__dirname, "locales/**")]
      }),

      ViteYaml()
    ],

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },

    server: {
      port: 5001
    }
  }
})
