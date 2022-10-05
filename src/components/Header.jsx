import '../index.css';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Col, Container, Row } from 'reactstrap';

function HeaderModule() {
  const [access, setAccess] = useState(false);
  const [noAccess, setNoAccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('auth'));
    console.log(authData?.access_token);
    if (!authData?.access_token) {
      setNoAccess(true);
    } else {
      setAccess(true);
    }
  }, []);

  const handleSignUp = () => navigate('/SignUp');

  return (
    <Container
      fluid
      px="0"
      style={{ paddingTop: '25px', backgroundColor: '#F1F3FF' }}
    >
      <Container pt="4" ms="0" me="0" px="0" className="headercon">
        <Row ms="0" className="justify-content-end headertext">
          <Col sm="1">
            <div className="bluebox" style={{ border: '0' }} />
          </Col>
          {access && (
            <>
              <Col sm="7" />
              <Col sm="1" className="flex align-items-center">
                <HashLink
                  className="text-decoration-none"
                  style={{ color: 'black' }}
                  smooth
                  to="/#services"
                >
                  Our Services
                </HashLink>
              </Col>
              <Col sm="1" className="flex align-items-center">
                <HashLink
                  className="text-decoration-none"
                  style={{ color: 'black' }}
                  smooth
                  to="/#about"
                >
                  About Us
                </HashLink>
              </Col>
              <Col sm="1" className="flex align-items-center">
                <HashLink
                  className="text-decoration-none"
                  style={{ color: 'black' }}
                  smooth
                  to="/#testi"
                >
                  Testimonial
                </HashLink>
              </Col>
              <Col sm="1" className="flex align-items-center">
                <HashLink
                  className="text-decoration-none"
                  style={{ color: 'black' }}
                  smooth
                  to="/#faq"
                >
                  FAQ
                </HashLink>
              </Col>
            </>
          )}
          {noAccess && (
            <>
              <Col sm="6" />
              <Col sm="1" className="flex align-items-center">
                <HashLink
                  className="text-decoration-none"
                  style={{ color: 'black' }}
                  smooth
                  to="/#services"
                >
                  Our Services
                </HashLink>
              </Col>
              <Col sm="1" className="flex align-items-center">
                <HashLink
                  className="text-decoration-none"
                  style={{ color: 'black' }}
                  smooth
                  to="/#about"
                >
                  About Us
                </HashLink>
              </Col>
              <Col sm="1" className="flex align-items-center">
                <HashLink
                  className="text-decoration-none"
                  style={{ color: 'black' }}
                  smooth
                  to="/#testi"
                >
                  Testimonial
                </HashLink>
              </Col>
              <Col sm="1" className="flex align-items-center">
                <HashLink
                  className="text-decoration-none"
                  style={{ color: 'black' }}
                  smooth
                  to="/#faq"
                >
                  FAQ
                </HashLink>
              </Col>
              <Col sm="1" className="flex align-items-center">
                <button
                  onClick={handleSignUp}
                  type="button"
                  className="button2"
                >
                  Register
                </button>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default HeaderModule;
