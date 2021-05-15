export const setShoppingCart = (product = {}) => ({
  type: "SET_SHOPPING_CART",
  product,
});

export const clearShoppingCart = () => ({
  type: "SET_SHOPPING_CART_CLEAR",
});
