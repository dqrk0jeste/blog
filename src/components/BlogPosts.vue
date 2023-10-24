<script setup>
  import { ref, watch } from 'vue'
  import { RouterLink } from 'vue-router'

  const blogPosts = ref(null)
  const error = ref(null)
  const props = defineProps(['count'])

  watch(() => props.count, () => {
    getBlogPosts(1, props.count)
  })

  const getBlogPosts = async (from, count) => {
    error.value = null
      try {
        const blogPostsRes = await fetch(`https://blog-api-efag.onrender.com/posts/range?from=${from}&count=${count}`, {
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

  getBlogPosts(1, 10)
</script>

<template>
  <div v-if="error" class="error">
    <h2>there has been an error while fetching data</h2>
    <p @click="getBlogPosts">try again?</p>
  </div>
  <div class="posts-grid" v-else-if="blogPosts" >
    <div class="post" v-for="post in blogPosts" :key="post['_id']">
      <h3>{{ post.title }}</h3>
      <h4>by {{ post.user }}</h4>
      <p>{{ post.text }}</p>
      <RouterLink to="/post"><button><strong>view full post</strong></button></RouterLink>
    </div>
  </div>
  <h2 v-else>Loading...</h2>
</template>

<style scoped>
  h1 {
    font-size: 6rem
  }

  .link-to-all {
    font-size: 3rem;
    color: black;
    text-decoration: underline black;
    margin: 0;
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
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .post {
    width: 100%;
    padding: 1rem;
    border: 3px solid black;
    max-height: 100rem;
    overflow: hidden;
    position: relative;
    height: fit-content;
    padding-bottom: 8rem;
  }

  .post > h3 {
    padding-left: 1rem;
    font-size: 2.75rem;
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
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    background-color: var(--secondary-color);
    border: 0 solid black;
    box-shadow: 0 -2rem 2.5rem var(--secondary-color);
    font-size: 1.8rem;
    cursor: pointer;
  }

  .post > button:hover {
    text-decoration: underline;
  }
</style>
