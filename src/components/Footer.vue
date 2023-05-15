<template>
    <footer class="footer">
        <h1>Este es el footer</h1>
      <ul class="sponsors">
        <li v-for="(sponsor, index) in sponsors" :key="index">
          <img :src="sponsor" alt="sponsor">
        </li>
      </ul>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sponsors: [],
      };
    },
    mounted() {
      this.loadSponsors();
    },
    methods: {
      loadSponsors() {
        const images = require.context('@/assets/images/sponsors/', false, /\.(png|jpe?g|gif|svg)$/);
        this.sponsors = images.keys().map(images);
      },
    },
  };
  </script>