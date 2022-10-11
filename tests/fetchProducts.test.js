require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe ('1 - Teste a função fetchProducts',() => {
  test('1.1 Teste se fetchProducts é uma função', () =>{
    expect(typeof fetchProducts).toBe('function');
  })
  test('1.2 Execute a função fetchProducts com o argumento computador ', () => { 
     fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  test('1.3 Execute a função fetchProducts com o argumento computador ', () => { 
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  test('1.4 Testando o retorno da função', async () => {
    await expect(fetchProducts('computador')).resolves.toEqual(computadorSearch);
  })
  test('1.5 Verifique se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    await expect(fetchProducts()).rejects.toThrow(new Error('You must provide an url'));
  })
  
});
