
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LandingPage from './pages/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CariMobil from './pages/CariMobil'
import DetailSewa from './pages/DetailSewa';
import SignIn from './pages/SignIn';
import Pembayaran from './pages/Pembayaran';
import Etiket from './pages/Etiket';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>  
          <Route path='/' element={<LandingPage/>} />
          <Route path='/CariMobil' element ={<CariMobil/>} />
          <Route path='/DetailSewa/:binarId' element ={<DetailSewa/>} />
          <Route path='/SignIn' element={<SignIn/>} />
          <Route path='/Pembayaran/:binarId' element={<Pembayaran/>} />
          <Route path='/Etiket' element={<Etiket/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
