<script setup>
  import { ref } from 'vue'

  import { useStore } from '@/stores/store.js'

  const store = useStore()
  const username = ref('')
  const password = ref('')

  const message = ref('login to your account')

  const loginUser = async (e) => {
    try {
      const rawResponse = await fetch('https://blog-api-efag.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include'
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value
        })
      })
      if(rawResponse.status === 200) {
        const response = await rawResponse.json()
        store.token = response.token
        document.cookie = `token=${store.token};max-age=${12 * 60 * 60};domain=${location.hostname};path=/`
        message.value = 'success!'
      } else if(rawResponse.status === 401) {
        message.value = 'wrong username or password'
        username.value = ''
        password.value = ''
        setTimeout(() => message.value = 'login to your account', 3000)
      } else {
        message.value = 'server error. please try again'
        setTimeout(() => message.value = 'login to your account', 3000)
      }
    } catch(e) {
      console.log(e)
    }
  }
</script>

<template>
  <div class="this">
    <h1><span @click="store.wannaLogin = false; store.wannaRegister = false">&#60;</span> {{ message }}</h1>
    <form @submit.prevent="loginUser">
      <input v-model="username" class="username" type="text" name="username" placeholder="username" required><br>
      <input v-model="password" class="password" type="password" name="password" placeholder="password" required><br>
      <button type="submit">login</button>
      <p>don't have an account? <span @click="store.wannaLogin = false; store.wannaRegister = true">register</span></p>
    </form>
  </div>
</template>

<style scoped>
 .this {
    padding: 2rem;
    text-align: center;
  }

  h1 {
    font-size: 4.5rem;
  }

  h1 > span {
    cursor: pointer;
    position: relative;
    top: 3px;
  }

  input {
    padding: 0.5rem 1rem;
    font-size: 2rem;
    outline: none;
    border: none;
  }

  .username {
    margin-top: 3rem;
  }

  .password {
    margin-top: 2rem;
  }

  button {
    margin-top: 3.5rem;
    padding: 1rem 3rem;
    font-size: 2.5rem;
    border: none;
    background-color: var(--secondary-color);
    font-weight: bold;
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

  p > span {
    text-decoration: underline var(--main-color);
    cursor: pointer;
  }

</style>