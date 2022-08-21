import React from 'react';
import '../index.css';
import {Col, Row, Container} from 'reactstrap';
import img_girl from '../assets/image/img_girl.png';

const ServicesModule = () => {

    return (
        <Container mt="5">
            <Row className="justify-content-evenly">
                <Col md="5" mt="5" pt='3' ps="0">
                    <img src={img_girl} alt="girl" style={{maxWidth:'100%', height:'auto'}}/>
                </Col>
                <Col md="5" pt="5" mt="5">
                <h2><br/>Best Car Rental for any kind of trip in<br/>(Lokasimu)!</h2><br/>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga<br/>lebih murah
                dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk
                perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul className='list1'>
                    <li className='list2'><span className="listo">Sewa Mobil dengan Supir di Bali 12 Jam</span></li>
                    <li className='list2'><span className="listo">Sewa Mobil Lepas Kunci di Bali 24 Jam</span></li>
                    <li className='list2'><span className="listo">Sewa Mobil Jangka Panjang Bulanan</span></li>
                    <li className='list2'><span className="listo">Gratis Antar - Jemput Mobil di Bandara</span></li>
                    <li className='list2'><span className="listo">Layanan Airport Transfer / Drop in Out</span></li>
                </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default ServicesModule;