<script setup>

</script>

<template>
  <footer>
    <div class="first-part">
      <p style="font-size: 1.8rem"><strong>blog.</strong> by darko nikolic</p>
      <div>
        <a href="https://github.com/dqrk0jeste" target="_blank">github</a><br>
        <a href="https://www.linkedin.com/in/darko-nikolic-99816b296/" target="_blank">linkedin</a><br>
        <a href="https://dqrk0jeste.github.io/portfolio-website/" target="_blank">personal website</a>
      </div>
    </div>
    <div class="second-part">
      <h1>supposedly about page</h1>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background-color: black;
    display: flex;
    flex-direction: row;
    color: var(--main-color);
    padding: 4rem 0;
  }

  .first-part {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    flex-basis: 50%;
    align-items: center;
    font-size: 1.6rem;
    padding: 1rem;
  }

  .second-part {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-basis: 50%;
    font-size: 2rem;
  }

  a {
    color: var(--main-color);
  }
</style>