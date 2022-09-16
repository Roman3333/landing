import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';

import PortfolioItem from './PortfolioItem';

import work1 from '../../src/img/work1.jpg';
import work2 from '../../src/img/work2.jpg';
import work3 from '../../src/img/work3.jpg';
import work4 from '../../src/img/work4.jpg';
import work5 from '../../src/img/work5.jpg';
import work6 from '../../src/img/work6.jpg';
import work7 from '../../src/img/work7.jpg';
import work8 from '../../src/img/work8.jpg';
import work9 from '../../src/img/work9.jpg';
import work10 from '../../src/img/work10.jpg';
import work11 from '../../src/img/work11.jpg';
import work12 from '../../src/img/work12.jpg';

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

const items = [
  {
    title: ' Чемпион',
    desc: 'Корпоративный сайт для шахматного клуба',
    img: work9,
    href: 'https://chess-sibay.ru/',
    animation: true,
  },
  {
    title: 'Уютный',
    desc: 'Корпоративный сайт для гостевого дома',
    img: work10,
    href: 'https://hotel-sibai.ru/',
  },
  {
    title: 'Центр культуры и досуга',
    desc: 'Городской, новостной портал',
    img: work3,
    href: 'https://sibay-cnkid.ru/',
  },
  {
    title: 'Общество урологов',
    desc: 'Портал в сфере здравохранения',
    img: work11,
    href: 'https://ourorb.ru/',
  },
  {
    title: 'С150',
    desc: 'Интернет магазин по продаже магнитол',
    img: work5,
    href: 'https://s150.ru/',
  },
  {
    title: 'Прозрение',
    desc: 'Портал в сфере здравохране',
    img: work2,
    href: 'http://prozrenie.ru/',
  },
  {
    title: 'Нэлт',
    desc: 'Корпоративный сайт по продаже оборудования в области слаботочных систем',
    img: work4,
    href: 'http://nelt.ru/',
  },
  {
    title: 'Шнайдер Электрик',
    desc: 'Корпоративный сайт, посвященный системам безопасности ESMI',
    img: work1,
    href: 'http://www.esmisys.ru/',
  },

  {
    title: 'TOA',
    desc: 'Корпоративный сайт по продаже звукового и коммуникационного оборудования',
    img: work7,
    href: 'http://www.toa-sound.ru/',
  },
  {
    title: 'Эрикссон ЛГ',
    desc: 'Корпоративный сайт по продаже оборудования для связи',
    img: work6,
    href: 'http://www.lg-ats.ru/',
  },
  {
    title: 'Спарта',
    desc: 'Корпоративный сайт для коллегии адвокатов',
    img: work8,
    href: 'https://aksparta.ru/',
  },
  {
    title: 'МобаТайм',
    desc: 'Корпоративный сайт по продаже часов',
    img: work12,
    href: 'http://www.moba-time.ru/',
  },
];

const Portfolio = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState(items);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={textAnimation}
          viewport={{ once: true }}
          className="portfolio__main-title">
          Наши работы
        </motion.h2>
        <div className="portfolio__items">
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            className="portfolio__item">
            <a className="portfolio__link" href="https://aviamed.ru/" target="_blank">
              <div className="portfolio__img">
                <img src={work1} alt="work1" />
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
              <div className="portfolio__title">Aviamed</div>
              <div className="portfolio__desc">Портал в сфере здравохранения</div>
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            className="portfolio__item">
            <a className="portfolio__link" href="http://prozrenie.ru/" target="_blank">
              <div className="portfolio__img">
                <img src={work2} alt="work2" />
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
              <div className="portfolio__title">Prozrenie</div>
              <div className="portfolio__desc">Корпоративный сайт о: бла бла бла бла бла </div>
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            className="portfolio__item">
            <a className="portfolio__link" href="http://nelt.ru/" target="_blank">
              <div className="portfolio__img">
                <img src={work4} alt="work4" />
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
              <div className="portfolio__title">Nelt</div>
              <div className="portfolio__desc">Портал в сфере здравохранения </div>
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            className="portfolio__item">
            <a className="portfolio__link" href="https://sibay-cnkid.ru/" target="_blank">
              <div className="portfolio__img">
                <img src={work3} alt="work3" />
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
              <div className="portfolio__title">Sibay-cnkid</div>
              <div className="portfolio__desc">Портал в сфере здравохранения </div>
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            className="portfolio__item">
            <a className="portfolio__link" href="https://aviamed.ru/" target="_blank">
              <div className="portfolio__img">
                <img src={work1} alt="work1" />
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
              <div className="portfolio__title">Aviamed</div>
              <div className="portfolio__desc">Портал в сфере здравохранения </div>
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            className="portfolio__item">
            <a className="portfolio__link" href="https://aviamed.ru/" target="_blank">
              <div className="portfolio__img">
                <img src={work1} alt="work1" />
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
              <div className="portfolio__title">Aviamed</div>
              <div className="portfolio__desc">Портал в сфере здравохранения </div>
            </a>
          </motion.div> */}
          {currentItems.map((item, index) => {
            return <PortfolioItem {...item} key={index} />;
          })}
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
