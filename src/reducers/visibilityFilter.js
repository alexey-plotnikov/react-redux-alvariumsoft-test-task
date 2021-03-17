import { ACTIONS } from "common/action-types";
import { FILTRATION_PANEL_VALUES } from "common/constants";

const visibilityFilter = (state = FILTRATION_PANEL_VALUES.ALPHABETICAL, action) => {
  switch (action.type) {
    case ACTIONS.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
