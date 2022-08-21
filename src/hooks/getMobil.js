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

    if (selectedKategori) {
      const hasil = selectedKategori.value
      ? resultAll.filter((value) => {
        const kategori = value.category;
        return kategori.includes(selectedKategori.value);
        })
      :resultAll;
      
      setBinar(hasil);

    } 

      else {
      return setBinar(resultAll);

    }

  };
  return {search, nama, setNama, selectedHarga, setSelectedHarga, selectedKategori, setSelectedKategori, binar, setBinar };
};

export default GetMobil;