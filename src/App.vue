<template>
  <v-app>
    <v-content class="black">
      <Navbar />
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
