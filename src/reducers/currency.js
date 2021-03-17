import { ACTIONS } from "common/action-types";
import { FILTRATION_PANEL_VALUES } from "common/constants";

const currency = (state = FILTRATION_PANEL_VALUES.UAH, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENCY:
      return action.currency;
    default:
      return state;
  }
};

export default currency;
