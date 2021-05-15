export const setProducts = (products = []) => ({
  type: "SET_PRODUCTS",
  products,
});

export const setPage = (page = 1) => ({
  type: "SET_PAGE",
  page,
});

export const setSearch = (search = "") => ({
  type: "SET_SEARCH",
  search,
});
