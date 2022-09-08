import React, {useState, useEffect} from 'react'
import HeaderModule from '../components/Header'
import FooterModule from '../components/Footer'
import { Card, Row, Col, Container, CardBody } from 'reactstrap'
import {getBinarById } from '../services/MobilApi'
import { useParams } from 'react-router-dom';

const Pembayaran = () => {
  const [detailMobil, setDetailMobil] = useState();
  const {binarId} = useParams();

  const getDetailSewa = async () => {
      const res = await getBinarById(binarId);
      setDetailMobil(res.data);
  }

  useEffect(() => {
      getDetailSewa();
  },[])

  if (!detailMobil) return <div>Loading...</div>;

  return (
    <div style={{margin:'auto'}}>
      <HeaderModule/>
      <div style={{height:'200px', backgroundColor:'#F1F3FF',position:'relative', zIndex:'-2'}}>
      </div>
        <Container style={{marginTop:"-50px"}}>
          <Card>
            <CardBody>
              <p className='dropdown'>Detail Pesananmu</p>
              <Row>
                <Col sm={3}>
                  <p>Nama/Tipe Mobil</p><br/>
                  <p>{detailMobil.name}</p>

                </Col>
                <Col sm={3}>
                  <p>Kategori</p><br/>
                  <p>{detailMobil.category}</p>
                </Col>
                <Col sm={3}>
                  <p>Tanggal Mulai Sewa</p><br/>
                  <p></p>
                </Col>
                <Col sm={3}>
                  <p>Tanggal Akhir Sewa</p><br/>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <br/>
          <Row>
            <Col md={7}>
              <Card>
                <CardBody>
                  <p className='dropdown'>Pilih Bank Transfer</p>
                  <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                  <div>
                    BCA Transfer
                  </div>
                  <div>
                    BNI Transfer
                  </div>
                  <div>
                    Mandiri Transfer
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={5}>
              <Card>
                <CardBody>
                  <img alt='detil mobil' src={detailMobil.image} style={{width:'100%'}}/>
                  <p>{detailMobil.name}</p>
                  <p>{detailMobil.category}</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <br/>
      <FooterModule/>
    </div>
  )
}

export default Pembayaran