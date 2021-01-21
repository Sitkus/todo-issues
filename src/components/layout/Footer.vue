<template>
  <footer class="footer">
    <p class="footer__content">&#xA9; {{ new Date().getFullYear() }} by Lukas Šitkus. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-gray);
  min-height: 7rem;
  text-align: center;
}
</style>
