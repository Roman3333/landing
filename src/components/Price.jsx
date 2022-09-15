import React from 'react';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    x: -40,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Price = ({ setPopupVisible }) => {
  const stopDefault = (e) => {
    e.preventDefault();
    setPopupVisible(true);
  };
  return (
    <section className="price" id="price">
      <div className="container">
        <h3 className="price__title">Цены на услуги разработки сайта под ключ</h3>
        <div className="price__items">
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            viewport={{ once: true }}
            className="price__item">
            <div className="price__name">
              Доработка <span> сайта</span>
            </div>
            <div className="price__price">от 1 000 ₽</div>
            <div className="price__link-box">
              <a className="price__link" href="#" onClick={stopDefault}>
                Отправить заявку
                <svg
                  width="32"
                  height="13"
                  viewBox="0 0 32 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="arrow-right">
                  <path
                    d="M31.5303 7.03033C31.8232 6.73744 31.8232 6.26257 31.5303 5.96967L26.7574 1.1967C26.4645 0.903808 25.9896 0.903808 25.6967 1.1967C25.4038 1.48959 25.4038 1.96447 25.6967 2.25736L29.9393 6.5L25.6967 10.7426C25.4038 11.0355 25.4038 11.5104 25.6967 11.8033C25.9896 12.0962 26.4645 12.0962 26.7574 11.8033L31.5303 7.03033ZM-6.55671e-08 7.25L31 7.25L31 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
                    fill="currentcolor"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            viewport={{ once: true }}
            className="price__item">
            <div className="price__name">
              Создание <span>landing page</span> (одностраничника)
            </div>
            <div className="price__price">от 30 000 ₽</div>
            <div className="price__link-box">
              <a className="price__link" href="#" onClick={stopDefault}>
                Отправить заявку
                <svg
                  width="32"
                  height="13"
                  viewBox="0 0 32 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="arrow-right">
                  <path
                    d="M31.5303 7.03033C31.8232 6.73744 31.8232 6.26257 31.5303 5.96967L26.7574 1.1967C26.4645 0.903808 25.9896 0.903808 25.6967 1.1967C25.4038 1.48959 25.4038 1.96447 25.6967 2.25736L29.9393 6.5L25.6967 10.7426C25.4038 11.0355 25.4038 11.5104 25.6967 11.8033C25.9896 12.0962 26.4645 12.0962 26.7574 11.8033L31.5303 7.03033ZM-6.55671e-08 7.25L31 7.25L31 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
                    fill="currentcolor"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            viewport={{ once: true }}
            className="price__item">
            <div className="price__name">
              Создание <span>cайта-визитки</span> (многостраничника)
            </div>
            <div className="price__price">от 40 000 ₽</div>
            <div className="price__link-box">
              <a className="price__link" href="#" onClick={stopDefault}>
                Отправить заявку
                <svg
                  width="32"
                  height="13"
                  viewBox="0 0 32 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="arrow-right">
                  <path
                    d="M31.5303 7.03033C31.8232 6.73744 31.8232 6.26257 31.5303 5.96967L26.7574 1.1967C26.4645 0.903808 25.9896 0.903808 25.6967 1.1967C25.4038 1.48959 25.4038 1.96447 25.6967 2.25736L29.9393 6.5L25.6967 10.7426C25.4038 11.0355 25.4038 11.5104 25.6967 11.8033C25.9896 12.0962 26.4645 12.0962 26.7574 11.8033L31.5303 7.03033ZM-6.55671e-08 7.25L31 7.25L31 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
                    fill="currentcolor"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            viewport={{ once: true }}
            className="price__item">
            <div className="price__name">
              Создание <span>корпоративного сайта</span>{' '}
            </div>
            <div className="price__price">от 100 000 ₽</div>
            <div className="price__link-box">
              <a className="price__link" href="#" onClick={stopDefault}>
                Отправить заявку
                <svg
                  width="32"
                  height="13"
                  viewBox="0 0 32 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="arrow-right">
                  <path
                    d="M31.5303 7.03033C31.8232 6.73744 31.8232 6.26257 31.5303 5.96967L26.7574 1.1967C26.4645 0.903808 25.9896 0.903808 25.6967 1.1967C25.4038 1.48959 25.4038 1.96447 25.6967 2.25736L29.9393 6.5L25.6967 10.7426C25.4038 11.0355 25.4038 11.5104 25.6967 11.8033C25.9896 12.0962 26.4645 12.0962 26.7574 11.8033L31.5303 7.03033ZM-6.55671e-08 7.25L31 7.25L31 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
                    fill="currentcolor"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            viewport={{ once: true }}
            className="price__item">
            <div className="price__name">
              Создание <span>интернет-магазина</span>
            </div>
            <div className="price__price">от 150 000 ₽</div>
            <div className="price__link-box">
              <a className="price__link" href="#" onClick={stopDefault}>
                Отправить заявку
                <svg
                  width="32"
                  height="13"
                  viewBox="0 0 32 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="arrow-right">
                  <path
                    d="M31.5303 7.03033C31.8232 6.73744 31.8232 6.26257 31.5303 5.96967L26.7574 1.1967C26.4645 0.903808 25.9896 0.903808 25.6967 1.1967C25.4038 1.48959 25.4038 1.96447 25.6967 2.25736L29.9393 6.5L25.6967 10.7426C25.4038 11.0355 25.4038 11.5104 25.6967 11.8033C25.9896 12.0962 26.4645 12.0962 26.7574 11.8033L31.5303 7.03033ZM-6.55671e-08 7.25L31 7.25L31 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
                    fill="currentcolor"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            viewport={{ once: true }}
            className="price__item">
            <div className="price__name">
              Создание <span>маркетплейса</span>
            </div>
            <div className="price__price">от 800 000 ₽</div>
            <div className="price__link-box">
              <a className="price__link" href="#" onClick={stopDefault}>
                Отправить заявку
                <svg
                  width="32"
                  height="13"
                  viewBox="0 0 32 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="arrow-right">
                  <path
                    d="M31.5303 7.03033C31.8232 6.73744 31.8232 6.26257 31.5303 5.96967L26.7574 1.1967C26.4645 0.903808 25.9896 0.903808 25.6967 1.1967C25.4038 1.48959 25.4038 1.96447 25.6967 2.25736L29.9393 6.5L25.6967 10.7426C25.4038 11.0355 25.4038 11.5104 25.6967 11.8033C25.9896 12.0962 26.4645 12.0962 26.7574 11.8033L31.5303 7.03033ZM-6.55671e-08 7.25L31 7.25L31 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
                    fill="currentcolor"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            viewport={{ once: true }}
            className="price__item">
            <div className="price__name">
              Создание <span>портала</span>
            </div>
            <div className="price__price">от 800 000 ₽</div>
            <div className="price__link-box">
              <a className="price__link" href="#" onClick={stopDefault}>
                Отправить заявку
                <svg
                  width="32"
                  height="13"
                  viewBox="0 0 32 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="arrow-right">
                  <path
                    d="M31.5303 7.03033C31.8232 6.73744 31.8232 6.26257 31.5303 5.96967L26.7574 1.1967C26.4645 0.903808 25.9896 0.903808 25.6967 1.1967C25.4038 1.48959 25.4038 1.96447 25.6967 2.25736L29.9393 6.5L25.6967 10.7426C25.4038 11.0355 25.4038 11.5104 25.6967 11.8033C25.9896 12.0962 26.4645 12.0962 26.7574 11.8033L31.5303 7.03033ZM-6.55671e-08 7.25L31 7.25L31 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
                    fill="currentcolor"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Price;
