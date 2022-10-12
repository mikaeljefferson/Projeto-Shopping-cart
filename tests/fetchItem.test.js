require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('2.1 Teste se fetchProducts é uma função', () =>{
    expect(typeof fetchItem).toBe('function');
  })
  test('2.2 Execute a função fetchitem com o argumento computador ', () => { 
    fetchItem('MLB1615760527');
   expect(fetch).toHaveBeenCalled(); 
  })
  test('2.3 Execute a função fetchitem com o argumento computador ', () => { 
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })
  test('2.4 Testando o retorno da função', async () => {
    await expect(fetchItem('MLB1615760527')).resolves.toEqual(item);
  })
  test('2.5 Verifique se ao chamar a função fetchitem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    await expect(fetchItem()).rejects.toThrow(new Error('You must provide an url'));
  })
  
});
