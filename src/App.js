import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './scss/main.scss';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />

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
