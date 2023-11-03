import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Todo from "../Todo/Todo";
import Filters from "../Filters/Filters";
import { selectVisibleTodos } from "../../store/todos/todos-selectors";
import { selectCurrentFilter } from '../../store/filters/filters-selectors';

function Todos(props) {
  const currentFilter = useSelector(selectCurrentFilter)
  const todos = useSelector(state => selectVisibleTodos(state, currentFilter));
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
                onDeleteButtonClick={props.onDeleteButtonClick}
                onDoneButtonClick={props.onDoneButtonClick}
                onTodoClick={props.onTodoClick}
                onEditButtonClick={props.onEditButtonClick}
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
