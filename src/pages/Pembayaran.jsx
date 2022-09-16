import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

import FooterModule from "../components/Footer";
import HeaderModule from "../components/Header";
import { getBinarById } from "../services/MobilApi";

function Pembayaran() {
  const [detailMobil, setDetailMobil] = useState();
  const { binarId } = useParams();

  const getDetailSewa = async () => {
    const res = await getBinarById(binarId);
    setDetailMobil(res.data);
  };

  useEffect(() => {
    getDetailSewa();
  }, []);

  if (!detailMobil) return <div>Loading...</div>;

  return (
    <div style={{ margin: "auto" }}>
      <HeaderModule />
      <div
        style={{
          height: "200px",
          backgroundColor: "#F1F3FF",
          position: "relative",
          zIndex: "-2",
        }}
      />
      <Container style={{ marginTop: "-50px" }}>
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
                <p />
              </Col>
              <Col sm={3}>
                <p>Tanggal Akhir Sewa</p>
                <br />
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
                    style={{ width: "61px", height: "30px", paddingLeft: "" }}
                  >
                    BCA
                  </Card>
                  BCA Transfer
                </Row>
                <br />
                <Row>
                  <Card
                    style={{ width: "61px", height: "30px", paddingLeft: "" }}
                  >
                    BNI
                  </Card>
                  BNI Transfer
                </Row>
                <br />
                <Row>
                  <Card
                    style={{ width: "61px", height: "30px", paddingLeft: "" }}
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
                <p>Harga</p>
                <ul>
                  <li>Sewa Mobil</li>
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
                <button type="button" style={{ width: "100%" }} className="button1 shadow">
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
