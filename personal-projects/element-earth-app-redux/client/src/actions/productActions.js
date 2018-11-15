export function productsList(products) {
  return {
    type: "GET_PRODUCTS",
    payload: products
  };
}
