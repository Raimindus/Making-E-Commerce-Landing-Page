// import FlipCountdown from '@rumess/react-flip-countdown';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDropzone } from 'react-dropzone';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import FooterModule from '../components/Footer';
import HeaderModule from '../components/Header';
import getIDAbbrFromInternationalAbbr from '../helper/getIDAbbrFromInternationalAbbr';
import { getBinarById } from '../services/MobilApi';

function Konfirmasi() {
  const [detailMobil, setDetailMobil] = useState();
  const { binarId } = useParams();
  const navigate = useNavigate();
  const [bayar, setBayar] = useState(true);
  const [konfirm, setKonfirm] = useState(false);

  const date = '2022-09-01T12:54:11.277Z';

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const getDetailSewa = async () => {
    const res = await getBinarById(binarId);
    setDetailMobil(res.data);
  };

  const handleClick = () => {
    // 👇️ toggle shown state
    setKonfirm(true);
    setBayar(false);
  };

  useEffect(() => {
    getDetailSewa();
  }, []);

  if (!detailMobil) return <div>Loading...</div>;

  return (
    <div style={{ margin: 'auto' }}>
      <HeaderModule />
      <Container style={{ marginTop: '50px' }}>
        <Row>
          <Col md={7}>
            <Card>
              <CardBody>
                <Row>
                  <Col sm={8}>
                    <p className="dropdown">Selesaikan Pembayaran Sebelum</p>
                    <p>
                      {dayjs.tz(date).format('dddd, DD MMMM YYYY [jam] HH:mm ')}
                      {getIDAbbrFromInternationalAbbr(dayjs.tz(date).format('z'))}

                    </p>
                  </Col>
                  <Col sm={4}>
                    {/* <FlipCountdown
                      size="small"
                      hideYear
                      hideMonth
                      hideDay
                      theme="light"
                      hourTitle="jam"
                      minuteTitle="menit"
                      secondTitle="detik"
                      endAt={newDate} // Date/Time
                    /> */}
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardBody>
                <p className="dropdown">Lakukan Transfer Ke</p>
                <Row>
                  <Card
                    style={{
                      width: '61px',
                      height: '30px',
                      paddingLeft: '',
                      marginLeft: '10px',
                      marginRight: '20px'
                    }}
                  >
                    BCA
                  </Card>
                  BCA Transfer
                  <br />
                  a.n Binar Car Rental
                </Row>
                <br />
                Nomor Rekening
                <div>54104257877</div>
                <br />
                Total Bayar
                <div>Rp.</div>
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardBody>
                <p className="dropdown">Intruksi Pembayaran</p>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="ATM BCA">
                    <ul>
                      <li>Masukkan kartu ATM, lalu PIN</li>
                      <li>
                        Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek
                        BCA Virtual Account”
                      </li>
                      <li>
                        Masukkan nomor BCA Virtual Account: 70020+Order ID
                        <br />
                        Contoh:
                        <br /> No. Peserta: 12345678, maka ditulis 7002012345678
                      </li>
                      <li>
                        Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                        untuk menyelesaikan transaksi
                      </li>
                      <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                    </ul>
                  </Tab>
                  <Tab eventKey="mbca" title="M-BCA">
                    Heloo
                  </Tab>
                  <Tab eventKey="bcaklik" title="BCA Klik">
                    Hola
                  </Tab>
                  <Tab eventKey="internet" title="Internet Banking">
                    Hola
                  </Tab>
                </Tabs>
              </CardBody>
              <br />
              <br />
              <br />
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              {bayar && (
                <CardBody>
                  <p>Klik konfirmasi untuk mempercepat proses pengecekan</p>
                  <br />
                  <button
                    onClick={handleClick}
                    type="button"
                    style={{ width: '100%' }}
                    className="button1 shadow"
                  >
                    Bayar
                  </button>
                </CardBody>
              )}
              {konfirm && (
                <CardBody>
                  <p>Konfirmasi Pembayaran</p>
                  {/* <FlipCountdown
                    size="small"
                    hideYear
                    hideMonth
                    hideDay
                    hideHour
                    theme="light"
                    hourTitle="jam"
                    minuteTitle="menit"
                    secondTitle="detik"
                    endAt={newDateObj} // Date/Time
                  /> */}
                  <br />
                  Terima kasih telah melakukan konfirmasi pembayaran.
                  Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit
                  untuk mendapatkan konfirmasi.
                  <br />
                  <br />
                  <p>Upload Bukti Pembayaran</p>
                  <br />
                  Untuk membantu kami lebih cepat melakukan pengecekan. Kamu
                  bisa upload bukti bayarmu
                  <br />
                  <br />
                  <section className="container">
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                    <aside>
                      <h4>Files</h4>
                      <ul>{files}</ul>
                    </aside>
                  </section>
                  <br />
                  <button
                    onClick={() => {
                      navigate(`/Etiket/${detailMobil.id}`);
                    }}
                    type="button"
                    style={{ width: '100%' }}
                    className="button1 shadow"
                  >
                    Upload
                  </button>
                </CardBody>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <FooterModule />
    </div>
  );
}

export default Konfirmasi;
