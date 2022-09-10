import React from 'react';

import Form from './Form';

const Header = ({ popupVisible, setPopupVisible }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="#services">
                Услуги
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#portfolio">
                Портфолио
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#price">
                Цены
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#about">
                О нас
              </a>
            </li>
          </ul>
          <div className="header__connect">
            <a href="tel:+79670673934" className="header__connect-link">
              +7-967-067-39-34
            </a>
            <a onClick={() => setPopupVisible(true)} href="#" className="header__connect-form">
              Заказать услуги
            </a>
          </div>
          <Form popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
