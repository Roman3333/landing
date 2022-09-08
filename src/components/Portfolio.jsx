import React from 'react';

import work1 from '../../src/img/work1.jpg';
import work2 from '../../src/img/work2.jpg';
import work3 from '../../src/img/work3.jpg';
import work4 from '../../src/img/work4.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio__items">
          <div className="portfolio__item">
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
          </div>
          <div className="portfolio__item">
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
          </div>
          <div className="portfolio__item">
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
          </div>
          <div className="portfolio__item">
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
          </div>
          <div className="portfolio__item">
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
          </div>
          <div className="portfolio__item">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
