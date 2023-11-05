export const ADD_TODO = "@@todos/ADD_TODO";
export const REMOVE_TODO = "@@todos/REMOVE_TODO";
export const EDIT_TODO = "@todos/EDIT_TODO";
export const TOGGLE_TODO = "@todos/TOGGLE_TODO";
export const SELECT_TODO = "@todos/SELECT_TODO";
export const SET_FILTER = "@todos/SET_FILTER";
export const TOGGLE_EDIT_POPUP = "@todos/TOGGLE_EDIT_POPUP";
export const TOGGLE_ADD_POPUP = "@todos/TOGGLE_ADD_POPUP";
export const TOGGLE_TODO_POPUP = "@todos/TOGGLE_TODO_POPUP";

// todo actions

export const addTodo = (todoId) => {
  return {
    type: ADD_TODO,
    payload: todoId,
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    payload: todoId,
  };
};

export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};

export const toggleTodo = (todo) => {
  return {
    type: TOGGLE_TODO,
    payload: todo,
  };
};

export const selectTodo = (todo) => {
  return {
    type: SELECT_TODO,
    payload: todo,
  };
};

// filter actions

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

// popups actions

export const toggleEditPopup = (state) => {
  return {
    type: TOGGLE_EDIT_POPUP,
    payload: state,
  };
};

export const toggleAddPopup = (state) => {
  return {
    type: TOGGLE_ADD_POPUP,
    payload: state,
  };
};

export const toggleTodoPopup = (state) => {
  return {
    type: TOGGLE_TODO_POPUP,
    payload: state,
  };
};
