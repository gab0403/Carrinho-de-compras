require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Verifica se fetchItem é uma função', async () => {
    await expect(typeof fetchItem).toBe('function');
  });
  it('Ao executar a função fetchItem com o argumento do item "MLB1615760527" o fetch deve ser chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Ao chamar a função fetchItem com o argumento do item "MLB1615760527", verifica se a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    const link = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(link);
  });
  it ('Ao retornar a função fetchItem com o argumento do item "MLB1615760527" verifica se é uma estrutura de dados igual ao objeto item.', async () => {
    const func =  await fetchItem('MLB1615760527');
    expect(func).toEqual(item);
  });
  it('Ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const fail = await fetchItem();
    expect(fail).toEqual(new Error('You must provide an url.'));
  });
});
