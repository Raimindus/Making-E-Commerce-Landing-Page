import "../index.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

import GetMobil from "../hooks/getMobil";

function SearchModule(props) {
  const { disabled } = props;
  const navigate = useNavigate();

  const {
    search,
    setNama,
    setSelectedHarga,
    setSelectedKategori,
    binar,
  } = GetMobil();

  const options = [
    { value: "2 - 4 orang", label: "2 - 4 orang" },
    { value: "4 - 6 orang", label: "4 - 6 orang" },
    { value: "6 - 8 orang", label: "6 - 8 orang" },
  ];

  const harga = [
    { value: [0, 400000], label: "< Rp.400.000" },
    { value: [400000, 600000], label: "Rp.400.000-Rp.600.000" },
    { value: [600000, 10000000], label: "> Rp.600.000" },
  ];

  const status = [{ value: "false", label: "Disewa" }];

  return (
    <div>
      <div>
        <Container
          className="shadow text-center searchbar px-0"
          style={{ marginTop: "-50px" }}
        >
          <Row
            className="align-items-center justify-content-center m-0"
            style={{ height: "106px" }}
          >
            <Col md="10" px="0" style={{ marginLeft: "-28px" }}>
              <Row className="m-0">
                <Col md="3" pe="0">
                  <label className="labelsearch" htmlFor="namaMobil">
                    Nama Mobil

                  <br />
                  <input
                    onChange={(e) => {
                      setNama(e.target.value);
                    }}
                    type="text"
                    disabled={disabled}
                    className="namamobil searchform"
                    id="namaMobil"
                    placeholder="Ketik nama/tipe mobil"
                  />
                  </label>
                </Col>
                <Col md="3" pe="0">
                  <label className="labelsearch" htmlFor="kategori">
                    Kategori

                  <br />
                  <Select
                    onChange={(e) => {
                      setSelectedKategori(e.value);
                    }}
                    isDisabled={disabled}
                    options={options}
                    name="kategori"
                    id="kategori"
                    placeholder="Masukan kapasitas mobil"
                    className="namamobil"
                  />
                  </label>
                </Col>
                <Col md="3" pe="0">
                  <label className="labelsearch" htmlFor="harga">
                    Harga
                  </label>
                  <br />
                  <Select
                    onChange={(e) => {
                      setSelectedHarga(e.value);
                    }}
                    isDisabled={disabled}
                    options={harga}
                    name="harga"
                    id="harga"
                    placeholder="Masukan harga sewa perhari"
                    className="namamobil"
                  />
                </Col>
                <Col md="3" pe="0">
                  <label className="labelsearch" htmlFor="status">
                    Status
                  </label>
                  <br />
                  <Select
                    options={status}
                    isDisabled={disabled}
                    name="status"
                    id="status"
                    placeholder="Disewa"
                    className="namamobil"
                  />
                </Col>
              </Row>
            </Col>
            <Col md="1" style={{ paddingTop: "16px" }}>
              <button
                disabled={disabled}
                onClick={search}
                type="button"
                className="button2 shadow"
              >
                Cari Mobil
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <div>
        <Col lg={12} style={{ maxWidth: "1320px", margin: "auto" }}>
          <Row>
            {binar.map((car) => (
              <Col lg={4} key={car.id}>
                <Card style={{ height: "478px" }} className="mb-4">
                  <CardImg
                    alt="Card image cap"
                    src={car.image}
                    top
                    width="100%"
                    style={{ paddingBottom: "0px" }}
                  />
                  <CardBody className="shadow pb-0">
                    <CardTitle className="headertext" tag="h5">
                      {car.name}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted cardsubtitle"
                      tag="h6"
                    >
                      Rp. {car.price} / hari
                    </CardSubtitle>
                    <CardText className="dropdown">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </CardText>
                    <button
                      type="button"
                      className="button1"
                      onClick={() => {
                        navigate(`/DetailSewa/${car.id}`);
                      }}
                      style={{ width: "100%" }}
                    >
                      Pilih Mobil
                    </button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </div>
    </div>
  );
}

export default SearchModule;
