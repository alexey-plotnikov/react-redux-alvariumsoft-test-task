import { combineReducers } from "redux";

import products from "reducers/products";
import visibilityFilter from "reducers/visibilityFilter";

const rootReducer = combineReducers({ products, visibilityFilter });

export default rootReducer;
