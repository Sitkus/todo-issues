<template>
  <form @submit.prevent="createIssue" class="create-issue">
    <h2 class="create-issue__title">Create your issue</h2>

    <label class="create-issue__label">
      Issue description:
      <textarea
        v-model="description"
        name="description"
        class="create-issue__description"
        placeholder="I had trouble with..."
      ></textarea>
    </label>

    <button class="create-issue__button">Create issue</button>
  </form>
</template>
