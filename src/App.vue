<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterView } from 'vue-router'

  import { useStore } from './stores/store'
  import Header from './components/Header.vue'
  import About from './components/About.vue'

  const store = useStore()

  store.$subscribe(async (mutation, state) => {
    if(state.token) {
      const rawResponse = await fetch('https://blog-api-efag.onrender.com/users/current', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include',
          authorization: state.token
        }
      })
      if(rawResponse.status === 200) {
        const response = await rawResponse.json()
        store.user = response.user
      } else {
        console.log('server error')
      }
    }
  })

  onMounted(() => {
    if(document.cookie !== '') {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]
      store.token = token
    }
  })

  const cursorOn = ref(true)
</script>

<template>
  <Header @turn-off-cursor="cursorOn=false" @turn-on-cursor="cursorOn=true" />
  <RouterView :cursorOn="cursorOn" />
  <About />
</template>