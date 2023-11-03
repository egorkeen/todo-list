import { combineReducers } from "redux";
import { todosReducer } from "./todos/todos-reducer";
import { filtersReducer } from "./filters/filters-reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  currentFilter: filtersReducer,
});

export default rootReducer;
