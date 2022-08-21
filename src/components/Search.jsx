import React, {useEffect, useState} from 'react'
import Select from 'react-select';
import axios from "axios";
import '../index.css';
import GetMobil from '../hooks/getMobil';
import {Container, Card, CardBody, CardTitle, CardText, CardSubtitle, CardImg, Col, Row, Button } from 'reactstrap';
import {useNavigate} from 'react-router-dom';

const SearchModule = () => {

    const navigate = useNavigate();

    const {search, nama, setNama, selectedHarga, setSelectedHarga, selectedKategori, setSelectedKategori, binar, setBinar } =
    GetMobil();

    const options = [
        {value: '2 - 4 orang', label:'2 - 4 orang'},
        {value: '4 - 6 orang', label:'4 - 6 orang'},
        {value: '6 - 8 orang', label:'6 - 8 orang'},
    ]

    const harga = [
        {value: 5000000, label:'5.000.000'},
        {value: 7000000, label:'7.000.000'},
        {value: 400000, label:'400.000'},
        {value: 350000, label:'350.000'},
        {value: 400000, label:'400.000'},
        {value: 500000, label:'500.000'},
        {value: 1000000, label:'1.000.000'},
    ]

    const status = [
        {value: 'false', label:'Disewa'}
    ]

  return (
    <div>
        <div>
            <Container className="shadow text-center searchbar px-0" style={{marginTop:"-50px"}}>
                <Row className="align-items-center justify-content-center m-0" style={{height:"106px"}}>
                    <Col md="10" px="0" style={{marginLeft:"-28px"}}>
                        <Row className="m-0">
                            <Col md="3" pe="0">
                                <label className="labelsearch" for="namaMobil">Nama Mobil</label><br/>
                                <input 
                                onChange = {(e) => {
                                    setNama(e.target.value);
                                }}
                                 type="text" className="namamobil searchform" id="namaMobil" placeholder="Ketik nama/tipe mobil"/>
                            </Col>
                            <Col md="3" pe="0">
                                <label className="labelsearch" for="kategori">Kategori</label><br/>
                                <Select
                                onChange = {(e) => {
                                    setSelectedKategori(e.value);
                                }}
                                options={options} name='kategori' id='kategori' placeholder='Masukan kapasitas mobil' className='namamobil'/>
                            </Col>
                            <Col md="3" pe="0">
                                <label className="labelsearch" for="harga">Harga</label><br/>
                                <Select
                                onChange = {(e) => {
                                    setSelectedHarga(e.value);
                                }}
                                options={harga} name='harga' id="harga" placeholder='Masukan harga sewa perhari' className='namamobil'/>
                            </Col>
                            <Col md="3" pe="0">
                                <label className="labelsearch" for="status">Status</label><br/>
                                <Select options={status} name='status' id="status" placeholder='Disewa' className='namamobil'/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="1" style={{paddingTop:"16px"}}>
                        <button onClick={search} type="button" className="button2 shadow">Cari Mobil</button>
                    </Col>
                </Row>
            </Container>
        </div>
        <br/><br/>
        <div>
            <Col lg={12} style={{maxWidth:'1320px', margin:'auto'}}>
                <Row>
                    {binar.map((car)=>(
                        <Col lg={4} key={car.id}>
                            <Card style={{height:'478px'}} className='mb-4'>
                                <CardImg
                                    alt="Card image cap"
                                    src={car.image}
                                    top
                                    width="100%"
                                    style={{paddingBottom:'0px'}}
                                />
                                <CardBody className='shadow pb-0'>
                                    <CardTitle
                                        className='headertext'
                                        tag="h5">
                                        {car.name}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted cardsubtitle"
                                        tag="h6"
                                    >
                                        Rp. {car.price} / hari
                                    </CardSubtitle>
                                    <CardText className='dropdown'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </CardText>
                                    <button className='button1' onClick={(() => {navigate(`/DetailSewa/${car.id}`)})} style={{width:'100%'}}>
                                        Pilih Mobil
                                    </button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </div>
    </div>
  )
}

export default SearchModule;
