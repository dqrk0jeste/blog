<script setup>
  import { onMounted, ref } from 'vue'

  import { useStore } from '../stores/store'
  import CoolButton from '../components/CoolButton.vue';
  import router from '../routers/router';

  const store = useStore()

  const title = ref('')
  const desc = ref('')
  const text = ref('')
  const h1 = ref(null)
  const titleArea = ref(null)
  const descArea = ref(null)
  const textArea = ref(null)
  const message = ref('create new blog post')

  onMounted(() => {
    store.headerColor = 'black'
    store.headerBackgroundColor = 'var(--main-color)'
  })

  const resize = (area) => {
    if(area.offsetHeight < area.scrollHeight) {
      area.style.height = (area.scrollHeight) + 'px'
    }
  }

  const createPost = async () => {
    try {
      const rawResponse = await fetch('https://blog-api-efag.onrender.com/posts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include',
          authorization: store.token
        },
        body: JSON.stringify({
          title: title.value.trim() !== '' ? title.value.trim() : 'untitled',
          desc: desc.value.trim() !== '' ? desc.value.trim() : 'no description',
          text: text.value.trim() !== '' ? text.value.trim() : 'blank'
        })
      })
      if(rawResponse.status === 201) {
        message.value = 'success! redirecting...'
        h1.value.scrollIntoView()
        setTimeout(() => router.push('/'), 2000)
      } else if(rawResponse.status === 409) {
        const response = await rawResponse.json()
        message.value = response.message
        h1.value.scrollIntoView()
      } else {
        h1.value.scrollIntoView()
        message.value = 'server error. please try again'
      }
    } catch(e) {
      console.log(e)
    }
  }
</script>

<template>
  <div class="this">
    <h1 ref="h1"><span @click="router.go(-1)">&#60;</span>{{ message }}</h1>
    <form @submit.prevent="createPost">
      <label for="title">title of your blog post</label><br>
      <textarea ref="titleArea" v-model="title" class="title" name="title" @input="resize(titleArea)"></textarea><br>
      <label for="desc">short description of you blog post</label><br>
      <textarea ref="descArea" v-model="desc" class="desc" name="title" @input="resize(descArea)"></textarea><br>
      <label for="text">write a blog post</label><br>
      <textarea ref="textArea" v-model="text" class="text" name="title" @input="resize(textArea)"></textarea><br>
      <CoolButton type="submit" text="create"/>
    </form>
  </div>
</template>

<style scoped>
  .this {
    padding: 10rem;
    text-align: center;
    max-width: 100rem;
    margin: 0 auto
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 5rem;
  }

  h1 > span {
    cursor: pointer;
    position: relative;
    top: 3px;
  }

  label {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  textarea {
    max-width: 80rem;
    border: 2px solid black;
    outline: none;
    padding: 1rem;
    font-size: 2rem;
    overflow: hidden;
    width: 100%;
    margin-bottom: 2rem;
  }

  .title {
    height: 5rem;
  }

  .desc {
    height: 10rem;
  }

  .text {
    height: 30rem;
  }

</style>