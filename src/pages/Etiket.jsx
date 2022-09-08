import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import FooterModule from '../components/Footer'
import HeaderModule from '../components/Header'
import icon_success from '../assets/image/icon_success.png';
import button_download from '../assets/image/button_download.png';


const Etiket = () => {
  return (
    <div>
      <HeaderModule/>
      <br/><br/>
        <Container >
          <div className='text-center'>
            <img src={icon_success} alt='success' />
            <br/><br/>
            <h3>Pembayaran Berhasil!</h3>
            <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
          </div>
          <Card style={{width:'50%', margin:'auto'}}>
            <CardBody>
              <Container style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h3>Invoice</h3>
                    <p>*no invoice</p>
                </div>
                <div>
                <img src={button_download} alt='download' />
                </div>
              </Container>

            </CardBody>
          </Card>
        </Container>
        <br/>
      <FooterModule/>
    </div>
  )
}

export default Etiket