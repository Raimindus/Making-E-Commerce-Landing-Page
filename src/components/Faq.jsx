import '../index.css';

import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
  Row
} from 'reactstrap';

function FaqModule() {

  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Container>
      <Row className="justify-content-between">
        <Col lg="4">
          <h2>Frequently Asked Question</h2>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col lg="7">
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">
                Apa saja syarat yang dibutuhkan?
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <strong>This is the first item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                Berapa hari minimal sewa mobil lepas kunci?
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <strong>This is the second item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                Berapa hari sebelumnya sebaiknya booking sewa mobil?
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                Apa Ada biaya antar-jemput?
              </AccordionHeader>
              <AccordionBody accordionId="4">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                Bagaimana jika terjadi kecelakaan
              </AccordionHeader>
              <AccordionBody accordionId="5">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default FaqModule;
