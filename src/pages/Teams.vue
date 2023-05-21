<template>
  <div class="team-container">
    <h1 class="team-heading">EQUIPOS</h1>
    <section class="team-images">
      <router-link :to="`/teams/${imagePath.name}`" v-for="imagePath in imagePaths" :key="imagePath.src">
        <figure class="team-figure">
          <img :src="imagePath.src" :alt="imagePath.name" class="team-image">
          <figcaption class="team-caption">{{ imagePath.name }}</figcaption>
        </figure>
      </router-link>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      imagePaths: [
        { src: require('../assets/images/teams/team_barça.png'), name: 'Barça' },
        { src: require('../assets/images/teams/team_bison.png'), name: 'Bison' },
        { src: require('../assets/images/teams/team_fnatic.png'), name: 'Fnatic' },
        { src: require('../assets/images/teams/team_giants.png'), name: 'Giants' },
        { src: require('../assets/images/teams/team_guasones.png'), name: 'Guasones' },
        { src: require('../assets/images/teams/team_heretics.png'), name: 'Heretics' },
        { src: require('../assets/images/teams/team_KOI.png'), name: 'KOI' },
        { src: require('../assets/images/teams/team_movistar_riders.png'), name: 'Movistar Riders' },
        { src: require('../assets/images/teams/team_rebels.png'), name: 'Rebels' },
        { src: require('../assets/images/teams/team_UCAM.png'), name: 'UCAM' },
      ]
    };
  }
};
</script>

