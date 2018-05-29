<template>
<div>
<v-card>
        <v-card-media :src="fetchImg" height="210px" >
          
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ beer.name}}</h3>
            <div>{{ beer.style}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <router-link :to="{name:'beer',params:{beer:beer}}">
          <v-btn  color="warning">View</v-btn>
          </router-link>
          <v-btn  color ="warning" @click.prevent="addItem"> <v-icon dark right>shopping_cart</v-icon>Add</v-btn>
        </v-card-actions>
      </v-card>
</div>
      
</template>
<script>
export default {
  name: 'Beer',
  props: ['beer'],
  computed: {
    fetchImg() {
      return 'https://cdn.iconscout.com/public/images/icon/free/png-256/beer-mug-glass-drink-cocktail-emoj-symbol-babr-369f133aa5b11abf-256x256.png';
    }
  },
  methods: {
    addItem: function() {
      this.$store.dispatch('addItemTocart', { beer: this.beer });
    }
  }
};
</script>