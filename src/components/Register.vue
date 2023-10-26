<script setup>
  import { ref } from 'vue'

  import { useStore } from '@/stores/store.js'

  const store = useStore()
  const username = ref('')
  const password = ref('')

  const message = ref('create an account')
  
  const registerUser = async (e) => {
    try {
      const response = await fetch('https://blog-api-efag.onrender.com/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
      })
      if(response.status === 201) {
        const loginResponse = await fetch('https://blog-api-efag.onrender.com/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            credentials: 'include',
            withCredentials: true
          },
          body: JSON.stringify({
            username: username.value,
            password: password.value
          })
        })
        if(loginResponse.status === 200) {
          store.loggedIn = true
          console.log('uspesno')
        } else {
          console.log('whoops')
        }

      } else if(response.status === 409) {
        message.value = 'username already taken'
        setTimeout(() => message.value = 'create an account', 3000)
      } else {
        message.value = 'server error. please try again'
        setTimeout(() => message.value = 'create an account', 3000)
      }
    } catch(e) {
      console.log(e)
    }
  }
</script>

<template>
  <div class="this">
    <h1><span @click="store.wannaLogin = false; store.wannaRegister = false">&#60;</span> {{ message }}</h1>
    <form @submit.prevent="registerUser">
      <input v-model="username" type="text" name="username" placeholder="username" required><br>
      <input v-model="password" type="password" name="password" placeholder="password" required><br>
      <button type="submit">register</button>
      <p>already have an account? <span @click="store.wannaLogin = true; store.wannaRegister = false">login</span></p>
    </form>
  </div>
</template>

<style scoped>
 .this {
    padding: 2rem;
    text-align: center;
  }

  h1 {
    font-size: 4rem;
  }

  h1 > span {
    cursor: pointer;
    position: relative;
    top: 3px;
  }

  input {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    outline: none;
    border: none;
  }

  button {
    margin-top: 3rem;
    padding: 0.7rem 2rem;
    font-size: 1.6rem;
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
    font-size: 1.6rem;
  }

  p > span {
    text-decoration: underline var(--main-color);
    cursor: pointer;
  }

</style>