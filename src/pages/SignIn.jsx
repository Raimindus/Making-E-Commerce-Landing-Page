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
          <div style={{margin:'auto'}}>
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
                  placeholder="with a placeholder"
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
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
              <Button>
                Sign In
              </Button>
              <br/>
              <div>
                Don't have an account? <a>Sign Up for free</a>
              </div>
            </Form>
          </div>

        </Col>
        <Col lg={6}  className='signInRight' style={{minHeight:'100vh'}}>
          <div>
            <h1 style={{marginTop:'112px', marginLeft:'115px', color:'#FFFFFF'}}>Binar Car Rental</h1>
            <img src={img_landing} alt='landing' style={{display:'block', position:'absolute', right:'0px', bottom:'0px'}} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SignIn