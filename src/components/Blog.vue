<script setup>
  import { ref, onErrorCaptured } from 'vue'

  const blogPosts = ref(null)
  const error = ref(null)

  const getBlogPosts = async () => {
      try {
        const blogPostsRes = await fetch('http://localhost:3500/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        blogPosts.value = await blogPostsRes.json()
      } catch(e) {
        error.value = e
      }
  }

  getBlogPosts()
</script>

<template>
  <section id="blog">
    <h1>recent blog posts</h1>
    <h2 v-if="error">there has been an error while fetching data</h2>
    <div class="posts-grid" v-else-if="blogPosts" v-for="post in blogPosts" :key="post['_id']">
      <div class="post">
        <h3>{{ post.title }}</h3>
        <h4>by {{ post.user }}</h4>
        <p>{{ post.text }}</p>
      </div>
    </div>
    <h2 v-else>Loading...</h2>
  </section>
</template>


<style scoped>
  section {
    padding: 3rem 10rem 10rem 10rem;
  }

  h1 {
    font-size: 6rem
  }

  h2 {
    margin-top: 5rem;
    font-size: 2rem;
    text-align: center;
  }

  .posts-grid {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 1rem
  }

  .post {
    width: 100%;
    padding: 1rem;
    border: 3px solid black
  }

  .post > h3 {
    font-size: 4rem;
  }
  .post > h4 {
    font-size: 1.5rem;
    text-align: end;
  }

  .post > p {
    font-size: 2rem;
  }
</style>