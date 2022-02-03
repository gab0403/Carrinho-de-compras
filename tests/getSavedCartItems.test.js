const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
it('Ao executar getSavedCartItems, o método localStorage.getItem deve ser chamado', async () => {
await getSavedCartItems()
});
  it('Ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', async () => {

  });
});
