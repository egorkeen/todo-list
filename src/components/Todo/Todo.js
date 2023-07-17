import React, { useState } from "react";

function Todo({ todo, key, task, onDeleteButtonClick }) {
  const [isDone, setDone] = useState(false);

  const todoDoneButtonClass = `todo__done-button ${isDone ? 'todo__done-button_active' : ''}`;
  const todoTaskClass = `todo__task ${isDone ? 'todo__task_done' : ''}`;

  function handleDoneClick() {
    if (isDone) {
      setDone(false);
    } else {
      setDone(true);
    }
  }

  function handleDeleteClick() {
    onDeleteButtonClick(todo);
  }

  return (
    <article className="todo">
      <button className={todoDoneButtonClass} onClick={handleDoneClick} />
      <h3 className={todoTaskClass}>{task}</h3>
      <button className="todo__delete-button" onClick={handleDeleteClick} />
    </article>
  );
};

export default Todo;