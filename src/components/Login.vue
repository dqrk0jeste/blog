<script setup>
  import { useStore } from '@/stores/store.js'

  const store = useStore()
</script>

<template>
  <h1>login to your account</h1>
  <form action="https://blog-api-efag.onrender.com/users/login" method="post">
    <button class="back" @click="store.wannaLogin = false; store.wannaRegister = false"><i class='bx bx-chevrons-left'></i></button>
    <label for="username">username <input type="text" name="username" required></label><br>
    <label for="password">password</label><br>
    <input type="password" name="password" required><br>
    <button type="submit">register</button>
    <p>don't have an account? <span @click="store.wannaLogin = false; store.wannaRegister = true">register</span></p>
  </form>
</template>