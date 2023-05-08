<template>
    <div id="app">
      <Header/>
      <Home/>
      <router-view />
    </div>
  </template>
  
  <script>
  import Home from '../src/pages/Home.vue'
  import Header from './components/Header.vue';

  
  export default {
    name: 'App',
    components: {
      Home,
      Header,
    }
  }
  </script>