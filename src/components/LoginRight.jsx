import React from 'react';
import { Col } from 'reactstrap';

import signInRight from '../assets/image/signInRight.jpg';

function LoginRight() {
  return (
    <Col lg={6} className="signInRight" style={{height:"100vh"}}>
          <img className="signIn" style={{width:"100%", height:"100%"}} src={signInRight} alt="landing" />
    </Col>
  );
}

export default LoginRight;
