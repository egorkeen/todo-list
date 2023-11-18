import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import menu__image from "../../images/menu/menu__image.png";

function Menu() {
  return (
    <>
      <Header />
      <section className="menu">
        <div className="menu__container">
          <h1 className="menu__title">Организуйте работу и жизнь.</h1>
          <p className="menu__description">
            To-do List – веб-приложение, которое поможет вам структурировать свои задачи, чтобы добиться эффективности.
          </p>
          <Link to="/todos" className="menu__button">
            Начать
          </Link>
        </div>
        <img
          className="menu__image"
          src={menu__image}
          alt="Картинка. Девушка за столом работает."
        />
      </section>
      <Footer />
    </>
  );
}

export default Menu;
