<template>
    <div class="header">
      <div class="sponsors">
        <p v-for="(sponsor, index) in sponsors" :key="index">{{ sponsor }}</p>
      </div>
      <div class="menu">
        <router-link to="/teams">Equipos</router-link>
        <router-link to="/matches">Partidas</router-link>
        <router-link to="/stats">Estadísticas</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        sponsors: ['Sponsor 1', 'Sponsor 2', 'Sponsor 3']
      }
    }
  }
  </script>
