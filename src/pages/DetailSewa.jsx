import React, { useEffect } from 'react';
import DatePicker from 'react-multi-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';

import FooterModule from '../components/Footer';
import HeaderModule from '../components/Header';
import SearchModule from '../components/Search';
import { getDetailCars, selectDetailCars } from '../redux/features/carSlice';
import { dateRange } from '../redux/features/dateSlice';
// import { getBinarById } from '../services/MobilApi';

function DetailSewa() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailMobil = useSelector(selectDetailCars);
  const { binarId } = useParams();

  const handleChange = (value) => {
    dispatch(dateRange([value[0].format(), value[1].format()]));
  };

  // const getDetailSewa = async () => {
  //   const res = await getBinarById(binarId);
  //   setDetailMobil(res.data);
  // };

  useEffect(() => {
    dispatch(getDetailCars(binarId));
  }, [binarId]);

  if (!detailMobil) return <div>Loading...</div>;
  return (
    <div>
      <HeaderModule />
      <div
        style={{
          height: '200px',
          backgroundColor: '#F1F3FF',
          position: 'relative',
          zIndex: '-2'
        }}
      />
      <SearchModule disabled />
      <Container>
        <Row>
          <Col md={7}>
            <Card className="shadow">
              <CardBody>
                <p>Tentang Paket</p>
                <br />
                <p>Include</p>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <br />
                <p>Exclude</p>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <br />
                <p>Refund, Reschedule, Overtime</p>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="shadow">
              <CardBody>
                <img
                  alt="detil mobil"
                  src={detailMobil.image}
                  style={{ width: '100%' }}
                />
                <div>
                  <p>{detailMobil.name}</p>
                  <p>{detailMobil.category}</p>
                  <br />
                  <label htmlFor="datePicker">
                    Tentukan lama sewa mobil (max. 7 hari)
                  </label>
                  <DatePicker onChange={handleChange} range />
                  <br />
                  <br />
                  <Container
                    fluid
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>
                      <p>Total</p>
                    </div>
                    <div>
                      <p>Rp. {detailMobil.price}</p>
                    </div>
                  </Container>
                  <br />
                </div>
                <Button
                  className="dropdown"
                  style={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '2px',
                    backgroundColor: '#5CB85F',
                    borderColor: 'transparent'
                  }}
                  onClick={() => {
                    navigate(`/Pembayaran/${detailMobil.id}`);
                  }}
                >
                  Lanjutkan Pembayaran
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <FooterModule />
    </div>
  );
}

export default DetailSewa;
