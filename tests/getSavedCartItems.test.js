const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('4.1 Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado ', () => { 
    getSavedCartItems()
   expect(localStorage.getItem).toHaveBeenCalled(); 
  })
  test('4.2 Verifica se ao executar a função getSavedCartItems, o método localStorage.getItem é chamado com o parâmetro cartItems', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })
  test('4.3 Teste se saavecartitens é uma função', () =>{
    expect(typeof getSavedCartItems).toBe('function');
  })
});
