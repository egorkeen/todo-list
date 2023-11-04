import {
  ADD_TODO,
  REMOVE_TODO,
  // EDIT_TODO,
  TOGGLE_TODO,
  SELECT_TODO,
  SET_FILTER,
} from "./todos-actions";

const initialState = {
  list: [],
  selectedTodo: null,
  currentFilter: "all",
  isEditPopupOpen: false,
  isTodoPopupOpen: false,
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      if (!state.list.includes(payload)) {
        return {
          ...state,
          list: [...state.list, payload],
        };
      }
      return state;

    case REMOVE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== payload),
      }


    // case EDIT_TODO:

    case SELECT_TODO:
      return {
        ...state,
        selectedTodo: payload,
      };

    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };

    case SET_FILTER:
      return {
        ...state,
        currentFilter: payload,
      };

    default:
      return state;
  }
};
