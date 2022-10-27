import FlipCountdown from '@rumess/react-flip-countdown';
import dayjs from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import FooterModule from '../components/Footer';
import HeaderModule from '../components/Header';
import HeaderStepper from '../components/HeaderStepper';
import SideBar from '../components/Sidebar';
import formatter from '../helper/currency';
import getIDAbbrFromInternationalAbbr from '../helper/getIDAbbrFromInternationalAbbr';
// import carPrice from '../hooks/carPrice';
import {
  getDetailOrder,
  putOrder,
  selectDetailOrder
} from '../redux/features/carSlice';
// import { getBinarById } from '../services/MobilApi';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

function Konfirmasi() {
  const navigate = useNavigate();
  // for data showing
  const detailOrder = useSelector(selectDetailOrder);

  // for dropzone
  const [files, setFiles] = useState([]);
  const { orderId } = useParams();
  const [bayar, setBayar] = useState(true);
  const [konfirm, setKonfirm] = useState(false);
  const dispatch = useDispatch();

  // const { handlePut } = carPrice();
  const dates = dayjs(detailOrder.createdAt);
  const newDate = dayjs(dates).add(1, 'day').format();
  const tenDate = dayjs(dates).add(10, 'minute').format();

  // also for dropzone
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      maxFiles: 1,
      accept: {
        'image/jpeg': [],
        'image/png': []
      },
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        );
      }
    });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt="thumbnail"
        />
      </div>
    </div>
  ));

  const bodyFormData = new FormData();
  bodyFormData.append('slip', files[0])

  const handlePut = async () => {
    try {
      const response = await dispatch(
        putOrder({ orderId, payload: bodyFormData })
      ).unwrap();
      console.log(response);
      navigate(`/Etiket/${response.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  // for UI state
  const handleClick = () => {
    // 👇️ toggle shown state
    setKonfirm(true);
    setBayar(false);
  };

  // for data showing
  useEffect(() => {
    dispatch(getDetailOrder(orderId));
  }, [orderId]);

  if (!detailOrder) return <div>Loading...</div>;

  return (
    <div style={{ margin: 'auto' }}>
      <SideBar />
      <HeaderModule />
      <div
        style={{
          height: '130px',
          backgroundColor: '#F1F3FF',
          position: 'relative',
          zIndex: '-2'
        }}
      >
        <br />
        <HeaderStepper active={1} orderID={orderId} />
      </div>
      <Container style={{ marginTop: '50px' }}>
        <Row>
          <Col md={7}>
            <Card>
              <CardBody>
                <Row>
                  <Col sm={8}>
                    <p className="dropdown">Selesaikan Pembayaran Sebelum</p>
                    <p>
                      {dayjs
                        .tz(newDate)
                        .format('dddd, DD MMMM YYYY [jam] HH:mm ')}
                      {getIDAbbrFromInternationalAbbr(
                        dayjs.tz(newDate).format('z')
                      )}
                    </p>
                  </Col>
                  <Col sm={4}>
                    <FlipCountdown
                      size="small"
                      hideYear
                      hideMonth
                      hideDay
                      theme="light"
                      hourTitle="jam"
                      minuteTitle="menit"
                      secondTitle="detik"
                      endAt={newDate} // Date/Time
                    />
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
                <div>{formatter.format(detailOrder.total_price)}</div>
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
                  <FlipCountdown
                    size="small"
                    hideYear
                    hideMonth
                    hideDay
                    hideHour
                    theme="light"
                    hourTitle="jam"
                    minuteTitle="menit"
                    secondTitle="detik"
                    endAt={tenDate} // Date/Time
                  />
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
                    <div {...getRootProps({ style })}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                      <em>(Only *.jpeg and *.png images will be accepted)</em>
                    </div>
                    <aside style={thumbsContainer}>{thumbs}</aside>
                  </section>
                  <br />
                  <button
                    onClick={() => {
                      handlePut();
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
