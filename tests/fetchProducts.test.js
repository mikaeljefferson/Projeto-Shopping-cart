require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', async() => {
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
  it('1.5 Verifique se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const expected2 = 'You must provide an url';
    expect(() => fetchProducts()).toThrow(expected2);
  });
  
});
