import React from "react";
import { NavLink } from "react-router-dom";
import footer__image from "../../images/footer/footer__image.svg";
import footer__logoMail from "../../images/footer/footer__logo-mail.svg";
import footer__logoTelegram from "../../images/footer/footer__logo-telegram.svg";

function Footer(props) {
  return (
    <footer className="footer">
      <img
        src={footer__image}
        className="footer__image"
        alt="Логотип и название веб-приложения"
      />
      <div className="footer__container">
        <nav className="footer__navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "footer__link_active" : "footer__link"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/possibilities"
            className={({ isActive }) =>
              isActive ? "footer__link_active" : "footer__link"
            }
          >
            Возможности
          </NavLink>
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              isActive ? "footer__link_active" : "footer__link"
            }
          >
            Задачи
          </NavLink>
        </nav>
        <span className="footer__date">2023</span>
      </div>
    </footer>
  );
}

export default Footer;
