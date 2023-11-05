import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  SELECT_TODO,
  SET_FILTER,
  TOGGLE_ADD_POPUP,
  TOGGLE_EDIT_POPUP,
  TOGGLE_TODO_POPUP,
} from "./todos-actions";

const initialState = {
  list: [],
  selectedTodo: null,
  currentFilter: "all",
  isAddPopupOpen: false,
  isEditPopupOpen: false,
  isTodoPopupOpen: false,
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // todos
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
      };

    case EDIT_TODO:
      return {
        ...state,
        list: state.list.map((todo) => 
          todo.id === payload.id
            ? payload
            : todo
        ),
      }

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

    // filter
    case SET_FILTER:
      return {
        ...state,
        currentFilter: payload,
      };

    // popups
    case TOGGLE_ADD_POPUP:
      return {
        ...state,
        isAddPopupOpen: payload,
      };

    case TOGGLE_EDIT_POPUP:
      return {
        ...state,
        isEditPopupOpen: payload,
      };

    case TOGGLE_TODO_POPUP:
      return {
        ...state,
        isTodoPopupOpen: payload,
      };

    default:
      return state;
  }
};
