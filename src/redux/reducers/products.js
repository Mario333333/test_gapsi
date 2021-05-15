const initialState = {
  products: [],
  page: 1,
  search: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.products };
    case "SET_PAGE":
      return { ...state, page: action.page };
    case "SET_SEARCH":
      return { ...state, search: action.search };

    default:
      return state;
  }
};

export default productsReducer;
