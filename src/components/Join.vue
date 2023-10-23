<script setup>
  import { ref, onMounted, watch } from 'vue'

  const content = ref(null)

  onMounted(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.style.opacity = '1'
        } else {
          entry.target.style.opacity = '0'
        }
      })
    }, {
      threshold: 0.5
    })
    observer.observe(content.value)
  })
  
  defineEmits(['mouse-enter', 'mouse-leave'])
</script>

<template>
  <section class="join" id="join" @mouseenter="$emit('mouse-enter')" @mouseleave="$emit('mouse-leave')">
    <div ref="content" class="content">
      <h2>would you like to create an account?</h2>
      <RouterLink to="/register"><button><strong>register</strong></button></RouterLink>
      <p>already have an account? <RouterLink to="/login">login</RouterLink></p>
      <h3><em>or you can just wonder around...</em></h3>
    </div>
  </section>
  <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 180" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(0, 0, 0, 1)" offset="0%"></stop><stop stop-color="rgba(0, 0, 0, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,162L1440,18L2880,18L4320,18L5760,126L7200,0L8640,18L10080,162L11520,0L12960,36L14400,90L15840,126L17280,126L18720,0L20160,90L21600,90L23040,90L24480,72L25920,144L27360,0L28800,108L30240,72L31680,18L33120,162L34560,18L34560,180L33120,180L31680,180L30240,180L28800,180L27360,180L25920,180L24480,180L23040,180L21600,180L20160,180L18720,180L17280,180L15840,180L14400,180L12960,180L11520,180L10080,180L8640,180L7200,180L5760,180L4320,180L2880,180L1440,180L0,180Z"></path></svg>
</template>

<style scoped>
  .join {
    position: relative;
    z-index: 20;
    background-color: black;
    color: var(--main-color);
    min-height: 100vh;
  }

  .content {
    width: 100%;
    padding: 10rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 3s ease
  }

  h2 {
    font-size: 4rem;
  }

  button {
    margin-top: 3rem;
    font-size: 2.5rem;
    padding: 1rem 3rem;
    background-color: var(--secondary-color);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: white;
  }

  p {
    margin-top: 1rem;
    font-size: 2rem;
  }

  a {
    color: var(--main-color)
  }

  h3 {
    margin-top: 10rem;
    font-size: 4rem;
  }
</style>