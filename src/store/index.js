import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todosReducer } from "./slices/todos/todos.slice";
import { usersReducer } from "./slices/users/users.slice";
import { popupsReducer } from "./slices/popups/popups.slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer,
  popups: popupsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: {
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      },
    },
  }),
})

const persistor = persistStore(store);

export { store, persistor };
