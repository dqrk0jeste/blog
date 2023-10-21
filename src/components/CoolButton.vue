<script setup>
  const { text } = defineProps(['text'])
</script>

<template>
  <button><strong>{{ text }}</strong></button>
</template>

<style scoped>
  button {
    padding: 0.8rem 3rem;
    border: 4px solid black;
    box-shadow: 4px 4px 0 black;
    cursor: pointer;
    background-color: var(--secondary-color);
    transition: all 0.1s ease-in-out;
    font-size: 2rem;
  }
  button:hover {
    background-color: rgb(255, 255, 255);
  }
  button:active {
    box-shadow: none;
    transform: translate(4px, 4px);
  }
</style>