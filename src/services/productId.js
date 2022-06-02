async function getProductFromId(id) {
  const productID = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = productID.json();
  return data;
}

export default getProductFromId;
