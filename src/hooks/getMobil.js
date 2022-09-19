import {useState} from 'react';

import { getBinarApi } from '../services/MobilApi';

const GetMobil = () => {

  const [binar, setBinar] = useState([]);
  const [nama, setNama] = useState([]);
  const [selectedKategori, setSelectedKategori] = useState([]);
  const [selectedHarga, setSelectedHarga] = useState([]);

  const search = async () => {

    const response = await getBinarApi();

    const resultAll = response.data;

    const lowEnd = selectedHarga[0];
    const highEnd = selectedHarga[1];

    function checkNumber(h) {
      if (selectedHarga == '') {return resultAll}
      return h >=  lowEnd && h <= highEnd
    }
  

    console.log(lowEnd);
    console.log(highEnd);
    const checkFiltered = resultAll.filter(z => checkNumber(z.price));
    console.log(checkFiltered);

    const filtered = resultAll
    .filter(x => x.name == (nama == '' ? x.name : nama))
    .filter(y => y.category == (selectedKategori == '' ? y.category : selectedKategori))
    .filter(z => checkNumber(z.price))
    setBinar(filtered);


  }

  return {search, nama, setNama, selectedHarga, setSelectedHarga, selectedKategori, setSelectedKategori, binar, setBinar };
};

export default GetMobil;