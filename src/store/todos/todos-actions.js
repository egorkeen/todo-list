export const ADD_TODO = "@@todos/ADD_TODO";
export const REMOVE_TODO = "@@todos/REMOVE_TODO";
export const EDIT_TODO = "@todos/EDIT_TODO";
export const COMPLETE_TODO = "@todos/COMPLETE_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    payload: todo,
  };
};

export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};

export const completeTodo = (todo) => {
  return {
    type: COMPLETE_TODO,
    payload: todo,
  };
};
