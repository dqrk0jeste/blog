<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'

  import { useStore } from '@/stores/store.js'
  import BlogPosts from './BlogPosts.vue'

  const blog = ref(null)
  const store = useStore()

  onMounted(() => {
    store.blog = blog.value
  })
</script>

<template>
  <section ref="blog" id="blog">
    <div class="title">
      <h1>recent blog posts</h1>
      <RouterLink to="/all-posts"><h2 class="link-to-all">view all</h2></RouterLink>
    </div>
    <BlogPosts />
    <RouterLink to="/all-posts"><h2 class="bottom-link-to-all">view all</h2></RouterLink>
  </section>
</template>


<style scoped>
  section {
    padding: 3rem 10rem 10rem 10rem;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 6rem
  }

  .link-to-all {
    font-size: 3rem;
    color: black;
    text-decoration: underline black;
    margin: 0;
  }

  .bottom-link-to-all {
    margin: 4rem 0 0 0;
    font-size: 2rem;
    color: black;
    text-decoration: underline black;
    text-align: center;
  }

</style>