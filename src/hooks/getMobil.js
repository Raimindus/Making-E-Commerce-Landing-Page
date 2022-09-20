import React, { useState } from 'react';
import { getBinarApi, getBinarById } from '../services/MobilApi';
import axios from 'axios';

const GetMobil = () => {
  const [binar, setBinar] = useState([]);
  const [nama, setNama] = useState([]);
  const [selectedKategori, setSelectedKategori] = useState([]);
  const [selectedHarga, setSelectedHarga] = useState([]);

  const search = async () => {
    const response = await getBinarApi();

    const resultAll = response.data;

    var lowEnd = selectedHarga[0];
    var highEnd = selectedHarga[1];
    console.log(lowEnd);
    console.log(highEnd);
    const checkFiltered = resultAll.filter((z) => checkNumber(z.price));
    console.log(checkFiltered);

    const filtered = resultAll
      .filter((x) => x.name == (nama == '' ? x.name : nama))
      .filter(
        (y) =>
          y.category == (selectedKategori == '' ? y.category : selectedKategori)
      )
      .filter((z) => checkNumber(z.price));
    setBinar(filtered);

    function checkNumber(h) {
      if (selectedHarga == '') {
        return resultAll;
      }
      return h >= lowEnd && h <= highEnd;
    }
  };

  return {
    search,
    nama,
    setNama,
    selectedHarga,
    setSelectedHarga,
    selectedKategori,
    setSelectedKategori,
    binar,
    setBinar
  };
};

export default GetMobil;
