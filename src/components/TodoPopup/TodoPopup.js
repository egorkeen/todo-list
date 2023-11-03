import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSelectedTodo } from '../../store/todos/todos-selectors';

function TodoPopup(props) {
  const selectedTodo = useSelector(selectSelectedTodo);
  // закрыть попап при нажатии на esc
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      props.onClose();
    }
  }

  // закрыть попап при клике по попапу
  function handleClickOutside(e) {
    if (e.target.classList.contains("popup")) {
      props.onClose();
    }
  }

  // это необходимо, чтобы удалить/добавить слушатели
  useEffect(() => {
    if (props.isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props.isOpen]);

  return (
    <div className={`popup ${props.isOpen ? "popup_active" : ""}`}>
      <div className="todo-popup__container">
        <h2 className="todo-popup__task">{selectedTodo.task}</h2>
        <span className="todo-popup__deadline">
          Выполнить до {selectedTodo.date} {selectedTodo.time}
        </span>
        <p className="todo-popup__description">
          {selectedTodo.description}
        </p>
      </div>
    </div>
  );
}

export default TodoPopup;
