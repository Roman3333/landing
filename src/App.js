import React, { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

import './scss/main.scss';

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="app">
      <Header
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
      />

      <main className="main">
        <Home setPopupVisible={setPopupVisible} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
