import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Card, CardBody, Container } from 'reactstrap';

import button_download from '../assets/image/button_download.png';
import icon_success from '../assets/image/icon_success.png';
import FooterModule from '../components/Footer';
import HeaderModule from '../components/Header';

function Etiket() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ pages }) => {
    setNumPages(pages);
    setPageNumber(1);
  };

  return (
    <div>
      <HeaderModule />
      <br />
      <br />
      <Container>
        <div className="text-center">
          <img src={icon_success} alt="success" />
          <br />
          <br />
          <h3>Pembayaran Berhasil!</h3>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>
        <Card style={{ width: '50%', margin: 'auto' }}>
          <CardBody>
            <Container
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div>
                <h3>Invoice</h3>
                <p>*no invoice</p>
              </div>
              <div>
                <img src={button_download} alt="download" />
              </div>
            </Container>
            <div>
              <Document
                file="../assets/BinarPdf.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          </CardBody>
        </Card>
      </Container>
      <br />
      <FooterModule />
    </div>
  );
}

export default Etiket;
