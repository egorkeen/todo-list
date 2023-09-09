import React, { useState, useEffect } from "react";
import Form from "../Form/Form";

function EditPopup({ isOpen, onClose, selectedTodo, onSubmit }) {
  const [task, setTask] = useState(selectedTodo.task);
  const [description, setDescription] = useState(selectedTodo.description);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

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

  function onEditSubmit(e) {
    e.preventDefault();
    const newTodo = {
      task: task,
      description: description,
    };
    onSubmit(newTodo);
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
