<script setup>
  import { ref } from 'vue'
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'
  import About from './components/About.vue'

  const cursorOn = ref(true)
</script>

<template>
  <Header @turn-off-cursor="cursorOn=false" @turn-on-cursor="cursorOn=true" />
  <RouterView :cursorOn="cursorOn" />
  <About />
</template>