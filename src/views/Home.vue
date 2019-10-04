<template>
  <v-container>
    <div id="app">
      <div id="ttt" class="container-fluid screen-2 panel" style="top: calc(1*100%);">
        <div class="promo-slid">
        </div>
        <div class="slider">
          <carousel-3d :autoplay="true" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" 
                :controls-width="30" :controls-height="60" :clickable="false" :count="events.length">
            <slide v-for="(event, i) in events" :index="i" :key="i">
              <figure>
                <img v-bind:src="event.images">
              </figure>
            </slide>
          </carousel-3d>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "SomeName",
  components: {
    Carousel3d,
    Slide
  },

  data() {
    return {
      events: []
    };
  }, // End of data

  created() {
    var vm = this;
    setTimeout(function() {
      vm.events = [
        {
          images: '/TeamWin.jpeg'
        },
        {
          images: '/awards.jpeg'
        },
        {
          images: '/OnB.png'
        },
        {
          images: '/20190929-champs.png'
        },
        {
          images: '/ChadnBeetle.jpeg'
        },

      ];
    }, 2000);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 6px;
}
</style>
