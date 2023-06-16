import React,{useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditPembayaran = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [telepon, setTelepon] = useState("");
const [status, setStatus] = useState("");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getPembayaranById();
}, []);

const updatePembayaran = async (e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:300/pembayaran/${id}`,{
            name,
            email,
            telepon,
            status
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}

const getPembayaranById = async ()=>{
    const response = await axios.get(`http://localhost:300/pembayaran/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setTelepon(response.data.telepon);
    setStatus(response.data.status);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half"></div>
        <form onSubmit={updatePembayaran}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text" className="input" value ={name} onChange={(e)=> setName(e.target.value)} placeholder='Name' />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input typr="text" className="input" value ={email} onChange={(e)=> setEmail(e.target.value)}placeholder='Email' />
                </div>
            </div>
            <div className="field">
                <label className="label">Telepon</label>
                <div className="control">
                    <input typr="text" className="input" value ={telepon} onChange={(e)=> setTelepon(e.target.value)} placeholder='Telepon' />
                </div>
            </div>
            <div className="field">
                <label className="label">Status</label>
                <div className="control">
                    <input typr="text" className="input" value ={status} onChange={(e)=> setStatus(e.target.value)} placeholder='Status' />
                </div>
            </div>
            <div className="field">
                <button type='submit' className='button is-success'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default EditPembayaran