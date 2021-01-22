<template>
  <main class="main">
    <AddIssue v-bind:error-message="errorMessage" v-bind:show-error="showError" v-bind:remove-error="removeError" />

    <ul class="issues">
      <h3 class="issues__title">Existing issues</h3>
      <li class="issue" :key="issue.id" v-for="issue in openIssues">
        <p class="issue__description">{{ issue.description }}</p>
        <div class="issue__buttons">
          <button @click="doneIssue(issue.id)" class="issue__button isseu__button--done">Done</button>
          <button @click="openModal(issue)" class="issue__button issue__button--edit">Edit</button>
          <button @click="trashIssue(issue.id)" class="issue__button issue__button--trash">Trash</button>
        </div>
      </li>
    </ul>

    <Modal
      v-bind:modal="modal"
      v-bind:error-message="errorMessage"
      v-bind:show-error="showError"
      v-bind:remove-error="removeError"
    />
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { AddIssue, Modal } from '@/components/common';

export default {
  name: 'Open',
  components: {
    AddIssue,
    Modal
  },
  data() {
    return {
      errorMessage: '',
      modal: {
        open: false,
        id: '',
        description: ''
      }
    };
  },
  methods: {
    ...mapActions(['getIssues', 'doneIssue', 'updateIssue', 'trashIssue']),
    markComplete(id) {
      this.doneIssue(id);
    },
    openModal(issue) {
      this.removeError();

      this.modal = {
        open: !this.open,
        id: issue.id,
        description: issue.description
      };
    },
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
