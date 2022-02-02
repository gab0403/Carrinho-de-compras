 require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search'); 

describe('1 - Teste a função fecthProducts', () => {
  it('Verifica se fetchProducts é uma função', async () => {
   await expect (typeof fetchProducts).toBe('function');
  });

  it('Ao executar a função fetchProducts com o argumento "computador", fetch deve ser chamada', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });

  it('Ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  await fetchProducts('computador');
    expect (fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Ao retornar a função fetchProducts com o argumento "computador", verifica se é uma estrutura de dados igual ao objeto computadorSearch.', async () =>{
  const func = await fetchProducts('computador'); 
  expect(func).toEqual(computadorSearch);
  });

   it('Ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
   const fail = await fetchProducts();
  expect (fail).toEqual(new Error ('You must provide an url.'));
 }); 

});
