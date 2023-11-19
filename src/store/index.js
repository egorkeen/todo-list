import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { todosReducer } from "./slices/todos/todos.slice";
import { usersReducer } from "./slices/users/users.slice";
import { popupsReducer } from "./slices/popups/popups.slice";

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer,
  popups: popupsReducer,
})

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export { store };
