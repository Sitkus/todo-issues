<template>
  <main class="main">
    <ul class="issues">
      <h3 class="issues__title">Trashed issues</h3>
      <li class="issue" :key="issue.id" v-for="issue in trashedIssues">
        <p class="issue__description">{{ issue.description }}</p>
        <div class="issue__buttons">
          <button @click="doneIssue(issue.id)" class="issue__button isseu__button--done">
            {{ issue.done ? 'Mark not done' : 'Mark done' }}
          </button>
          <button @click="openModal(issue)" class="issue__button issue__button--edit">
            <font-awesome-icon icon="edit" />
          </button>
          <button @click="trashIssue(issue.id)" class="issue__button issue__button--trash">
            <font-awesome-icon icon="recycle" />
          </button>
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
import { Modal } from '@/components/common';

export default {
  name: 'Trashed',
  components: {
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
    ...mapActions(['getIssues', 'doneIssue', 'trashIssue']),
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
  computed: mapGetters(['trashedIssues']),
  created() {
    this.getIssues();
  }
};
</script>
