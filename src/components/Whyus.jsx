import React from 'react';
import '../index.css';
import { Row, Col, Container, Card } from 'reactstrap';
import icon_thumb from '../assets/image/icon_thumb.png';
import icon_price from '../assets/image/icon_price.png';
import icon_clock from '../assets/image/icon_clock.png';
import icon_medal from '../assets/image/icon_medal.png';

const WhyusModule = () => {
  return (
    <div>
      <Container>
        <h2>Why Us?</h2>
        <br />
        <p>Mengapa harus milih Binar Car Rental?</p>
        <br />
      </Container>
      <Container>
        <div
          className="d-flex flex-wrap justify-content-around"
          style={{ gap: '32px' }}>
          <Card className="cardWhy">
            <div className="card-body">
              <img src={icon_thumb} />
              <br />
              <br />
              <h3>Mobil Lengkap</h3>
              <p className="card-text">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </Card>
          <Card className="cardWhy">
            <div className="card-body">
              <img src={icon_price} />
              <br />
              <br />
              <h3>Harga Murah</h3>
              <p className="card-text">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </Card>
          <Card className="cardWhy">
            <div className="card-body">
              <img src={icon_clock} />
              <br />
              <br />
              <h3>Layanan 24 Jam</h3>
              <p className="card-text">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </Card>
          <Card className="cardWhy">
            <div className="card-body">
              <img src={icon_medal} />
              <br />
              <br />
              <h3>Sopir Profesional</h3>
              <p class="card-text">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default WhyusModule;
