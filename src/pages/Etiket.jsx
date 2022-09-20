import React from 'react';
import { Card, CardBody, Container } from 'reactstrap';
import FooterModule from '../components/Footer';
import HeaderModule from '../components/Header';
import icon_success from '../assets/image/icon_success.png';
import button_download from '../assets/image/button_download.png';

const Etiket = () => {
  return (
    <div>
      <HeaderModule />
      <br />
      <br />
      <Container>
        <div className="text-center">
          <img src={icon_success} alt="success" />
          <h3>Pembayaran Berhasil!</h3>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>
        <Card>
          <CardBody>
            <h3>Invoice</h3>
            <p>*no invoice</p>
            <img src={button_download} alt="download" />
          </CardBody>
        </Card>
      </Container>
      <br />
      <FooterModule />
    </div>
  );
};

export default Etiket;
