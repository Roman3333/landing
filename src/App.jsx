import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/main.scss';
function App() {
  return (
    <div className="app">
      <Header setAuthVisible={setAuthVisible} authVisible={authVisible} />
      <div className="content">
        <Routes>
          <Route path="/react-food" element={<Home />} />
          <Route
            path="/react-food/stock"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Stock />
              </Suspense>
            }
          />
          <Route
            path="/react-food/aboutUs"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/react-food/contacts"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Contacts />
              </Suspense>
            }
          />
          <Route
            path="/react-food/delivery"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Delivery />
              </Suspense>
            }
          />
          <Route
            path="/react-food/basket"
            element={
              <Suspense fallback={<div>Загрузка корзины</div>}>
                <Basket />
              </Suspense>
            }
          />
          <Route path="/react-food/pizza/:id" element={<FullItemPage />} />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
