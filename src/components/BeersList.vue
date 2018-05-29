
<template>
<div>
     <v-container grid-list-md text-xs-center v-if="getbeers.length > 0">
    <v-layout row wrap>
      <v-flex xs3 v-for="beer in search" :key="beer.id">
        <Beer :beer="beer" />
      </v-flex>
    </v-layout>
  </v-container>
   <v-container grid-list-md text-xs-center v-if="getbeers.length ===0 ">
    <v-layout row wrap>
      <v-flex xs12>
        <v-progress-circular :size="50" indeterminate color="warning"></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</div>
 
</template>

<script>
import search from './Search.vue';
import Beer from './Beer.vue';
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  name: 'BeersList',
  beforeCreate: function() {
    console.log('beforecreated');
    this.$store.dispatch('fetchBeers');
  },
  created: function() {
    console.log('created');
    this.status = 'ready';
  },
  components: {
    Beer,
    search
  },
  data() {
    return {
      beers: [],
      status: 'loading'
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      getbeers: 'getBeers',
      search: 'filter'
    })
  }
};
</script>
