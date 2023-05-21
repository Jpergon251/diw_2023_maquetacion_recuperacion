<template>
    <div id="app">
      <Header/>
      <router-view/>
      <Footer/>
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import { router } from './router/index.js'; // Importar el enrutador desde el archivo index.js

  
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    router
  }
  </script>