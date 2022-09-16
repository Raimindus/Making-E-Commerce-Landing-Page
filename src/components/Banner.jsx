import "../index.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container } from "reactstrap";

function BannerModule() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/CariMobil");
  };
  return (
    <div className="smallBanner">
      <Container px="4" my="5" className="text-center bluebanner">
        <h1 style={{ color: "white" }}>Sewa Mobil di (Lokasimu) Sekarang</h1>
        <br />
        <Col md={5} className="mx-auto">
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <div className="gap-2 d-sm-flex justify-content-sm-center buttonSized">
            <button
              onClick={handleClick}
              type="button"
              className="button1 shadow"
            >
              Mulai Sewa Mobil
            </button>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default BannerModule;
