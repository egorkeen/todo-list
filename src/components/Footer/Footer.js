import React from "react";
import { NavLink } from "react-router-dom";
import footer__image from '../../images/footer/footer__image.svg';
import footer__logoMail from '../../images/footer/footer__logo-mail.svg';
import footer__logoTelegram from '../../images/footer/footer__logo-telegram.svg';

function Footer(props) {
  return (
    <footer className="footer">
      <img src={footer__image} className="footer__image" alt="Логотип и название веб-приложения" />
      <div className="footer__container">
        <nav className="footer__navigation">
        <NavLink to="/" className={({ isActive }) => isActive ? 'footer__link_active' : 'footer__link'}>Главная</NavLink>
        <NavLink to="/possibilities" className={({ isActive }) => isActive ? 'footer__link_active' : 'footer__link'}>Возможности</NavLink>
        <NavLink to="/main" className={({ isActive }) => isActive ? 'footer__link_active' : 'footer__link'}>Задачи</NavLink>
        </nav>
        <div className="footer__socials">
          <div className="footer__social">
            <img src={footer__logoMail} className="footer__image-logo" alt="Логотип почты mail.ru" />
            <p className="footer__profession">Веб-разработчик: <span className="footer__contact">egor.keen@mail.ru</span></p>
          </div>
          <div className="footer__social">
            <img src={footer__logoTelegram} className="footer__image-logo" alt="Логотип Telegram" />
            <p className="footer__profession">Веб-дизайнер: <span className="footer__contact">@nastlett</span></p>
          </div>
        </div>
        <span className="footer__date">2023</span>
      </div>
    </footer>
  )
}

export default Footer;
