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
  },
  actions: {
    getCookie(name) {
      return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1]
    },
    deleteCookie(name, path, domain) {
      if(this.getCookie(name)) {
        document.cookie = name + '=' +
          ((path) ? ';Path=' + path : '') +
          ((domain) ? ';Domain=' + domain : '') +
          ';Expires=Thu, 01 Jan 1970 00:00:01 GMT';
      }
    }
  }
})