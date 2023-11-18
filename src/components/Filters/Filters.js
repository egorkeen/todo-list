// dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// selectors
import { selectCurrentFilter } from "../../store/slices/todos/todos.selectors";
// actions
import { setFilter } from "../../store/slices/todos/todos.slice";

function Filters() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectCurrentFilter);

  const selectAllTodos = () => {
    dispatch(setFilter("all"));
  };

  const selectActiveTodos = () => {
    dispatch(setFilter("active"));
  };

  const selectCompletedTodos = () => {
    dispatch(setFilter("completed"));
  };

  return (
    <div className="filters">
      <button
        onClick={selectAllTodos}
        className={`filters__button ${
          currentFilter === "all" ? "filters__button_acitve" : ""
        }`}
      >
        Все
      </button>
      <button
        onClick={selectActiveTodos}
        className={`filters__button ${
          currentFilter === "active" ? "filters__button_acitve" : ""
        }`}
      >
        Активные
      </button>
      <button
        onClick={selectCompletedTodos}
        className={`filters__button ${
          currentFilter === "completed" ? "filters__button_acitve" : ""
        }`}
      >
        Завершенные
      </button>
    </div>
  );
}

export default Filters;
