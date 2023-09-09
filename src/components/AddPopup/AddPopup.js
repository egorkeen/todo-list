import React, { useState, useEffect } from "react";
import Form from "../Form/Form";

function AddPopup(props) {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const formatTime = (hour, minute) => {
    const formattedHour = hour.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMinute}`;
  };

  const [task, setTask] = useState("");
  const [selectedDate, setSelectedDate] = useState(formatDate(currentDate));
  const [selectedTime, setSelectedTime] = useState(
    formatTime(currentHour, currentMinute)
  );
  const [description, setDescription] = useState("");

  // это необходимо, чтобы удалить/добавить слушатели
  useEffect(() => {
    if (props.isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
      setTask("");
      setSelectedDate(currentDate.toISOString().split("T")[0]);
      setSelectedTime(formatTime(currentHour, currentMinute));
      setDescription("");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props.isOpen]);

  // отслеживаем изменение значения task
  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  // deadline
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // description
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
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
    props.onSubmit({
      task: task,
      date: formatDate(new Date(selectedDate)),
      time: selectedTime,
      description: description,
      isDone: false,
    });
  }

  return (
    <div className={`popup ${props.isOpen ? "popup_active" : ""}`}>
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
        <h3 className="form__input-title">Выберите крайний срок выполнения</h3>
        <div className="form__date-container">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            min={currentDate.toISOString().split("T")[0]}
            max="2060-12-31"
            required
          />
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>
      </Form>
    </div>
  );
}

export default AddPopup;
