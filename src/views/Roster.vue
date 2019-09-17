<template>
  <div>
    <h1 class="mx-4 mb-4">Roster</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="player in team" :key="player.name">
          <v-card max-width=350 class="black ma-3">
            <v-row justify="space-around">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-2">
                  <img :src="player.avatar">
                </v-avatar>
              </v-responsive>
            </v-row>
            <v-card-text class="white--text text-center">
              <h4>{{ player.name }}</h4>
              <h5>{{ player.position }}</h5>
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
        { name: '#27 Addison Pecenka', position: '3B/OF', avatar: '/avatar-3.png' },
        { name: '#23 Alyria Smith', position: '3B/OF', avatar: '/avatar-3.png' },
        { name: '#48 Amelia Nell', position: '2B/OF', avatar: '/avatar-3.png' },
        { name: '#6 Bellalucia Cantu', position: 'LHP/1B', avatar: '/avatar-3.png'},
        { name: '#4 Drew Amarro', position: 'C/SS', avatar: '/avatar-3.png' },
        { name: '#3 Emma Alex', position: '2B/OF', avatar: '/avatar-3.png' },
        { name: '#2 Julia Wilson', position: '1B/OF', avatar: '/avatar-3.png' },
        { name: '#1 Kate Hernandez', position: 'RHP/SS', avatar: '/avatar-3.png' },
        { name: '#5 Macie Bryant', position: 'RHP/3B', avatar: '/avatar-3.png' },
        { name: '#35 Maggie Blankenship', position: 'OF', avatar: '/avatar-3.png' },
        { name: '#21 Whitney Flanigan', position: 'C/OF', avatar: '/avatar-3.png' },
        

      ]
    }
  }
}
</script>