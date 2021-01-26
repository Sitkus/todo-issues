<template>
  <form @submit.prevent="createIssue" class="form">
    <h2 class="form__title">Create your issue</h2>

    <label class="form__label">
      Issue description:
      <textarea
        v-model="description"
        name="description"
        class="form__input"
        placeholder="I had an issue with..."
      ></textarea>
    </label>

    <button type="submit" class="form__button">Create issue</button>

    <p class="form__error" v-if="errorMessage">{{ errorMessage }}</p>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddIssue',
  data() {
    return {
      description: ''
    };
  },
  methods: {
    ...mapActions(['newIssue', 'showError', 'removeError']),
    createIssue() {
      if (this.description) {
        this.removeError();

        this.newIssue(this.description);

        this.description = '';
      } else {
        this.showError();
      }
    }
  },
  computed: mapGetters(['errorMessage'])
};
</script>
