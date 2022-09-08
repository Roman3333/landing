import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="#">
                Услуги
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">
                Портфолио
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">
                Цены
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">
                Контакты
              </a>
            </li>
          </ul>
          <div className="header__connect">
            <a href="tel:+79670673934" className="header__connect-link">
              +7-967-067-39-34
            </a>
            <a href="#" className="header__connect-form">
              Заказать услуги
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
