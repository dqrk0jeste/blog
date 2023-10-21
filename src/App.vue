<script setup>
  import { ref } from 'vue'
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'

  const header = ref(null)
  const cursorOn = ref(true)
</script>

<template>
  <Header ref="header" @turn-off-cursor="cursorOn=false" @turn-on-cursor="cursorOn=true"/>
  <RouterView :cursorOn="cursorOn"/>
</template>