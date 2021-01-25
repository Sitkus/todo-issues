<template>
  <main class="main">
    <AddIssue />

    <ul class="issues">
      <h3 class="issues__title">Existing issues</h3>

      <li class="issue" :key="issue.id" v-for="issue in openIssues">
        <p class="issue__description">{{ issue.description }}</p>

        <div class="issue__buttons">
          <button @click="doneIssue(issue.id)" class="issue__button isseu__button--done">
            Mark done
          </button>
          <button @click="openModal(issue)" v-on:click="removeError" class="issue__button issue__button--edit">
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
import { AddIssue, Modal } from '@/components/common';

export default {
  name: 'Open',
  components: {
    AddIssue,
    Modal
  },
  methods: mapActions([
    'getIssues',
    'doneIssue',
    'updateIssue',
    'trashIssue',
    'openModal',
    'closeModal',
    'showError',
    'removeError'
  ]),
  computed: mapGetters(['openIssues', 'modal', 'errorMessage']),
  created() {
    this.closeModal();
    this.getIssues();
  }
};
</script>
