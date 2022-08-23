import { createApp } from "vue"
import App from "./App.vue"
import "./assets/tailwind.css"
import router from "./router"
import { createPinia } from "pinia"
import { createI18n } from "vue-i18n"
import enUS from "../locales/en-US.json"
import deDE from "../locales/de-DE.json"

type MessageSchema = typeof enUS

const i18n = createI18n<[MessageSchema], "en-US" | "de-DE">({
  locale: "en-US",
  messages: {
    "en-US": enUS,
    "de-DE": deDE
  }
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(i18n)
app.mount("#app")
