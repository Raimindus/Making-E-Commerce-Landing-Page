import React from 'react';
import '../index.css';
import {Col, Row} from 'reactstrap'; 
import img_testi from '../assets/image/img_testi.png';           
import button_5stars from '../assets/image/button_5stars.png';   
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
            
const TestiModule = () => {

    var settings = {
        className: "slider variable-width",
        dots: true,
        arrows:true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <div>
            <div style={{marginBottom:"15px"}}>
                <h2 style={{textAlign:"center"}}>Testimonial</h2>
                <p style={{textAlign:"center"}}>Berbagai review positif dari pelanggan kami</p>
            </div><br/>
            <div className='fixedHeight'>
                <Slider {...settings}>
                    <div>
                        <div style={{width:640}} className="item">
                            <Row className="itemitem align-items-center">
                                <Col md="3">
                                    <img src={img_testi} className="card-img" alt="foto" style={{height:"80px", width:"80px"}}/>
                                </Col>
                                <Col md="9" className="card-text">
                                    <br/>
                                    <img src={button_5stars} style={{marginLeft:"-3px"}} alt="5stars"/>
                                    <br/>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                        eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit, sed do eiusmod"</p>
                                    <p><small className="text-card2">John Dee 32, Bromo</small></p>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className='spacing'>
                    </div>

                    <div>
                        <div style={{width:640}} className="item">
                            <Row className="itemitem align-items-center">
                                <Col md="3">
                                    <img src={img_testi} className="card-img" alt="foto" style={{height:"80px", width:"80px"}}/>
                                </Col>
                                <Col md="9" className="card-text">
                                    <br/>
                                    <img src={button_5stars} style={{marginLeft:"-3px"}} alt="5stars"/>
                                    <br/>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                        eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit, sed do eiusmod"</p>
                                    <p><small className="text-card2">John Dee 32, Bromo</small></p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <div style={{width:640}} className="item">
                            <Row className="itemitem align-items-center">
                                <Col md="3">
                                    <img src={img_testi} className="card-img" alt="foto" style={{height:"80px", width:"80px"}}/>
                                </Col>
                                <Col md="9" className="card-text">
                                    <br/>
                                    <img src={button_5stars} style={{marginLeft:"-3px"}} alt="5stars"/>
                                    <br/>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                        eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit, sed do eiusmod"</p>
                                    <p><small className="text-card2">John Dee 32, Bromo</small></p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div>
                        <div style={{width:640}} className="item">
                            <Row className="itemitem align-items-center">
                                <Col md="3">
                                    <img src={img_testi} className="card-img" alt="foto" style={{height:"80px", width:"80px"}}/>
                                </Col>
                                <Col md="9" className="card-text">
                                    <br/>
                                    <img src={button_5stars} style={{marginLeft:"-3px"}} alt="5stars"/>
                                    <br/>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                        eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit, sed do eiusmod"</p>
                                    <p><small className="text-card2">John Dee 32, Bromo</small></p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default TestiModule;