import React, { useState } from "react";

function Todo({ todo, onDeleteButtonClick }) {
  const [isDone, setDone] = useState(false);
  
  function handleDoneClick() {
    todo.isDone = !isDone;
    if (isDone) {
      setDone(false);
    } else {
      setDone(true);
    }
  }

  function handleEditClick() {
    // some function
  }

  function handleDeleteClick() {
    onDeleteButtonClick(todo);
  }

  return (
    <article className={`${isDone ? 'todo_done' : 'todo'}`}>
        <h3 className={`todo__task ${isDone ? 'todo__task_done' : ''}`}>{todo.task}</h3>
        <button className="todo__delete-button" onClick={handleDeleteClick} />
        <span className="todo__deadline">До {todo.date} {todo.time}</span>
        <p />
          <p className={`${isDone ? 'todo__description_done' : 'todo__description'}`}>{todo.description}</p>
          <p />
      {
        isDone ? 
        <>
          <button className={`todo__done-button ${isDone ? 'todo__done-button_active' : ''}`} onClick={handleDoneClick} />
        </>
        :
        <>
          <button className={`todo__done-button ${isDone ? 'todo__done-button_active' : ''}`} onClick={handleDoneClick}>Завершить</button>
          <button className="todo__edit-button" onClick={handleEditClick} />
        </>
      }
    </article>
  );
};

export default Todo;