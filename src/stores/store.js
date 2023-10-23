import { defineStore } from "pinia"

export const useStore = defineStore({
  id: 'store',
  state: () => {
    return {
      headerColor: 'black',
      headerBackgroundColor: 'var(--main-color)'
    }
  }
})