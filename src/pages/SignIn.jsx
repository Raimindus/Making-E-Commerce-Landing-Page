import '../index.css';

import axios from 'axios';
import { Form, Formik } from 'formik';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { Col, FormGroup, Input, Label } from 'reactstrap';
import * as Yup from 'yup';

import LoginRight from '../components/LoginRight';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email tidak valid'),
  password: Yup.string().required('Password tidak valid')
});

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function SignIn() {
  const query = useQuery();
  const Url = query.get('redirect_url');

  const navigate = useNavigate();
  const handleSignUp = () => navigate('/SignUp');

  return (
    <div style={{ height: '100%', overflow: 'hidden' }}>
      <Row>
        <Col
          lg={6}
          style={{ height: '100%', display: 'flex', minHeight: '100vh' }}
          className="justify-content-center, align-items-center"
        >
          <div style={{ margin: 'auto', width: '370px' }}>
            <div className="bluebox" style={{ backgroundColor: '#CFD4ED' }} />
            <br />
            <div>
              <h2>Welcome Back!</h2>
              <br />
            </div>
            <Formik
              enableReinitialize
              validationSchema={validationSchema}
              initialValues={{
                email: '',
                password: ''
              }}
              onSubmit={async (value) => {
                try {
                  const res = await axios.post(
                    'https://bootcamp-rent-car.herokuapp.com/customer/auth/login',
                    value
                  );

                  localStorage.setItem('auth', JSON.stringify(res.data));

                  if (Url) {
                    navigate(`${Url}`);
                  } else {
                    navigate('/');
                  }
                } catch (e) {
                  console.error(e);
                }
              }}
            >
              {(formikProps) => (
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Contoh: johndee@gmail.com"
                      value={formikProps.values.email}
                      onChange={formikProps.handleChange}
                    />
                    {formikProps.errors.email && formikProps.touched.email && (
                      <small style={{ color: 'red' }}>
                        {formikProps.errors.email}
                      </small>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="6+ karakter"
                      value={formikProps.values.password}
                      onChange={formikProps.handleChange}
                    />
                    {formikProps.errors.password &&
                      formikProps.touched.password && (
                        <small style={{ color: 'red' }}>
                          {formikProps.errors.password}
                        </small>
                      )}
                  </FormGroup>
                  <br />
                  <button
                    type="submit"
                    className="button1"
                    style={{ width: '100%', backgroundColor: '#0D28A6' }}
                  >
                    Sign In
                  </button>
                  <br />
                  <br />
                  <div className="text-center">
                    Don&apos;t have an account?{' '}
                    <a href="#" onClick={handleSignUp}>
                      Sign Up for free
                    </a>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
        <LoginRight />
      </Row>
    </div>
  );
}

export default SignIn;
