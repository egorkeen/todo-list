import React from "react";

function Todo({
  todo,
  onDeleteButtonClick,
  onCompleteButtonClick,
  onTodoClick,
  onEditButtonClick,
}) {
  function handleCompleteClick() {
    onCompleteButtonClick(todo);
  }

  function handleEditClick() {
    onEditButtonClick(todo);
  }

  function handleTodoClick() {
    onTodoClick(todo);
  }

  function handleDeleteClick() {
    onDeleteButtonClick(todo);
  }

  return (
    <article className={`${todo.isCompleted ? "todo_completed" : "todo"}`}>
      <h3
        onClick={handleTodoClick}
        className={`todo__task ${todo.isCompleted ? "todo__task_completed" : ""}`}
      >
        {todo.task}
      </h3>
      <button className="todo__delete-button" onClick={handleDeleteClick} />
      <span className="todo__deadline">
        До {todo.date} {todo.time}
      </span>
      <p />
      <p
        className={`${todo.isComplete ? "todo__description_completed" : "todo__description"}`}
      >
        {todo.description}
      </p>
      <p />
      {todo.isComplete ? (
        <>
          <button
            className={`todo__complete-button ${
              todo.isCompleted ? "todo__complete-button_active" : ""
            }`}
            onClick={handleCompleteClick}
          />
        </>
      ) : (
        <>
          <button
            className={`todo__complete-button ${
              todo.isCompleted ? "todo__complete-button_active" : ""
            }`}
            onClick={handleCompleteClick}
          >
            {todo.isCompleted ? '' : 'Завершить'}
          </button>
          {!todo.isCompleted && <button className="todo__edit-button" onClick={handleEditClick} />}
        </>
      )}
    </article>
  );
}

export default Todo;
