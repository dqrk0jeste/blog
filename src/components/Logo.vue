<script setup>
  const props = defineProps(['color'])
</script>

<template>
  <span ref="span" :style="{ '-webkit-text-stroke': `1px ${props.color}`}">blog.</span>
</template>

<style scoped>
  span {
    font-size: 3rem;
    font-weight: 700;
    transition: color 0.5s ease-in;
    cursor: pointer;
    color: transparent;
  }

  span:hover {
    color: black;
  }
</style>