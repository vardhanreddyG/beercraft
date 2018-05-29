<template>
        <v-layout row>
             <v-flex xs3>
    </v-flex>
    <v-flex xs4>
     <v-card>
        <v-card-media :src="fetchImg" height="210px" >
          
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ beer.name}}</h3>
            <div>{{ beer.style}}</div>
            <p><strong>Ounces</strong> {{ beer.ounces}}</p>
            <p><strong>Abv</strong> {{ beer.abv}}</p>
          </div>
        </v-card-title>
        <v-card-actions>
          <router-link to="/">
          <v-btn  color="warning">Back</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'BeerDetail',
  props: ['beer'],
  computed: {
    fetchImg() {
      return 'https://cdn.iconscout.com/public/images/icon/free/png-256/beer-mug-glass-drink-cocktail-emoj-symbol-babr-369f133aa5b11abf-256x256.png';
    }
  }
};
</script>

<style>
</style>
