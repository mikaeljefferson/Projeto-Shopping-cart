require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('1.1 Teste se fetchProducts é uma função', () =>{
    expect(typeof fetchProducts).toBe('function');
  });
  it('1.2 Execute a função fetchProducts com o argumento computador ', async() => { 
    await fetchProducts('computador');
    expect().toHaveBeenCalled();
  });
  it('1.3 Execute a função fetchProducts com o argumento computador ', async() => { 
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('1.4 Testando o retorno da função', async () => {
    const chamada = await fetchProducts('computador');
    expect(chamada).toEqual(computadorSearch);
  });
  test('1.5 Testando o retorno da função sem argumentos', async () => {
    const chamada = await fetchProducts();
    expect(chamada).toEqual(new Error('You must provide an url'));
  });
  
});
