<template>
  <main class="main">
    <ul class="issues">
      <h3 class="issues__title">Trashed issues</h3>
      <li class="issue" :key="issue.id" v-for="issue in trashedIssues">
        <p class="issue__description">{{ issue.description }}</p>
        <div class="issue__buttons">
          <input class="issue__checkbox" type="checkbox" name="done" v-bind:checked="issue.done" />
          <button class="issue__button issue__button--trash">X</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Trashed',
  computed: mapGetters(['trashedIssues'])
};
</script>
