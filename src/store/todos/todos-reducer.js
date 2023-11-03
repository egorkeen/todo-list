import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  SELECT_TODO,
} from "./todos-actions";

const initialState = {
  list: [],
  selectedTodo: null,
  isEditPopupOpen: false,
  isTodoPopupOpen: false,
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      if (!state.list.includes(payload)) {
        return { ...state, list: [...state.list, payload] };
      }
      return state;

    case REMOVE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== payload),
      };

    // case EDIT_TODO:

    case SELECT_TODO:
      return {
        ...state,
        selectedTodo: payload,
      }

    case COMPLETE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };

    default:
      return state;
  }
};
