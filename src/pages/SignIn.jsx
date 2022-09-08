import React from 'react'
import {Row } from 'react-bootstrap';
import {Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import '../index.css';
import img_landing from '../assets/image/img_landing.png';

const SignIn = () => {


  
  return (
    <div style={{height:'100%', overflow:'hidden'}}>
      <Row>
        <Col lg={6} style={{height:'100%', display:'flex', minHeight:'100vh'}} className='justify-content-center, align-items-center'>
          <div style={{margin:'auto', width:'370px'}}>
            <div className='bluebox' style={{backgroundColor:'#CFD4ED'}}>
            </div>
            <br/>
            <div>
              <h2>Welcome Back!</h2>
              <br/>
            </div>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Contoh: johndee@gmail.com"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="6+ karakter"
                  type="password"
                />
              </FormGroup>
              <br/>
              <button className='button1' style={{width:'100%', backgroundColor:'#0D28A6'}}>
                Sign In
              </button>
              <br/><br/>
              <div className='text-center'>
                Don't have an account? <a href='#'>Sign Up for free</a>
              </div>
            </Form>
          </div>

        </Col>
        <Col lg={6}  className='signInRight' style={{minHeight:'100vh'}}>
          <div>
            <h1 style={{marginTop:'112px', marginLeft:'130px', color:'#FFFFFF'}}>Binar Car Rental</h1>
            <img src={img_landing} alt='landing' style={{display:'block',width:'42%', position:'absolute', right:'0px', bottom:'-40px', overflowY:'hidden'}} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SignIn