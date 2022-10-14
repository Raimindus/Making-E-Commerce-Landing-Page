import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthWrapper from './components/AuthWrapper';
import CariMobil from './pages/CariMobil';
import DetailSewa from './pages/DetailSewa';
import Etiket from './pages/Etiket';
import Konfirmasi from './pages/Konfirmasi';
import LandingPage from './pages/LandingPage';
import Pembayaran from './pages/Pembayaran';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

require('dayjs/locale/id');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('id');
dayjs.tz.guess();
dayjs.extend(advancedFormat);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/CariMobil" element={<CariMobil />} />
            <Route path="/DetailSewa/:binarId" element={<DetailSewa />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Pembayaran/:orderId" element={<Pembayaran />} />
            <Route path="/Etiket/:orderId" element={<Etiket />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Konfirmasi/:orderId" element={<Konfirmasi />} />
          </Routes>
        </AuthWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
