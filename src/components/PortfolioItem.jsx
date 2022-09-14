import React from 'react';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const PortfolioItem = ({ title, desc, img, href }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={textAnimation}
      className="portfolio__item">
      <a className="portfolio__link" href={href} target="_blank">
        <div className="portfolio__img">
          <img src={img} alt="work1" />
          <div className="portfolio__back-box">
            <div className="portfolio__back">
              Смотреть проект
              <svg
                width="32"
                height="13"
                viewBox="0 0 32 13"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                data-svg="arrow-right">
                <path
                  d="M31.5303 7.03033C31.8232 6.73744 31.8232 6.26257 31.5303 5.96967L26.7574 1.1967C26.4645 0.903808 25.9896 0.903808 25.6967 1.1967C25.4038 1.48959 25.4038 1.96447 25.6967 2.25736L29.9393 6.5L25.6967 10.7426C25.4038 11.0355 25.4038 11.5104 25.6967 11.8033C25.9896 12.0962 26.4645 12.0962 26.7574 11.8033L31.5303 7.03033ZM-6.55671e-08 7.25L31 7.25L31 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
                  fill="white"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="portfolio__title">{title}</div>
        <div className="portfolio__desc">{desc}</div>
      </a>
    </motion.div>
  );
};

export default PortfolioItem;
