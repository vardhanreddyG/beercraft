<template>
    <div>
         <v-layout row>
             <v-flex xs3>
    </v-flex>
    <v-flex xs6>
      <v-card v-for="item in getCartItems" :key="item.id">
          <div>
              <p><strong>Name</strong>:{{ item.name }}</p>
              <p><strong>Style</strong>:{{ item.style }}</p>
          </div>
      </v-card>
    </v-flex>
  </v-layout>
    </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    getCartItems: function() {
      return this.$store.getters.getCartItems;
    }
  }
};
</script>

<style scoped>
</style>
