export const addItem = (state, beer) => {
  state.cart.push(beer);
};

export const fetchBeers = (state, beers) => {
  state.Beers = beers;
};

export const setKeyword = (state, beername) => {
  state.setKeyword = beername;
};

export const search = ({ commit }, { search, beers }) => {
  const searchResult = beers.filter(function(cust) {
    return cust.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
  });
  console.log(search);
};
