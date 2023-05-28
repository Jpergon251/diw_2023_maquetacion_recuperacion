
<template>
  <ul class="player-list">
    <li v-for="player in team.players">
    <figure
      :class="{
        'player-card': true,
        'coach': player.position === 'Coach'
      }"
      :key="player.name"
      @click="toggleActivePlayer(player.name)"
      >
      <img :src="player.image" :alt="player.name" class="player-image">
      <h2 class="player-name">{{ player.name }}</h2>
    </figure>
    <article class="player-info" :class="{ active: isActive === true && selectedPlayer === player.name }">  
        <p>Edad: {{ player.age }}</p>
        <p>Posición: {{ player.position }}</p>
        <p>Fin de contrato: {{ player.contractEnds }}</p>
        <p>Winrate: {{ Math.round(player.wins / (player.wins + player.defeats) * 100).toFixed(2) }}%</p>
      </article>
  </li>
  </ul>
</template>

<script>
import teams from '../api/leagueOfLegends.js';

export default {
  props: ['team'],
  data() {
    return {
      isActive: true,
      selectedPlayer: null,
    };
  },
  methods: {
    toggleActivePlayer(player) {
      
      if (this.selectedPlayer != player || this.isActive == false){
        this.selectedPlayer = player
        this.isActive = true
      }else{
        this.isActive = false
      }
    }
    },
  computed: {
    team() {
      return teams.find(team => team.name === this.team);
    }
  }
};
</script>