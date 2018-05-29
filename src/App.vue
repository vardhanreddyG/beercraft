<template>
  <div id="app">
    <v-app>
    <Header />
    <br>
    <br>
    <br>
    <router-view />
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import BeersList from './components/BeersList';

export default {
  name: 'app',
  components: {
    Header,
    BeersList
  }
};
</script>

<style>
</style>
