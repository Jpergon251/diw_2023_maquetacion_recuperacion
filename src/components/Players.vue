<template>
  <!-- <section class="player">
    <article class="player-card" v-for="player in team.players" :key="player.name" @click="toggleCard(player)">
      <figure class="player-photo">
        <img :src="player.image" :alt="player.name" class="player-image">
        
      </figure>
    </article>
  </section> -->
  <div class="player-list">
    <figure class="player-card" v-for="player in team.players" :key="player.name">
      <img :src="player.image" :alt="player.name" class="player-image">
      <article class="player-info">
        <h2>Nombre: {{ player.name }}</h2>
        <p>Edad: {{ player.age }}</p>
        <p>Posición: {{ player.position }}</p>
        <p>Finalicación de contrato: {{ player.contractEnds }}</p>
        <p>Winrate {{ Math.round(player.wins/(player.wins + player.defeats) * 100).toFixed(2)}}%</p>
      </article>
    </figure>
    
  </div>
</template>

<script>
import teams from '../api/leagueOfLegends.js';

export default {
  props: ['team'],
  data() {
    return {
      selectedPlayer: null
    };
  },
  methods: {
    toggleCard(player) {
      this.selectedPlayer = this.selectedPlayer === player ? null : player;
    }
  },
  computed: {
    team() {
      return teams.find(team => team.name === this.team);
    }
  }
};
</script>