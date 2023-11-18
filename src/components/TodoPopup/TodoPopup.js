// dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// selectors
import { selectSelectedTodo } from "../../store/slices/todos/todos.selectors";
import { selectOpenedPopup } from "../../store/slices/popups/popups.selectors";
// actions
import { toggleTodoPopup } from "../../store/slices/popups/popups.slice";

function TodoPopup() {
  const dispatch = useDispatch();
  const selectedTodo = useSelector(selectSelectedTodo);
  const isOpen = useSelector((state) => selectOpenedPopup(state, "todo-popup"));

  const closeTodoPopup = () => dispatch(toggleTodoPopup(false));
  // закрыть попап при нажатии на esc
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      closeTodoPopup();
    }
  }

  // закрыть попап при клике по попапу
  function handleClickOutside(e) {
    if (e.target.classList.contains("popup")) {
      closeTodoPopup();
    }
  }

  // это необходимо, чтобы удалить/добавить слушатели
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`}>
      <div className="todo-popup__container">
        <h2 className="todo-popup__task">{selectedTodo?.task}</h2>
        <span className="todo-popup__deadline"></span>
        <p className="todo-popup__description">{selectedTodo?.description}</p>
      </div>
    </div>
  );
}

export default TodoPopup;
