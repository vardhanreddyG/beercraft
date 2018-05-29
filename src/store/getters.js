export const getNumberOfcartItems = state => {
  return state.cart.length;
};

export const getCartItems = state => state.cart;

export const getBeers = state => state.Beers;

function getByKeyword(list, keyword) {
  const search = keyword.trim().toLowerCase();
  if (!search.length) return list;
  return list.filter(item => item.name.toLowerCase().indexOf(search) > -1);
}

export const filter = (state) => {
  return getByKeyword(state.Beers,state.keyword)
}