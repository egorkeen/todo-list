export const ADD_TODO = "@@todos/ADD_TODO";
export const REMOVE_TODO = "@@todos/REMOVE_TODO";
export const EDIT_TODO = "@todos/EDIT_TODO";
export const TOGGLE_TODO = "@todos/TOGGLE_TODO";
export const SELECT_TODO = "@todos/SELECT_TODO";
export const SET_FILTER = "@todos/SET_FILTER";

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
  }
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  }
};