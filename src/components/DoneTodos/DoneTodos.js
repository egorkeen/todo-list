import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Todo from "../Todo/Todo";

function DoneTodos(props) {
  return (
    <>
      <Header />
      <main className="main">
        <h2 className="main__title">Список выполненных задач</h2>
        <section className="main__todo-container">
          {props.doneTodos.length > 0 ? (
            // если есть хоть одна тудушка, то она отрендерится
            props.doneTodos.map((todo) => (
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
              <p />
              <p className="main__no-tasks">
                Пока не выполнено ни одной задачи {":("}
                <br />
              </p>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default DoneTodos;
