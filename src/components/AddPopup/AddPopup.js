import React, { useState, useEffect } from "react";

function AddPopup(props) {
  const [todo, setTodo] = useState('');

  // это необходимо, чтобы удалить/добавить слушатели
  useEffect(() => {
    if (props.isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
      setTodo('');
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props.isOpen]);

  // отслеживаем изменение значения todo
  function handleTodoChange (e) {
    setTodo(e.target.value);
  };
  
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

  // добавить todo'шку
  function onSubmit(e) {
    e.preventDefault();
    props.onSubmit(
      {
        task: todo,
      }
    );
  };

  return (
    <div className={`popup ${props.isOpen ? 'popup_active' : ''}`}>
      <form className="form" onSubmit={onSubmit}>
        <input
          placeholder="Ваша задача"
          className="form__input"
          minLength={2}
          maxLength={40}
          required
          value={todo}
          onChange={handleTodoChange}
        />
        <button
          type="submit"
          className="form__submit-button">
            <div className="form__custom-button" />
          </button>
      </form>
    </div>
  );
};

export default AddPopup;