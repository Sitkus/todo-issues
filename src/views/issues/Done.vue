<template>
  <main class="main">
    <ul class="issues">
      <h3 class="issues__title">Existing, done issues</h3>
      <li class="issue" :key="issue.id" v-for="issue in doneIssues">
        <p class="issue__description">{{ issue.description }}</p>
        <div class="issue__buttons">
          <button @click="doneIssue(issue.id)" class="issue__button isseu__button--done">
            Mark not done
          </button>
          <button @click="openModal(issue)" class="issue__button issue__button--edit">
            <font-awesome-icon icon="edit" />
          </button>
          <button @click="trashIssue(issue.id)" class="issue__button issue__button--trash">
            <font-awesome-icon icon="trash" />
          </button>
        </div>
      </li>
    </ul>

    <Modal />
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Modal } from '@/components/common';

export default {
  name: 'Done',
  components: {
    Modal
  },
  methods: mapActions(['getIssues', 'doneIssue', 'trashIssue', 'openModal', 'closeModal', 'showError', 'removeError']),
  computed: mapGetters(['doneIssues', 'modal', 'errorMessage']),
  created() {
    this.closeModal();
    this.getIssues();
  }
};
</script>
