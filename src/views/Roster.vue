<template>
  <div>
    <h1 class="mx-4 mb-4">Roster</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="player in team" :key="player.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="player.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text center>
              <div class="black--text">{{ player.name }}</div>
              <div>{{ player.position }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: '#1 Kate Hernandez', position: 'RHP/SS', avatar: '/avatar-1.png' },
        { name: '#3 Emma Alex', position: '2B/OF', avatar: '/avatar-2.png' },
        { name: '#4 Drew Amarro', position: 'C/SS', avatar: '/avatar-3.png' },
        { name: '#5 Macie Bryant', position: 'RHP/3B', avatar: '/avatar-4.png' },
        { name: '#6 Bellalucia Cantu', position: 'LHP/1B', avatar: '/avatar-5.png'}

      ]
    }
  }
}
</script>