// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
 
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
   const section = document.createElement('section');
   section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
   section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
 section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
 
  return section;
 };
 const appendProduct = async () => {
  const data = await fetchProducts('compudator');
  console.log(data.results);
  const sectionProduct = document.querySelector('.items');
  data.results.forEach((e) => {
    const dataInfo = { id: e.id, title: e.title, thumbnail: e.thumbnail };
    sectionProduct.appendChild(createProductItemElement(dataInfo));
  });
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */

// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText; 

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
 const getCartItems = () => {
  const items = document.getElementsByTagName('ol')[0].innerHTML;
  saveCartItems(items);
};
 const cartItemClickListener = (event) => {
  event.target.remove();
  getCartItems();
};
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addCart = async (event) => {
  const elementId = event.target.parentNode.firstChild.innerText;
  const cart = document.querySelector('.cart__items');
  const productDetails = await fetchItem(elementId);
  console.log(createCartItemElement(productDetails));
  cart.appendChild(createCartItemElement(productDetails));
  getCartItems();
};
const cleanCart = () => {
  const cart = document.getElementsByTagName('ol')[0];
  cart.innerHTML = '';
  getCartItems();
};
window.onload = async () => {
  await appendProduct();
  const addCartButtons = document.querySelectorAll('.item__add');
  addCartButtons.forEach((element) => element.addEventListener('click', addCart));
  const cart = document.getElementsByTagName('ol')[0];
  cart.innerHTML = getSavedCartItems();
  const storageItems = document.querySelectorAll('.cart__item');
  storageItems.forEach((item) => item.addEventListener('click', cartItemClickListener));
  const cleanButton = document.querySelector('.empty-cart');
  cleanButton.addEventListener('click', cleanCart);
 };

// SgetIdFromProductItem();
