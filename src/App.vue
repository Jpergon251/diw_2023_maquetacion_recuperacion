<template>
    <div id="app">
      <Header/>
      <Home/>
      <Footer/>
      <router-view />
    </div>
  </template>
  
  <script>
  import Home from '../src/pages/Home.vue'
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    name: 'App',
    components: {
      Home,
      Header,
      Footer
    }
  }
  </script>