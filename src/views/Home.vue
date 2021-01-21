<template>
  <div>
    <ul>
      <!-- Just a test for vuex here -->
      <li v-bind:key="issue.name" v-for="issue in allIssues">
        <p>{{ issue.name }}</p>
        <p>{{ issue.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: mapGetters(['allIssues'])
};
</script>

<style scoped>
.logo {
  height: 4rem;
}
</style>
