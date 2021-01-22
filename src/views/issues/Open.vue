<template>
  <main class="main">
    <form @submit.prevent="createIssue" class="form">
      <h2 class="form__title">Create your issue</h2>

      <label class="form__label">
        Issue description:
        <textarea
          v-model="description"
          name="description"
          class="form__input"
          placeholder="I had trouble with..."
        ></textarea>
      </label>

      <button class="form__button">Create issue</button>
      <p class="form__error" v-if="errorMessage">{{ errorMessage }}</p>
    </form>

    <ul class="issues">
      <h3 class="issues__title">Existing issues</h3>
      <li class="issue" :key="issue.id" v-for="issue in openIssues">
        <p class="issue__description">{{ issue.description }}</p>
        <div class="issue__buttons">
          <button @click="doneIssue(issue.id)" class="issue__button isseu__button--done">Complete</button>
          <button @click="openUpdateModal(issue)" class="issue__button issue__button--edit">Edit</button>
          <button @click="trashIssue(issue.id)" class="issue__button issue__button--trash">Delete</button>
        </div>
      </li>
    </ul>

    <section v-if="modal.open" class="modal">
      <form @submit.prevent="updateIssueData" class="form form--modal">
        <button @click="closeUpdateModal" class="form__exit">X</button>
        <h2 class="form__title">Update issue</h2>

        <label class="form__label">
          Current issue description:
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
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Open',
  data() {
    return {
      description: '',
      errorMessage: '',
      modal: {
        open: false,
        id: '',
        description: ''
      }
    };
  },
  methods: {
    ...mapActions(['getIssues', 'newIssue', 'doneIssue', 'updateIssue', 'trashIssue']),
    createIssue() {
      if (this.description) {
        this.removeError();

        this.newIssue(this.description);
        this.description = '';
      } else {
        this.showError();
      }
    },
    markComplete(id) {
      this.doneIssue(id);
    },

    /**
     * Modal methods
     */
    openUpdateModal(issue) {
      this.removeError();

      this.modal = {
        open: !this.open,
        id: issue.id,
        description: issue.description
      };
    },
    closeUpdateModal() {
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
    },

    /**
     * Error handling
     */
    showError() {
      this.removeError();

      this.errorMessage = 'Please fill in the message box.';
    },
    removeError() {
      this.errorMessage = '';
    }
  },
  computed: mapGetters(['openIssues']),
  created() {
    this.getIssues();
  }
};
</script>

<style scoped>
/*------------------------------------*\
  #Form
\*------------------------------------*/

.form {
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: 0 auto 5rem;
}

.form__title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.form__label {
  display: flex;
  flex-direction: column;
}

.form__input {
  font-family: 'Montserrat', sans-serif;
  resize: vertical;
  min-height: 10rem;
  padding: 1.5rem;
  margin: 1rem 0 2rem;
  border-radius: 0.5rem;
}

.form__input:focus {
  border: 1px solid var(--yellow);
  outline: none;
}

.form__error {
  color: red;
  margin-top: 2rem;
}

/*------------------------------------*\
  #Modal
\*------------------------------------*/

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
