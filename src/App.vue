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
  --light-white: #f9f9f9;
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
  -ms-overflow-style: scrollbar;
  overflow-y: scroll;
}

body {
  color: var(--black);
  font-size: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
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
  background-color: var(--light-white);
  padding: 2rem 3rem;
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
  background: none;
  color: var(--black);
  padding: 0.6rem;
  font-size: 1.5rem;
  margin-right: 0.2rem;
}

.issue__button:last-child {
  margin-right: 0;
}

/*------------------------------------*\
  #Form
\*------------------------------------*/

.form {
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: 0 auto 5rem;
}

.form__title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.form__label {
  display: flex;
  flex-direction: column;
}

.form__input {
  font-family: 'Montserrat', sans-serif;
  resize: vertical;
  min-height: 10rem;
  padding: 1.5rem;
  margin: 1rem 0 2rem;
  border-radius: 0.5rem;
}

.form__input:focus {
  border: 1px solid var(--yellow);
  outline: none;
}

.form__error {
  color: red;
  margin-top: 2rem;
}
</style>
