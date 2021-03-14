import { ACTIONS } from "common/action-types";

import productsJSON from "common/products.json";

const initialState = productsJSON.products;

const products = (state = initialState, action) => {
  return state;
};

export default products;
