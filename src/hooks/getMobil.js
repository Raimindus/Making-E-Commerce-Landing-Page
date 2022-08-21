import React, {useState} from 'react';
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
  
    const filtered = resultAll
    .filter(x => x.name == (nama == '' ? x.name : nama))
    .filter(y => y.category == (selectedKategori == '' ? y.category : selectedKategori))
    .filter(z => z.price == (selectedHarga == '' ? z.price : selectedHarga))
    setBinar(filtered);

  }

  return {search, nama, setNama, selectedHarga, setSelectedHarga, selectedKategori, setSelectedKategori, binar, setBinar };
};

export default GetMobil;