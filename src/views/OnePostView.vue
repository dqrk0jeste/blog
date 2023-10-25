<script setup>
  import { useRoute } from 'vue-router'
  import { ref, onMounted } from 'vue'

  import { useStore } from '@/stores/store.js'

  const route = useRoute()
  const store = useStore()

  const post = ref(null)
  const error = ref(null)

  onMounted(() => {
    store.headerColor = 'black'
    store.headerBackgroundColor = 'var(--main-color)'
  })

  const getPost = async (id) => {
    try {
      const postRes = await fetch(`https://blog-api-efag.onrender.com/posts/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      post.value = await postRes.json()
    } catch(e) {
      error.value = e
      console.log(e)
    }
  }

  const postId = route.params.id
  getPost(postId)
</script>

<template>
  <div class="this">
    <div v-if="error" class="error">
      <h2>there has been an error while fetching data</h2>
      <p @click="">try again?</p>
    </div>
    <div v-else-if="post" class="post">
      <div class="title">
        <h1>{{ post.title }}</h1>
        <h2>by @{{ post.user }}</h2>
      </div>
      <p>{{ post.text }}</p>
    </div>
    <h2 v-else>Loading...</h2>
  </div>
</template>

<style scoped>
  .this {
    padding: 10rem;
  }

  .error > h2 {
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

  .post {
    width: 100%;
    max-width: 100rem;
    padding: 1rem;
    margin: 0 auto;
  }

  .title > h1 {
    font-size: 4rem;
  }

  .title > h2 {
    font-size: 2rem;
  }

  .title {
    padding-bottom: 5rem;
  }

  .post > p {
    padding-top: 5rem;
    border-top: 2px solid black;
    font-size: 2rem;
  }
</style>