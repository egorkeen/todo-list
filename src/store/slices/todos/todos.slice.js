import { createSlice } from "@reduxjs/toolkit";
import localStorage from "redux-persist/es/storage";

const initialState = {
  list: [],
  selectedTodo: null,
  currentFilter: "all",
};

const todosSlice = createSlice({
  name: "@@todos",
  reducers: {

    loadTodos: (state, action) => {
      state.list = action.payload;
    },

    addTodo: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.list));
    },

    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.list));
    },

    editTodo: (state, action) => {
      const updatedTodos = state.list.map((todo) =>
        todo.id === action.payload.id
          ? action.payload
          : todo
      );
      state.list = updatedTodos;
      localStorage.setItem("todos", JSON.stringify(state.list));
    },

    toggleTodo: (state, action) => {
      const updatedTodos = state.list.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      state.list = updatedTodos;
      localStorage.setItem("todos", JSON.stringify(state.list));
    },

    selectTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },

    setFilter: (state, action) => {
      state.currentFilter = action.payload;
      localStorage.setItem("filter", JSON.stringify(state.currentFilter));
    },
  },
  initialState: initialState,
});

export const { loadTodos, addTodo, removeTodo, toggleTodo, editTodo, selectTodo, setFilter } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

