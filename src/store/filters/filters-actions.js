export const SET_FILTER = "@@filters/SET_FILTER";

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  }
};