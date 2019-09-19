<template>
  <div class=team>
    <v-row align="center">
      <h1 class="ml-4 subheading">Schedule</h1>
      <i class="material-icons">add_circle</i>
    </v-row>

      <v-container class=mx-5 mb-4 my-5>
        <v-card raised class="black white--text pa-3">
          <v-layout row wrap mx-2>
            <v-flex class="xs12 md6">
              <div class="caption">Tournament</div>
              <div>South X SouthWest</div>
            </v-flex>
            <v-flex class="xs6 xm4 md2">
              <div class="caption">Location</div>
              <div>Waters Park</div>
            </v-flex>
            <v-flex class="xs6 xm4 md2">
              <div class="caption">Date</div>
              <div>September 14, 2019</div>
            </v-flex>
          </v-layout>
        </v-card> 
        <v-card raised class="blue-grey darken-3 white--text pa-3">
          <v-layout row wrap mx-2>
            <v-flex class="xs12 md6">
              <div class="caption">Practice</div>
              <div>Team</div>
            </v-flex>
            <v-flex class="xs6 xm4 md2">
              <div class="caption">Location</div>
              <div>Jasper HS</div>
            </v-flex>
            <v-flex class="xs6 xm4 md2">
              <div class="caption">Date</div>
              <div>September 18, 2019</div>
            </v-flex>
          </v-layout>
        </v-card> 
      </v-container>
  </div>
</template>

<style>
.material-icons {
  font-size: 36px;
}
</style>