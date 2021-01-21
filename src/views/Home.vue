<template>
  <main class="main">
    <article class="hero">
      <h1 class="hero__title">What's your issue today?</h1>
      <p class="hero__description">This is a small application for issues storing, reviewing and solving.</p>
      <button v-on:click="redirectToOpenIssues" class="hero__button">Open issues</button>
    </article>
  </main>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    redirectToOpenIssues() {
      this.$router.push('/issues/open');
    }
  }
};
</script>

<style scoped>
.hero__title {
  margin-bottom: 1rem;
}

.hero__description {
  margin-bottom: 3rem;
}
</style>
