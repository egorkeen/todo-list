import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Todo from "../Todo/Todo";
import Filters from "../Filters/Filters";
import { selectVisibleTodos } from "../../store/todos/todos-selectors";
import { selectCurrentFilter } from "../../store/filters/filters-selectors";
import { completeTodo, editTodo, removeTodo, selectTodo } from "../../store/todos/todos-actions";

function Todos(props) {
  const dispatch = useDispatch();

  const currentFilter = useSelector(selectCurrentFilter);
  const todos = useSelector((state) =>
    selectVisibleTodos(state, currentFilter)
  );

  const handleDeleteTodo = (todo) => {
    dispatch(removeTodo(todo.id));
  };

  const handleEditTodo = (todo) => {
    dispatch(editTodo(todo));
  };

  const handleCompleteTodo = (todo) => {
    dispatch(completeTodo(todo));
  };

  const handleSelectTodo = (todo) => {
    dispatch(selectTodo(todo));
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
                onCompleteButtonClick={handleCompleteTodo}
                onTodoClick={handleSelectTodo}
                onEditButtonClick={handleEditTodo}
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
        <button className="main__add-button" onClick={props.onAddButtonClick}>
          Добавить
        </button>
      </main>

      <Footer />
    </>
  );
}

export default Todos;
