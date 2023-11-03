import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../../store/todos/todos-actions';
import Form from "../Form/Form";

function AddPopup({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  // это необходимо, чтобы удалить/добавить слушатели
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
      setTask("");
      setDescription("");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // отслеживаем изменение значения task
  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  // description
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // закрыть попап при нажатии на esc
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  // закрыть попап при клике по попапу
  function handleClickOutside(e) {
    if (e.target.classList.contains("popup")) {
      onClose();
    }
  }

  // добавить todo'шку
  function onSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({
      task,
      description,
      isDone: false
    }));
    onClose();
  }

  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`}>
      <Form
        title="Создание новой задачи"
        onSubmit={onSubmit}
        buttonText="Добавить задачу"
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

export default AddPopup;
