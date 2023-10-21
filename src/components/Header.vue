<script setup>
  import CoolButton from './CoolButton.vue'
  import Logo from './Logo.vue'

  defineEmits(['turn-off-cursor', 'turn-on-cursor'])
</script>

<template>
  <header @mouseenter="$emit('turn-off-cursor')" @mouseleave="$emit('turn-on-cursor')">
    <nav>
      <a href="#home">
        <Logo />
      </a>
      <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#home">join</a></li>
        <li><a href="#home">blog</a></li>
        <li><a href="#home">about</a></li>
      </ul>
    </nav>
    <a href="#join">
      <CoolButton text="join"/>
    </a>
    <a href="#join">
      <CoolButton text="join"/>
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
    background-color: var(--main-color);
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

  a {
    text-decoration: none;
    color: black;
  }
</style>