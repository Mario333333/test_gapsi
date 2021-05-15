const initialState = {
  shoppingCart: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHOPPING_CART":
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.product],
      };

    case "SET_SHOPPING_CART_CLEAR":
      return {
        ...state,
        shoppingCart: [],
      };
    default:
      return state;
  }
};

export default productsReducer;
