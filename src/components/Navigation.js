import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import header__burger from '../images/header/header__burger-image.svg';

function Navigation (props) {
  function handleBurgerMenuClick () {
    // 
  }

  return (
    <>
      <nav className="header__navigation">
        <NavLink to="/" className={({ isActive }) => isActive ? 'header__link_active' : 'header__link'}>Главная</NavLink>
        <NavLink to="/possibilities" className={({ isActive }) => isActive ? 'header__link_active' : 'header__link'}>Возможности</NavLink>
        <NavLink to="/main" className={({ isActive }) => isActive ? 'header__link_active' : 'header__link'}>Задачи</NavLink>
      </nav>

      <nav onClick={props.onBurgerMenuClick} className="header__burger-menu">
        <img src={header__burger} alt="меню навигации" />
      </nav>
    </>
  );
};

export default Navigation;