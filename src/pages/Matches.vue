<template>
  <div class="matches">
    <ul class="matches-list">
      <li v-for="match in matches" :key="match.id" class="match">
        <h3 class="match-date">{{ match.date }}</h3>
        <section class="match-info">
          
          <figure class="team">
            <img :src="match.team1.src" :alt="match.team1.name" class="team-logo">
            <p class="team-name">{{ match.team1.name }}</p>
            <p class="result" :class="{ 'victory': match.winner === match.team1.name, 'defeat': match.winner === match.team2.name, 'draw': match.winner === 'Empate' }">{{ match.winner === match.team1.name ? 'Victoria' : (match.winner === 'Empate' ? 'Empate' : 'Derrota') }}</p>
          </figure>
          <figure class="team">
            <img :src="match.team2.src" :alt="match.team2.name" class="team-logo">
            <p class="team-name">{{ match.team2.name }}</p>
            <p class="result" :class="{ 'victory': match.winner === match.team2.name, 'defeat': match.winner === match.team1.name, 'draw': match.winner === 'Empate'}">{{ match.winner === match.team2.name ? 'Victoria' : (match.winner === 'Empate' ? 'Empate' : 'Derrota') }}</p>
          </figure>
        </section>
      </li>
    </ul>
  </div>
</template>

  
  <script>
  export default {
    data() {
      return {
        matches: [
          {
            id: 1,
            date: '2023-05-01',
            team1: { src: require('../assets/images/teams/team_barça.png'), name: 'Barça' },
            team2: { src: require('../assets/images/teams/team_fnatic.png'), name: 'Fnatic' },
            kda: '3.2',
            gold: '25000',
            duration: '40:12',
            winner: 'Barça'
          },
          {
            id: 2,
            date: '2023-05-05',
            team1: { src: require('../assets/images/teams/team_movistar_riders.png'), name: 'Movistar Riders' },
            team2: { src: require('../assets/images/teams/team_giants.png'), name: 'Giants' },
            kda: '2.8',
            gold: '21000',
            duration: '35:42',
            winner: 'Empate'
          },
          {
            id: 3,
            date: '2023-05-10',
            team1: { src: require('../assets/images/teams/team_rebels.png'), name: 'Rebels' },
            team2: { src: require('../assets/images/teams/team_UCAM.png'), name: 'UCAM' },
            kda: '4.1',
            gold: '32000',
            duration: '45:20',
            winner: 'Rebels'
          },
          {
            id: 4,
            date: '2023-05-15',
            team1: { src: require('../assets/images/teams/team_bison.png'), name: 'Bison' },
            team2: { src: require('../assets/images/teams/team_heretics.png'), name: 'Heretics' },
            kda: '2.5',
            gold: '19000',
            duration: '33:58',
            winner: 'Heretics'
          },
          {
            id: 5,
            date: '2023-05-20',
            team1: { src: require('../assets/images/teams/team_guasones.png'), name: 'Guasones' },
            team2: { src: require('../assets/images/teams/team_KOI.png'), name: 'KOI' },
            kda: '3.9',
            gold: '28000',
            duration: '42:36',
            winner: 'Guasones'
          }
        ]
      };
    }
  };
  </script>