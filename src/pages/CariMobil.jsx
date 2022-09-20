import HeaderModule from '../components/Header';
import FooterModule from '../components/Footer';
import HeroModule from '../components/Hero';
import SearchModule from '../components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import SideBar from '../components/Sidebar';

function CariMobil() {
  return (
    <div>
      <SideBar />
      <div
        style={{
          backgroundColor: '#F1F3FF',
          position: 'relative',
          zIndex: '-2'
        }}>
        <HeaderModule />
        <HeroModule />
      </div>
      <SearchModule />
      <br />
      <br />
      <br />
      <br />
      <FooterModule />
    </div>
  );
}

export default CariMobil;
