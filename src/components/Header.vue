<template>
  <v-toolbar class="text-xs-center" color="warning">
   <router-link to="/"> <v-toolbar-title color="white">BeerCraft</v-toolbar-title></router-link>
    <v-spacer></v-spacer>
    <search />
    <router-link to="/cart">
     <v-badge overlap color="black" ripple>
      <span slot="badge">{{ numberOfItems || 0}}</span>
      <v-icon  color="white lighten-1">shopping_cart</v-icon>
    </v-badge>
    </router-link>
  </v-toolbar>
</template>

<script>
import search from './Search';
export default {
  name: 'Header',
  components: {
    search
  },
  computed: {
    numberOfItems: function() {
      return this.$store.getters.getNumberOfcartItems;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li a {
  text-decoration: none;
}
</style>
