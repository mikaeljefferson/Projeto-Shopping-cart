const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3.1 - Teste a função saveCartItems', () => {
  test('3.1 Verifica se ao executar a função saveCartItems com um item do carrinho, ele é armazenado no localStorage', () => {
    saveCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  test('3.2 Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave cartItems e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
    const items = '';
    saveCartItems(items);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', items)
})
test('3.3 Teste se saavecartitens é uma função', () =>{
  expect(typeof saveCartItems).toBe('function');
})


});
