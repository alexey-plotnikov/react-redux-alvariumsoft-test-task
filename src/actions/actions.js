import { ACTIONS } from "common/action-types";

export const setPriceLimits = (min, max) => {
  return {
    type: ACTIONS.SET_PRICE_LIMITS,
    min,
    max,
  };
};

export const setCurrency = (currency) => {
  return {
    type: ACTIONS.SET_CURRENCY,
    currency,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: ACTIONS.SET_VISIBILITY_FILTER,
    filter,
  };
};
