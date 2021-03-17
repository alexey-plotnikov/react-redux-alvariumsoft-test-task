import { combineReducers } from "redux";

import products from "reducers/products";
import priceLimits from "reducers/priceLimits";
import currency from "reducers/currency";
import visibilityFilter from "reducers/visibilityFilter";

const rootReducer = combineReducers({ products, priceLimits, currency, visibilityFilter });

export default rootReducer;
