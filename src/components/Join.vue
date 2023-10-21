<script setup>
  defineEmits(['mouse-enter', 'mouse-leave'])
</script>

<template>
  <div class="join" id="join" @mouseenter="$emit('mouse-enter')" @mouseleave="$emit('mouse-leave')">
    <h2>Would you like to create an account?</h2>
    <button>Register</button>
    <p>Already have an account? Log in</p>
    <h3>I will just wonder around...</h3>
  </div>
</template>

<style scoped>
  .join {
    position: relative;
    z-index: 20;
    width: 100%;
    text-align: center;
    padding: 10rem;
  }
</style>