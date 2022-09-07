import React from 'react';

const NotFoundBlock = () => {
  return (
    <div className="not-found">
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className="not-fount__text">Данная страница отсутствует на нашем сайте</p>
    </div>
  );
};

export default NotFoundBlock;
