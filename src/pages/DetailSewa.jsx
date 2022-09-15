import React, {useEffect, useState} from 'react';
import HeaderModule from '../components/Header';
import FooterModule from '../components/Footer';
import SearchModule from '../components/Search';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { getBinarById } from '../services/MobilApi';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DetailSewa = () => {
    const [startDate, setStartDate] = useState(new Date());


    const [detailMobil, setDetailMobil] = useState();
    const {binarId} = useParams();

    const getDetailSewa = async () => {
        const res = await getBinarById(binarId);
        setDetailMobil(res.data);
    }

    useEffect(() => {
        getDetailSewa();
    },[])

    if (!detailMobil) return <div>Loading...</div>;
  return (
    <div>
        <HeaderModule/>
        <div style={{height:'200px', backgroundColor:'#F1F3FF',position:'relative', zIndex:'-2'}}>

        </div>
        <SearchModule disabled={true}/>
            <Container>
                <Row>
                    <Col md={7}>
                        <Card className='shadow'>
                            <CardBody>
                                <p>Tentang Paket</p>
                                <br/>
                                <p>Include</p>
                                <ul>
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah termasuk pajak</li>
                                </ul>
                                <br/>
                                <p>Exclude</p>
                                <ul>
                                    <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                <br/>
                                <p>Refund, Reschedule, Overtime</p>
                                <ul>
                                    <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Card className='shadow'>
                            <CardBody>
                                <img alt='detil mobil' src={detailMobil.image} style={{width:'100%'}}/>
                                <div>
                                    <p>{detailMobil.name}</p>
                                    <p>{detailMobil.category}</p>
                                    <br/>
                                    <label for='datePicker'>Tentukan lama sewa mobil (max. 7 hari)</label>
                                    <DatePicker id='datePicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                                    <br/><br/>
                                    <Container fluid style={{display:'flex', justifyContent:'space-between'}}>
                                        <div>
                                            <p>Total</p>
                                        </div>
                                        <div>
                                            <p>Rp. {detailMobil.price}</p>
                                        </div>
                                    </Container>
                                    <br/>
                                </div>
                                <Button className='dropdown' style={{width:'100%', height:'40px', borderRadius:'2px', backgroundColor:'#5CB85F', borderColor:'transparent'}}>Lanjutkan Pembayaran</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br/><br/>
        <FooterModule/>
    </div>
  );
};

export default DetailSewa