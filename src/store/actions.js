import axios from 'axios';
export const addItemTocart = ({ commit }, { beer }) => {
  commit('addItem', beer);
};

export const fetchBeers = ({ commit }) => {
  fetch('http://starlord.hackerearth.com/beercraft').then(res => {
    let data = res.json().then(data => {
      console.log(data);
      commit('fetchBeers', data);
    });
  });
};

// export const sortBy = ({ commit }, { beers, sortby }) => {
//   beers.sort(compareValues(sortBy));
//   console.log(beers);
// };

function compareValues(key, order = 'asc') {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order == 'desc' ? comparison * -1 : comparison;
  };
}

export const setbeername = ({ commit }, { beername }) => {
  commit('setbeername', beername);
};
