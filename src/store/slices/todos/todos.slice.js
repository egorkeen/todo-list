import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selectedTodo: null,
  currentFilter: "all",
};

const todosSlice = createSlice({
  name: "@@todos",
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },

    removeTodo: (state, action) => {
      state.list.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      const updatedTodos = state.list.map((todo) =>
        todo.id === action.payload.id
          ? action.payload
          : todo
      );
      state.list = updatedTodos;
    },

    toggleTodo: (state, action) => {
      const updatedTodos = state.list.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      state.list = updatedTodos;
    },

    selectTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },

    setFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
  },
  initialState: initialState,
});

export const { addTodo, removeTodo, toggleTodo, editTodo, selectTodo, setFilter } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

