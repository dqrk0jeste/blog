<script setup>
  import { ref } from 'vue'
  import { useStore } from '@/stores/store.js'
  import BlogPosts from '@/components/BlogPosts.vue'

  const store = useStore()
  const count = ref(10)

  store.headerBackgroundColor = 'var(--main-color)'
  store.headerColor = 'black'
</script>

<template>
  <div class="this">
    <h1>all blog posts</h1>
    <BlogPosts :count="count"/>
    <p @click="count = count + 5">...more posts</p>
  </div>
</template>

<style scoped>
  .this {
    padding: 10rem;
  }

  h1 {
    font-size: 6rem;
  }

  p {
    font-size: 2rem;
    text-decoration: underline black;
    text-align: center;
    margin-top: 4rem;
    cursor: pointer;
  }
</style>