import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
} from "./todos-actions";

export const todosReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      if (!state.includes(payload)) {
        return [...state, payload];
      }
      return state;

    case REMOVE_TODO:
      return state.filter((todo) => todo !== payload);

    // case EDIT_TODO:

    case COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );

    default:
      return state;
  }
};
