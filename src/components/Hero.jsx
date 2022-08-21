import React from 'react';
import '../index.css';
import {Col, Row, Container} from 'reactstrap';
import img_car from '../assets/image/img_car.png';
import {useNavigate} from 'react-router-dom';


const HeroModule = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/CariMobil');
    }

    return(
        <Container fluid px="0" mx="0" className='banner' style={{height:'100%', backgroundColor:'#F1F3FF'}}>
            <Container>
                <Row className='main-container'>
                    <Col md="6" mt="5" pt="5" >
                        <div>
                            <h1>Sewa & Rental Mobil Terbaik di<br/>kawasan (Lokasimu)</h1>
                        </div>
                        <div pt="3">
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas<br/> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu<br/> untuk sewa mobil selama 24 jam.</p>
                        </div>
                        <div pt="2">
                            <button onClick={handleClick} type="button" className='button1 shadow'>Mulai Sewa Mobil</button>
                        </div>
                    </Col>
                    <Col md="6">
                        <img flex src={img_car} className='mobils'  alt="mobil"/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default HeroModule;