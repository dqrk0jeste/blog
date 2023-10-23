<script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'

  const blogPosts = ref(null)
  const error = ref(null)

  const getBlogPosts = async () => {
    error.value = null
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
    <div v-if="error" class="error">
      <h2>there has been an error while fetching data</h2>
      <p @click="getBlogPosts">try again?</p>
    </div>
    <div class="posts-grid" v-else-if="blogPosts" v-for="post in blogPosts" :key="post['_id']">
      <div class="post">
        <h3>{{ post.title }}</h3>
        <h4>by {{ post.user }}</h4>
        <p>{{ post.text }}</p>
        <RouterLink to="/post"><button><strong>view full post</strong></button></RouterLink>
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

  .error > p {
    margin-top: 0rem;
    font-size: 1.5rem;
    text-decoration: underline;
    cursor: pointer;
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
    padding-top: 1rem;
    border: 3px solid black
  }

  .post > h3 {
    padding-left: 1rem;
    font-size: 4rem;
  }
  .post > h4 {
    padding-right: 1rem;
    font-size: 1.5rem;
    text-align: end;
  }

  .post > p {
    padding-left: 1rem;
    font-size: 2rem;
  }

  .post button {
    margin-top: 3rem;
    width: 100%;
    padding: 1rem 2rem;
    background-color: var(--secondary-color);
    border: 0 solid black;
    box-shadow:  0 -2rem 2.5rem var(--secondary-color);
    font-size: 1.8rem;
    cursor: pointer;
  }

  .post > button:hover {
    text-decoration: underline;
  }
</style>