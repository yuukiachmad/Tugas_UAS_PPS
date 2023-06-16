import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const DaftarPembayaran = () => {
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
        <div className="column is-half">
          {/* <Link to={`add`} className="button is success">Bayar</Link> */}
        <table className="table is-scripted is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Telepon</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pembayaran.map((pembayaran, index) =>(
            <tr key={pembayaran.id}>
              <td>{index + 1}</td>
              <td>{pembayaran.name}</td>
              <td>{pembayaran.email}</td>
              <td>{pembayaran.telepon}</td>
              <td>{pembayaran.status}</td>
              <td>
                <Link to={`../edit/${pembayaran.id}`} className="button is-small is info">Edit</Link>
                <button className="button is-small is danger">Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default DaftarPembayaran;
