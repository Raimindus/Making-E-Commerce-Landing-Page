import React from 'react';
import '../index.css';
import { Col, Row, Container } from 'reactstrap';
import { HashLink } from 'react-router-hash-link';

const HeaderModule = () => {
  return (
    <Container
      fluid
      px="0"
      style={{ paddingTop: '25px', backgroundColor: '#F1F3FF' }}>
      <Container pt="4" ms="0" me="0" px="0" className="headercon">
        <Row ms="0" className="justify-content-end headertext">
          <Col sm="1">
            <button className="bluebox" style={{ border: '0' }} />
          </Col>
          <Col sm="7"></Col>
          <Col sm="1">
            <HashLink
              className="text-decoration-none"
              style={{ color: 'black' }}
              smooth
              to="/#services">
              Our Services
            </HashLink>
          </Col>
          <Col sm="1">
            <HashLink
              className="text-decoration-none"
              style={{ color: 'black' }}
              smooth
              to="/#about">
              About Us
            </HashLink>
          </Col>
          <Col sm="1">
            <HashLink
              className="text-decoration-none"
              style={{ color: 'black' }}
              smooth
              to="/#testi">
              Testimonial
            </HashLink>
          </Col>
          <Col sm="1">
            <HashLink
              className="text-decoration-none"
              style={{ color: 'black' }}
              smooth
              to="/#faq">
              FAQ
            </HashLink>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeaderModule;
