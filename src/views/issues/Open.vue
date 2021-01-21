<template>
  <main class="main">
    <form class="create-issue">
      <h2 class="create-issue__title">Create your issue</h2>

      <label class="create-issue__label">
        Issue description:
        <textarea name="description" class="create-issue__description" placeholder="I had trouble with..."></textarea>
      </label>

      <button class="create-issue__button">Create issue</button>
    </form>

    <ul class="issues">
      <h3 class="issues__title">Existing issues</h3>
      <li class="issues__item" :key="issue.id" v-for="issue in openIssues">{{ issue.description }}</li>
    </ul>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Open',
  computed: mapGetters(['openIssues'])
};
</script>

<style scoped>
/*------------------------------------*\
  #Create issue form
\*------------------------------------*/

.create-issue {
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: 0 auto;
}

.create-issue__title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.create-issue__label {
  display: flex;
  flex-direction: column;
}

.create-issue__description {
  font-family: 'Montserrat', sans-serif;
  resize: vertical;
  min-height: 10rem;
  padding: 1.5rem;
  margin: 1rem 0 2rem;
  border-radius: 0.5rem;
}

.create-issue__description:focus {
  border: 1px solid var(--yellow);
  outline: none;
}

/*------------------------------------*\
  #Issues list
\*------------------------------------*/

.issues {
  max-width: 50rem;
  margin: 5rem auto 0;
}

.issues__title {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
