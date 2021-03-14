import { ACTIONS } from "common/action-types";

export const setVisibilityFilter = (filter) => {
  return {
    type: ACTIONS.SET_VISIBILITY_FILTER,
    filter,
  };
};
