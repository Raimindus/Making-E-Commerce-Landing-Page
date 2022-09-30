import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import FooterModule from '../components/Footer';
import HeaderModule from '../components/Header';
import { getDetailCars, selectDetailCars } from '../redux/features/carSlice';
import { selectDateRange } from '../redux/features/dateSlice';
// import { getBinarById } from '../services/MobilApi';

function Pembayaran() {
  const dates = useSelector(selectDateRange);
  const detailMobil = useSelector(selectDetailCars);
  const { binarId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(dates);

  const date1 = dayjs(dates[0]);
  const date2 = dayjs(dates[1]);
  const dateDiff = date2.diff(date1, 'day');
  console.log(dateDiff);

  console.log(date1);
  console.log(date2);

  const finalPrice = dateDiff * detailMobil.price;

  // const getDetailSewa = async () => {
  //   const res = await getBinarById(binarId);
  //   setDetailMobil(res.data);
  // };

  useEffect(() => {
    dispatch(getDetailCars(binarId));
  }, [binarId]);

  if (!detailMobil) return <div>Loading...</div>;

  return (
    <div style={{ margin: 'auto' }}>
      <HeaderModule />
      <div
        style={{
          height: '200px',
          backgroundColor: '#F1F3FF',
          position: 'relative',
          zIndex: '-2'
        }}
      />
      <Container style={{ marginTop: '-50px' }}>
        <Card>
          <CardBody>
            <p className="dropdown">Detail Pesananmu</p>
            <Row>
              <Col sm={3}>
                <p>Nama/Tipe Mobil</p>
                <br />
                <p>{detailMobil.name}</p>
              </Col>
              <Col sm={3}>
                <p>Kategori</p>
                <br />
                <p>{detailMobil.category}</p>
              </Col>
              <Col sm={3}>
                <p>Tanggal Mulai Sewa</p>
                <br />
                <p>{dates[0]}</p>
              </Col>
              <Col sm={3}>
                <p>Tanggal Akhir Sewa</p>
                <br />
                <p>{dates[1]}</p>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <br />
        <Row>
          <Col md={7}>
            <Card>
              <CardBody>
                <p className="dropdown">Pilih Bank Transfer</p>
                <p>
                  Kamu bisa membayar dengan transfer melalui ATM, Internet
                  Banking atau Mobile Banking
                </p>
                <Row>
                  <Card
                    style={{ width: '61px', height: '30px', paddingLeft: '' }}
                  >
                    BCA
                  </Card>
                  BCA Transfer
                </Row>
                <br />
                <Row>
                  <Card
                    style={{ width: '61px', height: '30px', paddingLeft: '' }}
                  >
                    BNI
                  </Card>
                  BNI Transfer
                </Row>
                <br />
                <Row>
                  <Card
                    style={{ width: '61px', height: '30px', paddingLeft: '' }}
                  >
                    Mandiri
                  </Card>
                  Mandiri Transfer
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <CardBody>
                <p>{detailMobil.name}</p>
                <p>{detailMobil.category}</p>
                <p>Total Rp. {finalPrice}</p>
                <p>Harga</p>
                <ul>
                  <li>Sewa Mobil Rp. {detailMobil.price} x {dateDiff} Hari Rp. {finalPrice} </li>
                </ul>
                <p>Biaya Lainnya</p>
                <ul>
                  <li>Pajak</li>
                  <li>Biaya makan sopir</li>
                </ul>
                <p>Belum Termasuk</p>
                <ul>
                  <li>Bensin</li>
                  <li>Tol dan parkir</li>
                </ul>
                <br />
                <p>Total</p>
                <br />
                <button
                  onClick={() => {
                    navigate(`/Konfirmasi/${detailMobil.id}`);
                  }}
                  type="button"
                  style={{ width: '100%' }}
                  className="button1 shadow"
                >
                  Bayar
                </button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <FooterModule />
    </div>
  );
}

export default Pembayaran;
