const routes = {
  home: {
    url: "/",
  },
  shoppingCart: {
    url: "/shopping_cart",
  },
};

export const getURLByRouteName = (routeName) => {
  let route = routes[routeName],
    url = route ? route.url : "/";
  return url;
};
