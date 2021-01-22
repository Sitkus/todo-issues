<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from './components/layout';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
:root {
  --black: #161616;
  --light-gray: #f1f1f1;
  --yellow: goldenrod;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  background-color: white;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

body {
  color: var(--black);
  font-size: 1.5rem;
  overflow-x: hidden;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}

/*------------------------------------*\
  #Main
\*------------------------------------*/

.main {
  min-height: calc(100vh - 16rem);
  max-width: 100rem;
  padding: 5rem 2rem;
  margin: 0 auto;
}

/*------------------------------------*\
  #Buttons
\*------------------------------------*/

button {
  font-size: 1.6rem;
  background-color: var(--yellow);
  color: white;
  padding: 1.5rem 2rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  transform: scale(1);
  transition: transform 250ms ease-in-out;
}

button:active {
  transform: scale(0.95);
  transition: transform 150ms ease-in-out;
}

/*------------------------------------*\
  #Router link active
\*------------------------------------*/

.router-link-exact-active {
  color: var(--yellow);
}

/*------------------------------------*\
  #Issues list
\*------------------------------------*/

.issues {
  max-width: 50rem;
  margin: 0 auto 0;
}

.issues__title {
  text-align: center;
  margin-bottom: 2rem;
}

.issue {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.issue:last-child {
  margin-bottom: 0;
}

.issue__description {
  flex: 1;
}

.issue__buttons {
  margin-left: 5rem;
}

.issue__button {
  padding: 0.6rem;
  font-size: 1.4rem;
}

.issue__checkbox,
.issue__button--edit {
  margin-right: 1rem;
  cursor: pointer;
}
</style>
