import React from "react";
import footer__image from "../../images/footer/footer__image.svg";

function Footer(props) {
  return (
    <footer className="footer">
      <img
        src={footer__image}
        className="footer__image"
        alt="Логотип и название веб-приложения"
      />
      <div className="footer__container">
        <a className="footer__link" target="_blank" href="https://github.com/egorkeen/todo-list" rel="noreferrer">GitHub</a>
        <span className="footer__date">2023</span>
      </div>
    </footer>
  );
}

export default Footer;
