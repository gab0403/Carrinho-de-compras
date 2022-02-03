// const { fetchProducts } = require('./helpers/fetchProducts');

// const { fetchItem } = require("./helpers/fetchItem");

// const { fetchItem } = require('./helpers/fetchItem');

fetchProducts('computador').then(console.log);

/* function cartItemClickListener(event) {
  // requisito 3
} */

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
} 
// Requisito 2.
async function itemList(event) {
  const element = event.target.parentNode.firstChild.innerText;
  const itemId = await fetchItem(element);
  const { id, title, price } = itemId;
  const item = document.querySelector('.cart__items');
  item.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
  } 

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}
// Requisito 2.
function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', itemList);
  section.appendChild(button);
  return section;
}
// Requisito 1.
async function productList() {
  const items = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const { results } = data;
  return results.forEach(({ id, title, thumbnail }) => {
  items.appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
  });
  } 

  /* function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

 window.onload = () => {
  productList();
 };
