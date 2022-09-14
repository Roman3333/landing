import React from 'react';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Price from '../components/Price';
import About from '../components/About';
import Form from '../components/Form';

const Home = ({ setPopupVisible }) => {
  return (
    <>
      <Services />
      <Portfolio itemsPerPage={6} />
      <Price setPopupVisible={setPopupVisible} />
      <About />
      <Form />
    </>
  );
};

export default Home;
