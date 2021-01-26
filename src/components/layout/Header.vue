<template>
  <header class="header">
    <nav class="nav">
      <router-link class="nav__logo-link" to="/">
        <img class="nav__logo" alt="Logo monogram made of L and S letters combination" src="@/assets/logo.svg" />
      </router-link>

      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__link" to="/">Home</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/issues/open">Open Issues</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/issues/done">Done Issues</router-link>
        </li>
        <li class="nav__item nav__item--last">
          <router-link class="nav__link" to="/issues/trashed">Trashed Issues</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.header {
  background-color: var(--light-gray);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 9rem;
  max-width: 100rem;
  padding: 0 2rem;
  margin: 0 auto;
}

.nav__logo {
  height: 4.5rem;
}

.nav__list {
  display: flex;
}

.nav__item {
  margin-right: 2rem;
}

.nav__item--last {
  margin-right: 0;
}

.nav__link {
  position: relative;
  transition: color 100ms ease-in-out;
}

@media screen and (min-width: 768px) {
  .nav__link:hover {
    color: var(--yellow);
    transition: color 100ms ease-in-out;
  }

  .nav__item {
    margin-right: 3rem;
  }

  .nav__item--last {
    margin-right: 0;
  }
}
</style>
