<template>
  <v-app>
    <Navbar/>
    <v-content class="black--text deep-orange darken-2">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>
