
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LandingPage from './pages/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CariMobil from './pages/CariMobil'
import DetailSewa from './pages/DetailSewa';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>  
          <Route path='/' element={<LandingPage/>} />
          <Route path='/CariMobil' element ={<CariMobil/>} />
          <Route path='/DetailSewa/:binarId' element ={<DetailSewa/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
