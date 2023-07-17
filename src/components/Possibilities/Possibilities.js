import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import imageOne from "../../images/possibilities/possibilities__image-1.png";
import imageTwo from "../../images/possibilities/possibilities__image-2.png";
import imageThree from "../../images/possibilities/possibilities__image-3.png";

function Possibilities(props) {
  return (
    <>
      <Header />
      <section className="possibilities">
        <div className="possibilities__container">
          <div className="possibilities__description">
            <h2 className="possibilities__title">Создавай задачи</h2>
            <p className="possibilities__paragraph">
              Не держите всё в голове, ведите спсок дел в To-Do List! Удобно,
              быстро и просто создавайте задачи
            </p>
            <div className="possibilities__background-image" />
          </div>
          <img src={imageOne} className="possibilities__image" alt="Картинка" />
        </div>

        <div className="possibilities__container">
          <div className="possibilities__description">
            <h2 className="possibilities__title">
              Отмечай то, что уже выполнено
            </h2>
            <p className="possibilities__paragraph">
              Удобно сортировать выполненные и оставшиеся задачи! В один клик
              выполненные задачи зачеркваются
            </p>
            <div className="possibilities__background-image" />
          </div>
          <img src={imageTwo} className="possibilities__image" alt="Картинка" />
        </div>

        <div className="possibilities__container">
          <div className="possibilities__description">
            <h2 className="possibilities__title">Удаляй задачи</h2>
            <p className="possibilities__paragraph">
              Вы можете запросто удалить задачи, которые вам не нужны! Так,
              список задач будет выгляеть чисто и ничего не будет вам мешать
            </p>
            <div className="possibilities__background-image" />
          </div>
          <img
            src={imageThree}
            className="possibilities__image"
            alt="Картинка"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Possibilities;
