import { defineStore } from "pinia"
import { useRouter } from 'vue-router'

const router = useRouter()

export const useStore = defineStore({
  id: 'store',
  state: () => {
    return {
      currentUser: null,
      headerColor: 'black',
      headerBackgroundColor: 'var(--main-color)',
      home: null,
      join: null,
      blog: null,
      about: null,
      wannaRegister: false,
      wannaLogin: false
    }
  }
})