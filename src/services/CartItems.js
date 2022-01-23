const CHAVE = 'Items';

function persistCart(products) {
  localStorage.setItem(CHAVE, JSON.stringify(products));
}

export function getSavedCartItems() {
  const getProducts = localStorage.getItem(CHAVE);
  if (getProducts === null) return [];
  return JSON.parse(getProducts);
}

export function removeItem(id) {
  const products = getSavedCartItems();
  const newProducts = products.filter((item) => item.product.id !== id);
  persistCart(newProducts);
}

export function updateCartQuantity(id, quantity) {
  const products = getSavedCartItems();
  const product = products.find((item) => item.product.id === id);
  product.quantity = quantity;
  persistCart(products);
}

export function addProduct(product) {
  const products = getSavedCartItems();
  const productExists = products.find((item) => item.product.id === product.id);
  if (productExists) {
    productExists.quantity += 1;
    persistCart(products);
    return;
  }
  products.push({
    product,
    quantity: 1,
  });
  persistCart(products);
}
