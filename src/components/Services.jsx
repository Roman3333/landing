import React from 'react';
import { motion } from 'framer-motion';

import garant1 from '../../src/img/garant1.png';
import garant2 from '../../src/img/garant2.png';
import garant3 from '../../src/img/garant3.png';
import garant4 from '../../src/img/garant4.png';

const textAnimation = {
  hidden: {
    y: -70,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 2 },
  }),
};

const Services = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" className="services" id="services">
      <div className="container">
        <h1 className="services__title">Разработка и поддержка сайтов с гарантией результата</h1>
        <div className="services__items">
          <motion.div variants={textAnimation} className="services__item">
            <h3 className="services__item-title">Разработка</h3>
            <p className="services__item-suptitle">
              Качественный сайт по <strong>оптимальной цене</strong>
            </p>
            <p className="services__item-text">
              Разрабатываем сайты, которые решают бизнес-задачи. За 8 лет нами создано 40+ проектов
              для компаний из различных отраслей.
            </p>
            <p className="services__item-text">Возвращаем деньги если нарушим сроки.</p>
          </motion.div>
          <motion.div variants={textAnimation} className="services__item">
            <h3 className="services__item-title">Поддержка</h3>
            <p className="services__item-suptitle">
              Поддержка сайта по <strong>оптимальной цене</strong>
            </p>
            <p className="services__item-text">
              Осуществляем комплекс задач, который связан с обеспечением стабильной работы проекта
            </p>
            <p className="services__item-text">
              Если не будет результатов — заплатим вам за невыполненные обязательства.
            </p>
          </motion.div>
          <motion.div variants={textAnimation} className="services__item">
            <h3 className="services__item-title">Доработка</h3>
            <p className="services__item-suptitle">
              Доработка сайта по <strong>оптимальной цене</strong>
            </p>
            <p className="services__item-text">
              Возникли вопросы по работе сайта или CMS? Хотите усовершенствовать сайт, доработать
              функционал? Мы предоставляем гарантийное обслуживание и предлагаем выгодные тарифы
              технической поддержки.
            </p>
            <p className="services__item-text">Возвращаем деньги если нарушим сроки.</p>
          </motion.div>
        </div>
        <div className="services__guarantee">
          <div className="services__guarantee-item">
            <div className="services__guarantee-img">
              <img src={garant1} alt="garant-1" />
            </div>
            <div className="services__guarantee-title">Гарантия сроков</div>
            <div className="services__guarantee-desc">
              В случае нарушения сроков пересчитаем стоимость услуг.
            </div>
          </div>
          <div className="services__guarantee-item">
            <div className="services__guarantee-img">
              <img src={garant2} alt="garant-1" />
            </div>
            <div className="services__guarantee-title">Гарантия сервиса</div>
            <div className="services__guarantee-desc">
              С вами будет работать команда, имеющая подтверждение опыта и обучения.
            </div>
          </div>
          <div className="services__guarantee-item">
            <div className="services__guarantee-img">
              <img src={garant3} alt="garant-1" />
            </div>
            <div className="services__guarantee-title">Гарантия результата</div>
            <div className="services__guarantee-desc">
              Если мы не достигнем результатов — вернем деньги за невыполненные обязательства.
            </div>
          </div>
          <div className="services__guarantee-item">
            <div className="services__guarantee-img">
              <img src={garant4} alt="garant-1" />
            </div>
            <div className="services__guarantee-title">Гарантия стоимости</div>
            <div className="services__guarantee-desc">
              Цена фиксируется в договоре и не может быть изменена без согласования с клиентом.
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
