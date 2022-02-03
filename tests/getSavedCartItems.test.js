const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
it('Ao executar getSavedCartItems, o método localStorage.getItem deve ser chamado', () => {
 document.body.innerHTML = '<ol class="cart__items"></ol>';
  getSavedCartItems()
  expect(localStorage.getItem).toHaveBeenCalled();
});
  it('Ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
