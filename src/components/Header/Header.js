import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import header__logo from "../../images/header/header__logo.svg";
import header__name from "../../images/header/header__name.svg";

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src={header__logo} alt="Логотип" className="header__logo" />
          <img
            src={header__name}
            alt="Название веб-приложения"
            className="header__name"
          />
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
