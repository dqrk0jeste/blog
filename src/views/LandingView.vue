<script setup>
  import { ref, watch } from 'vue'
  import Join from '../components/join.vue'
  import Blog from '../components/Blog.vue'

  const cursor = ref(null);
  const props = defineProps(['cursorOn'])
  
  const updatePosition = (e) => {
    cursor.value.style.left = `${e.clientX}px`
    cursor.value.style.top = `${e.clientY - document.body.getBoundingClientRect().top}px`
    cursor.value.style.transform = `translate(-50%, -50%)`
  }
  const hideCursor = () => {
    cursor.value.style.width = '0'
    cursor.value.style.height = '0'
  }
  const showCursor = () => {
    cursor.value.style.width = '15rem'
    cursor.value.style.height = '15rem'
  }

  watch(() => props.cursorOn, () => {
    if(!props.cursorOn) {
      hideCursor()
    } else {
      showCursor()
    }
  })
</script> 

<template>
  <section class="land" id="home" @mousemove="updatePosition">
    <h1 class="not-selectable">
      welcome to 
      <span class="blog">the blog</span>!
      i am really glad 
      <span class="you">you</span>
      made it here!
    </h1>
    <a class="go-down" href="#join" @mouseenter="hideCursor" @mouseleave="showCursor">
      <button><i class='bx bx-chevrons-down'></i></button>
    </a>
    <div ref="cursor" class="cursor"></div>
  </section>
  <Join @mouse-enter="hideCursor" @mouse-leave="showCursor"/>
  <Blog />
  
</template>

<style scoped>
  .land {
    min-height: 100vh;
    padding: 10rem;
    display: flex;
    align-items: center;
    position: relative;
  }

  .land button {
    position: absolute;
    bottom: 5rem;
    right: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 3px solid black;
    border-radius: 50%;
    font-size: 3rem;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  .land button:hover {
    background-color: black;
    color: var(--main-color);
  }

  .land button:hover .cursor {
      width: 0;
      height: 0;
    }

  h1 {
    font-size: 8rem;
    max-width: 90rem;
    position: relative;
  }
  .blog {
    -webkit-text-stroke: 2px black;
    color: transparent;
  }
  .you {
    font-family: var(--secondary-font);
    font-size: 15rem;
    line-height: 8rem;
  }

  .go-down {
    z-index: 10;
  }

  .cursor {
    position: absolute;
    width: 15rem;
    height: 15rem;
    background-color: var(--main-color);
    border-radius: 50%;
    transition: top 0.1s ease, left 0.1s ease, transform 0.1s ease, width 0.5s ease, height 0.5s ease;
    mix-blend-mode: difference;
  }

</style>