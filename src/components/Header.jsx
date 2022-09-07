import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link" href="#">
              О нас
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
      </nav>
    </header>
  );
};

export default Header;
