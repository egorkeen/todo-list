import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Todo from "../Todo/Todo";

function Todos(props) {
  return (
    <>
      <Header />

      <main className="main">
        <h2 className="main__title">Список задач</h2>
        <section className="main__todo-container">
          {props.todos.length > 0 ? (
            // если есть хоть одна тудушка, то она отрендерится
            props.todos.map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                onDeleteButtonClick={props.onDeleteButtonClick}
                onDoneButtonClick={props.onDoneButtonClick}
                onTodoClick={props.onTodoClick}
              />
            ))
          ) : (
            // если ничего нет, то будет надпись ниже
            <>
              <p/>
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
