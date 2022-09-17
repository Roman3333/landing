import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

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
        <Routes>
          <Route path="/landing" element={<Home setPopupVisible={setPopupVisible} />} />

          {/* <Route path="/react-food/pizza/:id" element={<FullItemPage />} /> */}
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
