<script setup>
  import { useRoute, useRouter } from 'vue-router' 

  import CoolButton from './CoolButton.vue'
  import Logo from './Logo.vue'
  import  { useStore } from '@/stores/store.js'

  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  const goTo = (el) => {
      if(el === store.about || route.path === '/') {
        el.scrollIntoView()
      } else {
        router.push('/')
      }
    }

  defineEmits(['turn-off-cursor', 'turn-on-cursor'])

  const handleClick = () => {
    if(!store.loggedIn) {
      store.join.scrollIntoView()
      store.wannaLogin = true
    } else {
      router.push('/create')
    }
  }

  const logout = () => {
    store.deleteCookie('token', '/blog', location.host)
    store.token = null
    store.user = null
    store.wannaLogin = false
    store.wannaRegister = false
    router.push('/')
  }
</script>

<template>
  <header :style="{ backgroundColor: store.headerBackgroundColor, color: store.headerColor }" @mouseenter="$emit('turn-off-cursor')" @mouseleave="$emit('turn-on-cursor')">
    <nav>
      <Logo @click="goTo(store.home, route)" :color="store.headerColor"/>
      <ul>
        <li @click="goTo(store.home)">home</li>
        <li v-if="route.path === '/'" @click="goTo(store.join)">create</li>
        <li v-if="route.path === '/'" @click="goTo(store.blog)">blog</li>
        <li @click="goTo(store.about)">about</li>
      </ul>
    </nav>
    <div class="buttons">
      <u v-if="store.loggedIn" @click="logout">logout?</u>
      <CoolButton v-if="route.path !== '/create'" @click="handleClick" :text="store.loggedIn ? 'create' : 'login'"/>
    </div>
  </header>
</template>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    font-size: 2rem;
    z-index: 100;
    transition: all 0.3s ease;
  }

  nav {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5rem;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  li {
    cursor: pointer;
  }

  .buttons u {
    margin-right: 1rem;
    cursor: pointer;
  }
</style>