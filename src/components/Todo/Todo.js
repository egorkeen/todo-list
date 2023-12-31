function Todo({
  todo,
  onDeleteButtonClick,
  onToggleClick,
  onTodoClick,
  onEditButtonClick,
}) {
  function handleToggleClick() {
    onToggleClick(todo);
  };

  function handleEditClick() {
    onEditButtonClick(todo);
  };

  function handleTodoClick() {
    onTodoClick(todo);
  };

  function handleDeleteClick() {
    onDeleteButtonClick(todo);
  };

  return (
    <article className={`${todo.isCompleted ? "todo_completed" : "todo"}`}>
      <h3
        onClick={handleTodoClick}
        className={`todo__task ${
          todo.isCompleted ? "todo__task_completed" : ""
        }`}
      >
        {todo.task}
      </h3>
      <button className="todo__delete-button" onClick={handleDeleteClick} />
      <span className="todo__deadline"></span>
      <p />
      <p
        className={`${
          todo.isCompleted ? "todo__description_completed" : "todo__description"
        }`}
      >
        {todo.description}
      </p>
      <p />
      {todo.isCompleted ? (
        <>
          <button
            className={`todo__complete-button ${
              todo.isCompleted ? "todo__complete-button_active" : ""
            }`}
            onClick={handleToggleClick}
          />
        </>
      ) : (
        <>
          <button
            className={`todo__complete-button ${
              todo.isCompleted ? "todo__complete-button_active" : ""
            }`}
            onClick={handleToggleClick}
          >
            {todo.isCompleted ? "" : "Завершить"}
          </button>
          {!todo.isCompleted && (
            <button className="todo__edit-button" onClick={handleEditClick} />
          )}
        </>
      )}
    </article>
  );
}

export default Todo;
