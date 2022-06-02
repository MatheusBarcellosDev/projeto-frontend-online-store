export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = categories.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const categories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const products = categories.json();
  return products;
}
