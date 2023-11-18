import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavigationPopup from "../NavigationPopup/NavigationPopup";
import header__burger from "../../images/header/header__burger-image.svg";

function Navigation() {
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);

  function openBurgerMenu() {
    setBurgerMenuActive(true);
  };

  function closeBurgerMenu() {
    setBurgerMenuActive(false);
  };

  return (
    <>
      <nav className="header__navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link_active" : "header__link"
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/todos"
          className={({ isActive }) =>
            isActive ? "header__link_active" : "header__link"
          }
        >
          Задачи
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "header__link_active" : "header__link"
          }
        >
          Профиль
        </NavLink>
      </nav>

      <nav onClick={openBurgerMenu} className="header__burger-menu">
        <img src={header__burger} alt="меню навигации" />
      </nav>
      <NavigationPopup isOpen={isBurgerMenuActive} onClose={closeBurgerMenu} />
    </>
  );
}

export default Navigation;
