import React from 'react';

import programmist from '../../src/img/man.jpg';
import icon1 from '../../src/img/about-1.svg';
import icon2 from '../../src/img/about-2.svg';
import icon3 from '../../src/img/about-3.svg';
import icon4 from '../../src/img/about-4.svg';
import icon5 from '../../src/img/about-5.svg';
import icon6 from '../../src/img/about-6.svg';
import icon7 from '../../src/img/about-7.svg';
import icon8 from '../../src/img/about-8.svg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__left">
            <h3 className="about__title">Почему мы?</h3>
            <img src={programmist} alt="programmist" />
          </div>
          <div className="about__items">
            <div className="about__item">
              <div className="about__img-box">
                <img src={icon1} alt="icon" />
              </div>
              <div className="about__info">
                <div className="about__info-title">Комплексные решения</div>
                Мы предлагаем создание сайта под ключ, начиная с разработки сайта и заканчивая
                технической поддержкой.
              </div>
            </div>
            <div className="about__item">
              <div className="about__img-box">
                <img src={icon2} alt="icon" />
              </div>
              <div className="about__info">
                <div className="about__info-title">Для нас нет невозможного</div>
                Мы находим решения для бизнес-задач любой сложности и работаем на результат.
              </div>
            </div>
            <div className="about__item">
              <div className="about__img-box">
                <img src={icon3} alt="icon" />
              </div>
              <div className="about__info">
                <div className="about__info-title">Высокое качество работы</div>
                Большинство клиентов к нам приходят по рекомендации. С постоянными заказчиками мы
                сотрудничаем на протяжении 8-10 лет.
              </div>
            </div>
            <div className="about__item">
              <div className="about__img-box">
                <img src={icon4} alt="icon" />
              </div>
              <div className="about__info">
                <div className="about__info-title">Гибкая система оплаты</div>
                Мы предлагаем широкий выбор вариантов оплаты, предоставляем скидки и бонусы,
                возможно сотрудничество под ваш бюджет.
              </div>
            </div>
            <div className="about__item">
              <div className="about__img-box">
                <img src={icon5} alt="icon" />
              </div>
              <div className="about__info">
                <div className="about__info-title">Доступные цены</div>
                Стоимость создания сайта – от 30 000, система ценообразования прозрачна и понятна.
              </div>
            </div>
            <div className="about__item">
              <div className="about__img-box">
                <img src={icon6} alt="icon" />
              </div>
              <div className="about__info">
                <div className="about__info-title">Ответственность за результат</div>
                Работаем с проектами любой сложности и тематики. Предоставляем гарантийную поддержку
                на 1 год.
              </div>
            </div>
            <div className="about__item">
              <div className="about__img-box">
                <img src={icon7} alt="icon" />
              </div>
              <div className="about__info">
                <div className="about__info-title">Надежный партнер</div>
                Мы всегда доводим дело до конца и не бросаем заказчиков с нерешенной проблемой или
                задачей.
              </div>
            </div>
            <div className="about__item">
              <div className="about__img-box">
                <img src={icon8} alt="icon" />
              </div>
              <div className="about__info">
                <div className="about__info-title">Опытная команда</div>
                Наша команда сложилась давно, работает быстро и с удовольствием.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
