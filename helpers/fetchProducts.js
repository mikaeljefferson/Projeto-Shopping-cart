const fetchProducts = (computador) => {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${computador}`);
};
const getfetchProducts = async (computador) => {
  if (computador === undefined) {
    throw new Error('You must provide an url');
  }
  const response = await fetchProducts(computador);
  const data = await response.json();
  return data;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    getfetchProducts,
  };
}
