// dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Todo from "../Todo/Todo";
import Filters from "../Filters/Filters";
// selectors
import { selectVisibleTodos } from "../../store/slices/todos/todos.selectors";
import { selectCurrentFilter } from "../../store/slices/todos/todos.selectors";
// actions
import {
  toggleTodo,
  removeTodo,
  selectTodo,
} from "../../store/slices/todos/todos.slice";
import {
  toggleTodoPopup,
  toggleAddPopup,
  toggleEditPopup,
} from "../../store/slices/popups/popups.slice";

function Todos() {
  const dispatch = useDispatch();

  const currentFilter = useSelector(selectCurrentFilter);
  const todos = useSelector((state) =>
    selectVisibleTodos(state, currentFilter)
  );

  const handleDeleteTodo = (todo) => {
    dispatch(removeTodo(todo));
  };

  const handleEditButtonClick = (todo) => {
    dispatch(selectTodo(todo));
    dispatch(toggleEditPopup(true));
  };

  const handleToggleTodo = (todo) => {
    dispatch(toggleTodo(todo));
  };

  const handleTodoClick = (todo) => {
    dispatch(selectTodo(todo));
    dispatch(toggleTodoPopup(true));
  };

  const handleAddButtonClick = () => {
    dispatch(toggleAddPopup(true));
  };

  return (
    <>
      <Header />

      <main className="main">
        <h2 className="main__title">Список задач</h2>
        <Filters />
        <section className="main__todos-container">
          {todos.length > 0 ? (
            // если есть хоть одна тудушка, то она отрендерится
            todos.map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                onDeleteButtonClick={handleDeleteTodo}
                onToggleClick={handleToggleTodo}
                onTodoClick={handleTodoClick}
                onEditButtonClick={handleEditButtonClick}
              />
            ))
          ) : (
            // если ничего нет, то будет надпись ниже
            <>
              <p />
              <p className="main__no-tasks">
                У вас пока нет задач {":("}
                <br />
                Но мы знаем, как это исправить!
              </p>
            </>
          )}
        </section>
        <button className="main__add-button" onClick={handleAddButtonClick}>
          Добавить
        </button>
      </main>

      <Footer />
    </>
  );
}

export default Todos;
