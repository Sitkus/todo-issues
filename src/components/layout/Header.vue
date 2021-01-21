<template>
  <header>
    <img class="logo" alt="Logo monogram made of L and S letters combination" src="@/assets/logo.svg" />
    <router-link to="/">Home</router-link> | <router-link to="/issues/open">Open Issues</router-link> |
    <router-link to="/issues/done">Done Issues</router-link> |
    <router-link to="/issues/trashed">Trashed Issues</router-link>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.logo {
  height: 4rem;
}
</style>
