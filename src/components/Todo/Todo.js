import React, { useState } from "react";

function Todo({ todo, onDeleteButtonClick, onDoneButtonClick, onTodoClick }) {
  const [isDone, setDone] = useState(todo.isDone);
  
  function handleDoneClick() {
    onDoneButtonClick(todo);
  }

  function handleEditClick() {

  }

  function handleTodoClick () {
    onTodoClick(todo);
  }

  function handleDeleteClick() {
    onDeleteButtonClick(todo);
  }

  return (
    <article className={`${isDone ? 'todo_done' : 'todo'}`}>
        <h3 onClick={handleTodoClick} className={`todo__task ${isDone ? 'todo__task_done' : ''}`}>{todo.task}</h3>
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