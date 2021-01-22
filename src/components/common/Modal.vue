<template>
  <section v-if="modal.open" class="modal">
    <form @submit.prevent="updateIssueData" class="form form--modal">
      <button type="button" @click="closeModal" class="form__exit">
        <font-awesome-icon icon="times-circle" />
      </button>
      <h2 class="form__title">Update issue</h2>

      <label class="form__label">
        Issue description:
        <textarea
          v-model="modal.description"
          name="modalDescription"
          class="form__input"
          placeholder="I had trouble with..."
        ></textarea>
      </label>

      <button class="form__button">Update issue</button>
      <p class="form__error" v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Modal',
  props: {
    modal: Object,
    errorMessage: String,
    showError: Function,
    removeError: Function
  },
  methods: {
    ...mapActions(['updateIssue']),
    closeModal() {
      this.modal.open = !this.modal.open;
    },
    updateIssueData() {
      if (this.modal.description) {
        this.removeError();

        this.updateIssue(this.modal);
        this.modal.open = !this.modal.open;
      } else {
        this.showError();
      }
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
}

.form--modal {
  position: relative;
  padding: 8rem 5rem;
  width: 50rem;
  background-color: var(--light-gray);
}

.form__exit {
  position: absolute;
  right: 2.5rem;
  top: 2.5rem;
  padding: 1rem;
  font-size: 1.4rem;
  background: none;
  color: var(--black);
}
</style>
