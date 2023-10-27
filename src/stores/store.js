import { defineStore } from "pinia"
import { useRouter } from 'vue-router'

const router = useRouter()

export const useStore = defineStore({
  id: 'store',
  state: () => {
    return {
      token: null,
      user: null,
      headerColor: 'black',
      headerBackgroundColor: 'var(--main-color)',
      home: null,
      join: null,
      blog: null,
      about: null,
      wannaRegister: false,
      wannaLogin: false
    }
  },
  getters: {
    loggedIn: (state) => {
      if(state.token) {
        return true 
      }
      return false
    }
  }
})