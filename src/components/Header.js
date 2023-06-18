import React from "react";
import { Link } from "react-router-dom";
import header__logo from '../images/header/header__logo.svg';
import header__name from '../images/header/header__name.svg';

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src={header__logo}
          alt="Логотип"
          className="header__logo"
        />
        <img
          src={header__name}
          alt="Название веб-приложения"
          className="header__name"
        />
      </div>
      <nav className="header__navigation">
          <Link className="header__link" to="/">Главная</Link>
          <Link className="header__link" to="/possibilities">Возможности</Link>
          <Link className="header__link" to="/main">Задачи</Link>
      </nav>
    </header>

  );
};

export default Header;