import React from 'react';
import '../index.css';
import {Col, Container, Row} from 'reactstrap';
import Select from 'react-select';


const FaqModule = () => {

    const customStyles = {
        control: base => ({
          ...base,
          height: 56,
          minHeight: 56,
        })
      };

    return (
    <Container>
        <Row className="justify-content-between">
            <Col lg="4">
                <h2>Frequently Asked Question</h2>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col lg="7">
                <div className='dropdown'>
                    <Select styles={customStyles} placeholder='Apa saja syarat yang dibutuhkan?'/>
                </div>
                <br/>
                <div className="dropdown">
                    <Select styles={customStyles}  placeholder='Berapa hari minimal sewa mobil lepas kunci?'/>
                </div>
                <br/>
                <div className="dropdown">
                    <Select styles={customStyles}  placeholder='Berapa hari sebelumnya sebaiknya booking sewa mobil?'/>
                </div>
                <br/>
                <div className="dropdown">
                    <Select styles={customStyles}  placeholder='Apa Ada biaya antar-jemput?'/>
                </div>
                <br/>
                <div className="dropdown">
                    <Select styles={customStyles} placeholder='Bagaimana jika terjadi kecelakaan'/>
                </div>
            </Col>
        </Row>
    </Container>
    );
}

export default FaqModule;



