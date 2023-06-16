import React, {useState, useEffect, Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const PembayaranList = () => {
const [pembayaran, setPembayaran] = useState([]);

useEffect(()=>{
  getPembayaran();
}, []);

const getPembayaran = async () =>{
  const response = await axios.get('http://localhost:300/pembayaran');
  
  setPembayaran(response.data);
};

  return (
    <div className="columns mt-5 is-centered">
      <div>
          <h1>HALAMAN PEMBAYARAN ITS BADMINTON 2023</h1>
            <div>
              <p>Ini adalah halaman pembayaran, silahkan klik tombol bayar disamping</p>
            </div>
        </div>
        <div className="column is-half">
          <Link to={`add`} className="button is success">Bayar</Link>
          <Link to={`list`} className="button is success">Daftar Pembayaran</Link>
        
        </div>
    </div>
  );
};

export default PembayaranList;
