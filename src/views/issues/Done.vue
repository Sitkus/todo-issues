<template>
  <main class="main">
    <ul class="issues">
      <h3 class="issues__title">Existing, done issues</h3>
      <li class="issue" :key="issue.id" v-for="issue in doneIssues">
        <p class="issue__description">{{ issue.description }}</p>
        <div class="issue__buttons">
          <input class="issue__checkbox" type="checkbox" name="done" checked="checked" />
          <button class="issue__button issue__button--trash">X</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Done',
  computed: mapGetters(['doneIssues'])
};
</script>
