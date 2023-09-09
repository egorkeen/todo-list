import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavigationPopup(props) {
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

  // закрыть попап при нажатии на esc, вдруг пригодится
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      props.onClose();
    }
  }

  // закрыть попап при клике по затемненному участку
  function handleClickOutside(e) {
    if (e.target.classList.contains("navigation-popup__background")) {
      props.onClose();
    }
  }
  return (
    <div
      className={`navigation-popup__background ${
        props.isOpen ? "navigation-popup__background_active" : ""
      }`}
    >
      <div
        className={`navigation-popup ${
          props.isOpen ? "navigation-popup_active" : ""
        }`}
      >
        <div
          className="navigation-popup__close-button"
          onClick={props.onClose}
        />
        <nav className="navigation-popup__container">
          <NavLink
            onClick={props.onClose}
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navigation-popup__button_active"
                : "navigation-popup__button"
            }
          >
            Главная
          </NavLink>
          <NavLink
            onClick={props.onClose}
            to="/possibilities"
            className={({ isActive }) =>
              isActive
                ? "navigation-popup__button_active"
                : "navigation-popup__button"
            }
          >
            Возможности
          </NavLink>
          <NavLink
            onClick={props.onClose}
            to="/todos"
            className={({ isActive }) =>
              isActive
                ? "navigation-popup__button_active"
                : "navigation-popup__button"
            }
          >
            Задачи
          </NavLink>
          <NavLink
            onClick={props.onClose}
            to="/done-todos"
            className={({ isActive }) =>
              isActive
                ? "navigation-popup__button_active"
                : "navigation-popup__button"
            }
          >
            Выполненнные задачи
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavigationPopup;
