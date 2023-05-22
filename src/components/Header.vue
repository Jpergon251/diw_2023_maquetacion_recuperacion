<template>
    <header class="header">
      <figure class="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/800px-League_of_Legends_2019_vector.svg.png" alt="Logo"></figure>
      
      <section class="sponsor-group">
        <span class="sponsor-thanks">Gracias por patrocinarnos</span>
        <a class="sponsor-image"></a>
      </section>
      
      <div class="menu-icon" @click="toggleMenu">
          <i class="fas fa-bars"></i>
      </div>

      <nav class="menu" :class="{ active: isActive }">
        

        <router-link to="/" class="link">Inicio</router-link>
        <router-link to="/teams" class="link">Equipos</router-link>
        <router-link to="/matches" class="link">Partidas</router-link>
        
      </nav>

    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isActive = !this.isActive;
      },
    },
  };
  </script>