
<template>
    <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs3>
      </v-flex>
      <v-flex xs6>
        <v-text-field v-model="keyword" solo label="First Name" prepend-icon="search"></v-text-field>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      beers: ''
    };
  },
  methods: {},
  computed: {
    keyword: {
      get() {
        return this.$store.state.keyword;
      },
      set(value) {
        this.$store.commit('setKeyword', value);
      }
    }
  }
};
</script>

<style>
</style>

