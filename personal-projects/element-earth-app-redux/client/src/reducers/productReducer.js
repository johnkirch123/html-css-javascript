const initialState = {
  products: [
    { name: "Product 1", description: "This is a great product!" },
    { name: "Product 2", description: "This is a great product!" },
    { name: "Product 3", description: "This is a great product!" },
    { name: "Product 4", description: "This is a great product!" },
    { name: "Product 5", description: "This is a great product!" }
  ]
};

export default (state = initialState, action) => {
  // query product endpoint to fill store
  switch (action.type) {
    default:
      return state;
  }
};
