const CHAVE = 'Items';

function persistCart(products) {
  localStorage.setItem(CHAVE, JSON.stringify(products));
}

export function getSavedCartItems() {
  const getProducts = localStorage.getItem(CHAVE);
  if (getProducts === null) return [];
  return JSON.parse(getProducts);
}

export function addProduct(product) {
  const products = getSavedCartItems();
  products.push({
    total: 1,
    product,
  });
  persistCart(products);
}
