import { ACTIONS } from "common/action-types";
import { FILTRATION_PANEL_VALUES } from "common/constants";

const priceLimits = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.SET_PRICE_LIMITS:
      return { min: action.min, max: action.max };
    default:
      return state;
  }
};

export default priceLimits;
