import { SET_FILTER } from "./filters-actions";

export const filtersReducer = (state = "all", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
      
    default:
      return state;
  }
}