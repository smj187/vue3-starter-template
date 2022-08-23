import { defineStore } from "pinia"

type State = {
  isAsideOpen: boolean
}

export const useAppStore = defineStore("app-store", {
  state: (): State => ({ isAsideOpen: false }),
  getters: {},
  actions: {
    toggleAsideOpen() {
      this.isAsideOpen = !this.isAsideOpen
    }
  }
})
