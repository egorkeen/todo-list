import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOpenedPopup,
  selectSelectedTodo,
} from "../../store/todos/todos-selectors";
import { editTodo, toggleEditPopup } from "../../store/todos/todos-actions";

function EditPopup() {
  const dispatch = useDispatch();
  const selectedTodo = useSelector(selectSelectedTodo);
  const isOpen = useSelector((state) => selectOpenedPopup(state, "edit-popup"));
  const [task, setTask] = useState("title");
  const [description, setDescription] = useState("description");

  const closeEditPopup = () => dispatch(toggleEditPopup(false));

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // закрыть попап при нажатии на esc
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      closeEditPopup();
    }
  }

  // закрыть попап при клике по попапу
  function handleClickOutside(e) {
    if (e.target.classList.contains("popup")) {
      closeEditPopup();
    }
  }

  function onEditSubmit(e) {
    e.preventDefault();
    dispatch(editTodo({
      ...selectedTodo, 
      task, 
      description, 
    }));
    closeEditPopup();
  }

  // это необходимо, чтобы удалить/добавить слушатели
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
      setTask(selectedTodo.task);
      setDescription(selectedTodo.description);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`}>
      <Form
        title="Редактировать задачу"
        onSubmit={onEditSubmit}
        buttonText="Изменить"
      >
        <h3 className="form__input-title">Придумайте название для задачи</h3>
        <input
          type="text"
          placeholder="Название"
          className="form__input"
          minLength={2}
          maxLength={40}
          required
          value={task}
          onChange={handleTaskChange}
        />
        <h3 className="form__input-title">Опишите задачу</h3>
        <textarea
          type="text"
          placeholder="Описание"
          className="form__description-input"
          minLength={4}
          maxLength={370}
          required
          onChange={handleDescriptionChange}
          value={description}
        />
      </Form>
    </div>
  );
}

export default EditPopup;
