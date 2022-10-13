import '../index.css';

import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Col, Container, Row } from 'reactstrap';

import icon_facebook from '../assets/image/icon_facebook.png';
import icon_instagram from '../assets/image/icon_instagram.png';
import icon_mail from '../assets/image/icon_mail.png';
import icon_twitch from '../assets/image/icon_twitch.png';
import icon_twitter from '../assets/image/icon_twitter.png';

function FooterModule() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </Col>
        <Col md={2} className="ps-5">
          <div className="headertext" style={{ marginRight: '1px' }}>
            <HashLink
              className="text-decoration-none"
              style={{ color: 'black' }}
              smooth
              to="/#services">
              <p>Our Services</p>
            </HashLink>
            <HashLink
              className="text-decoration-none"
              style={{ color: 'black' }}
              smooth
              to="/#about">
              <p>Why Us</p>
            </HashLink>
            <HashLink
              className="text-decoration-none"
              style={{ color: 'black' }}
              smooth
              to="/#testi">
              <p>Testimonials</p>
            </HashLink>
            <HashLink
              className="text-decoration-none"
              style={{ color: 'black' }}
              smooth
              to="/#faq">
              <p>FAQ</p>
            </HashLink>
          </div>
        </Col>
        <Col md={3} me={5}>
          <p>Connect with us</p>
          <Container className="px-0">
            <img className="socialbutton" src={icon_facebook} alt="facebook" />
            <img
              className="socialbutton"
              src={icon_instagram}
              alt="instagram"
            />
            <img className="socialbutton" src={icon_twitter} alt="twitter" />
            <img className="socialbutton" src={icon_mail} alt="email" />
            <img className="socialbutton" src={icon_twitch} alt="twitch" />
          </Container>
        </Col>
        <Col md={3}>
          <p>Copyright Binar 2022</p>
          <div className="bluebox" style={{ border: '0' }} />
        </Col>
      </Row>
      <br />
      <br />
    </Container>
  );
}

export default FooterModule;
