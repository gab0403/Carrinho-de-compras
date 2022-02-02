// const fetch = require('node-fetch'); 

const fetchProducts = async (search) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${search}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
   return data;
  } catch (error) {
    return new Error('You must provide an url.');
  }
};
console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
