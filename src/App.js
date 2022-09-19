import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CariMobil from './pages/CariMobil';
import DetailSewa from './pages/DetailSewa';
import Etiket from './pages/Etiket';
import LandingPage from './pages/LandingPage';
import Pembayaran from './pages/Pembayaran';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/CariMobil" element={<CariMobil />} />
          <Route path="/DetailSewa/:binarId" element={<DetailSewa />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Pembayaran/:binarId" element={<Pembayaran />} />
          <Route path="/Etiket" element={<Etiket />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
