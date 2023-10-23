<script setup>
  import CoolButton from './coolbutton.vue'
  import Logo from './Logo.vue'
  import  { useStore } from '@/stores/store.js'

  const store = useStore()

  defineEmits(['turn-off-cursor', 'turn-on-cursor'])
</script>

<template>
  <header :style="{ backgroundColor: store.headerBackgroundColor, color: store.headerColor }" @mouseenter="$emit('turn-off-cursor')" @mouseleave="$emit('turn-on-cursor')">
    <nav>
      <Logo :color="store.headerColor"/>
      <ul>
        <li>home</li>
        <li>join</li>
        <li>blog</li>
        <li>about</li>
      </ul>
    </nav>
    <a href="#login">
      <CoolButton text="login"/>
    </a>
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
</style>