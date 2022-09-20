import React from 'react';
import Media from 'react-media';

import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Price from '../components/Price';
import About from '../components/About';
import Form from '../components/Form';

const Home = ({ setPopupVisible }) => {
  // const screen1162 = window.matchMedia('(max-width: 1162px)');
  // const screen729 = window.matchMedia('(max-width: 729px)');

  return (
    <>
      <Services />
      {/* <Portfolio itemsPerPage={6} /> */}
      <Media
        queries={{
          small: '(max-width: 729px)',
          medium: '(min-width: 729px) and (max-width: 1162px)',
          large: '(min-width: 1200px)',
        }}>
        {(matches) => (
          <>
            {matches.small && <Portfolio itemsPerPage={2} />}
            {matches.medium && <Portfolio itemsPerPage={4} />}
            {matches.large && <Portfolio itemsPerPage={6} />}
          </>
        )}
      </Media>
      <Price setPopupVisible={setPopupVisible} />
      <About />
      <Form />
    </>
  );
};

export default Home;
