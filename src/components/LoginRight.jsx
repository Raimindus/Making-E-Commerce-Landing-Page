import React from 'react'
import { Col } from 'reactstrap'
import img_landing from '../assets/image/img_landing.png';

const LoginRight = () => {
  return (
    <Col lg={6}  className='signInRight' style={{minHeight:'100vh'}}>
        <div>
        <h1 style={{marginTop:'112px', marginLeft:'130px', color:'#FFFFFF'}}>Binar Car Rental</h1>
        <img src={img_landing} alt='landing' style={{display:'block',width:'42%', position:'absolute', right:'0px', bottom:'-120px', overflowY:'hidden'}} />
        </div>
    </Col>
  )
}

export default LoginRight