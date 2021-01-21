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
/*------------------------------------*\
  #Default settings
\*------------------------------------*/

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
  color: #161616;
  font-size: 15px;
  overflow-x: hidden;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
