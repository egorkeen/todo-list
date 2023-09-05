import React, { useState } from "react";

function Todo({ todo, key, task, onDeleteButtonClick }) {
  const [isDone, setDone] = useState(false);

  const todoDoneButtonClass = `todo__done-button ${isDone ? 'todo__done-button_active' : ''}`;
  const todoTaskClass = `todo__task ${isDone ? 'todo__task_done' : ''}`;
  const content = 'English texts for beginners to practice reading and comprehension online and for free. Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order. The texts below are designed to help you develop while giving you an instant evaluation of your progress';
  
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
    <article className="todo">
        <h3 className={todoTaskClass}>{task}</h3>
        <button className="todo__delete-button" onClick={handleDeleteClick} />
        <span className="todo__deadline">До 05.06.2024 8:25 AM</span>
        <p />
          <p className="todo__description">{content}</p>
          <p />
      {
        isDone ? 
        <>
          <button className={todoDoneButtonClass} onClick={handleDoneClick} />
        </>
        :
        <>
          <button className={todoDoneButtonClass} onClick={handleDoneClick}>Выполнено</button>
          <button className="todo__edit-button" onClick={handleEditClick} />
        </>
      }
    </article>
  );
};

export default Todo;