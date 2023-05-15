<template>
    <header class="header">
      <figure class="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/800px-League_of_Legends_2019_vector.svg.png" alt="Logo"></figure>
      
      <ul class="sponsor-list">
      <span class="sponsor-thanks">Gracias por patrocinarnos</span>
      <li class="sponsor-item" v-for="number in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]">
        <img src='../assets/images/sponsors/sponsor1.png' alt="">
      </li>
      </ul>
      
      <nav class="menu">
        <router-link to="/teams"><a>Equipos</a> </router-link>
        <router-link to="/matches">Partidas</router-link>
        <router-link to="/stats">Estadísticas</router-link>
      </nav>

    </header>
  </template>
  
  <script>
  export default {
    methods: {
      getPath(num){
        return '../assets/images/sponsors/sponsor' + num + '.png'
      }
    }
  };
  </script>
