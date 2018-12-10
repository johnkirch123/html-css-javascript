export function selectProductDetail(product) {
  return {
    type: "PRODUCT_SELECTED",
    payload: product
  };
}
