// const { fetchProducts } = require('./helpers/fetchProducts');

// const saveCartItems = require("./helpers/saveCartItems");

// const getSavedCartItems = require("./helpers/getSavedCartItems");

fetchProducts('computador').then(console.log);

const ol = document.querySelector('ol');

// Requisito 3.
 function cartItemClickListener(event) {
  event.target.parentElement.removeChild(event.target);
  saveCartItems(ol.innerHTML);
}

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

  saveCartItems(ol.innerHTML);
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

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} 

// Requisito 4.
function addEvent() {
  const allCartItems = [...document.querySelector('ol').children];
  allCartItems.forEach((element) => element.addEventListener('click', cartItemClickListener));
}

// Requisito 6.
function buttonClearCart() {
  const list = document.querySelector('ol');
  const buttonClear = document.querySelector('.empty-cart');
 buttonClear.addEventListener('click', function () {
   list.innerHTML = '';
   localStorage.clear();
});
}

// Requisito 7.
function loadingPage() {
    const div = document.getElementById('loadingAPI');
    const h1 = document.createElement('h1');
    const newText = document.createTextNode('Carregando...');
    h1.appendChild(newText);
    h1.classList.add('loading');
    div.appendChild(h1);
   console.log(h1);
}

// Requisito 7.
function removeLoading() {
  setTimeout(function () {
    const h1 = document.querySelector('h1');
    h1.remove();
    productList();
    }, 2000);
}

 window.onload = () => {
  loadingPage();
  removeLoading();
  getSavedCartItems();
  addEvent();
  buttonClearCart();
 };
