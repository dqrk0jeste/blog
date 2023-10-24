import { defineStore } from "pinia"
import { useRouter } from 'vue-router'

const router = useRouter()

export const useStore = defineStore({
  id: 'store',
  state: () => {
    return {
      headerColor: 'black',
      headerBackgroundColor: 'var(--main-color)',
      home: null,
      join: null,
      blog: null,
      about: null
    }
  },
  actions: {
    goTo: (el, currentRoute) => {
      if(currentRoute.path === '/') {
        el.scrollIntoView()
      } else {
        router.push('/')
      }
    }
  }
})