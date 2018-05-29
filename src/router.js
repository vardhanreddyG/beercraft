import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import BeersList from './components/BeersList';
import BeerDetail from './components/BeerDetail';
import Cart from './components/Cart';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Beer List',
      component: BeersList
    },
    {
      path: '/beer/',
      name: 'beer',
      props: true,
      component: BeerDetail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
});
