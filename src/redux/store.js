import { createStore, combineReducers } from "redux";

import products from "./reducers/products";
import shoppingCart from "./reducers/shoppingCart";
import visitor from "./reducers/visitor";

const reducers = combineReducers({
  products,
  shoppingCart,
  visitor,
});

export default createStore(reducers);
