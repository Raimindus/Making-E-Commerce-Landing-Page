import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card,
  CardBody,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row
} from 'reactstrap';

import Vector from '../assets/image/Vector.png';
import VectorFlip from '../assets/image/VectorFlip.png';
import FooterModule from '../components/Footer';
import HeaderModule from '../components/Header';
import SideBar from '../components/Sidebar';
// import { getBinarById } from '../services/MobilApi';
import carPrice from '../hooks/carPrice';
// import { selectDateRange } from '../redux/features/dateSlice';
import { getDetailOrder, selectDetailOrder } from '../redux/features/carSlice';

function Pembayaran() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  // const dates = useSelector(selectDateRange);
  const detailOrder = useSelector(selectDetailOrder);
  const { orderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dateDiff, detailMobil } = carPrice();

  const firstDate = dayjs(detailOrder.start_rent_at)
  const lastDate = dayjs(detailOrder.finish_rent_at)
  const date1 = firstDate.format('YYYY-MM-DD');
  const date2 = lastDate.format('YYYY-MM-DD');

  const handleOpen = () => {
    setClose(false);
    setOpen(true);
  };

  const handleClose = () => {
    setClose(true);
    setOpen(false);
  };

  useEffect(() => {
    console.log(orderId, "testtt");
    dispatch(getDetailOrder(orderId));
  }, [orderId]);

  if (!detailOrder) return <div>Loading...</div>;

  return (
    <div style={{ margin: 'auto' }}>
      <SideBar />
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
                <p>{date1}</p>
              </Col>
              <Col sm={3}>
                <p>Tanggal Akhir Sewa</p>
                <br />
                <p>{date2}</p>
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
                <br />
                <ListGroup flush>
                  <ListGroupItem>
                    <Row>
                      {' '}
                      <Card
                        style={{
                          width: '61px',
                          height: '30px',
                          paddingLeft: '14px',
                          paddingTop: '2px'
                        }}
                      >
                        BCA
                      </Card>
                      &nbsp;&nbsp;&nbsp;BCA Transfer
                    </Row>
                  </ListGroupItem>
                  <br />
                  <ListGroupItem>
                    <Row>
                      {' '}
                      <Card
                        style={{
                          width: '61px',
                          height: '30px',
                          paddingLeft: '15px',
                          paddingright: '0px',
                          paddingTop: '2px'
                        }}
                      >
                        BNI
                      </Card>
                      &nbsp;&nbsp;&nbsp;BNI Transfer
                    </Row>
                  </ListGroupItem>
                  <br />
                  <ListGroupItem>
                    {' '}
                    <Row>
                      {' '}
                      <Card
                        style={{
                          width: '61px',
                          height: '30px',
                          paddingLeft: '4px',
                          paddingRight: '0px',
                          paddingTop: '2px'
                        }}
                      >
                        Mandiri
                      </Card>
                      &nbsp;&nbsp;&nbsp;Mandiri Transfer
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <CardBody>
                <p>{detailMobil.name}</p>
                <p>{detailMobil.category}</p>
                {open && (
                  <div>
                    {' '}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <p>
                        Total &nbsp;{' '}
                        <a href="#" type="button" onClick={handleClose}>
                          <img src={Vector} alt="dropdown" />
                        </a>{' '}
                      </p>
                      <p>&nbsp; Rp. {detailOrder.total_price}</p>
                    </div>
                    <p>Harga</p>
                    <ul>
                      <li>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          <p>
                            Sewa Mobil Rp. {detailMobil.price} x {dateDiff} Hari
                          </p>
                          Rp. {detailOrder.total_price}{' '}
                        </div>
                      </li>
                    </ul>
                    <p>Biaya Lainnya</p>
                    <ul>
                      <li>
                        {' '}
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          Pajak <p style={{ color: '#5CB85F' }}>Termasuk</p>
                        </div>
                      </li>
                      <li>
                        {' '}
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          Biaya makan sopir{' '}
                          <p style={{ color: '#5CB85F' }}>Termasuk</p>
                        </div>
                      </li>
                    </ul>
                    <p>Belum Termasuk</p>
                    <ul>
                      <li>Bensin</li>
                      <li>Tol dan parkir</li>
                    </ul>
                    <br />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <p>Total &nbsp; </p>
                      <p>&nbsp; Rp. {detailOrder.total_price}</p>
                    </div>
                    <br />
                  </div>
                )}
                {close && (
                  <div>
                    {' '}
                    <p>
                      Total &nbsp;{' '}
                      <a href="#" type="button" onClick={handleOpen}>
                        <img src={VectorFlip} alt="dropdown" />
                      </a>{' '}
                      &nbsp; Rp. {detailOrder.total_price}
                    </p>
                  </div>
                )}
                <button
                  onClick={() => navigate(`/Konfirmasi/${orderId}`)}
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterModule />
    </div>
  );
}

export default Pembayaran;
