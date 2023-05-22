import './comp.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddData = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);

    const addData = async () => {
        await axios.post("http://localhost:8080/add-phone", { name, phone });
        console.log("Added Data");
        toast.success("Adding Data !");
        setTimeout(() => {
            window.location.reload();
          }, 3500);
      };

    return (
        <div className="card">
            <div className="container">
            <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} required/>
                <br></br>
                <label>Phone:</label>
                <input type="number" onChange={(e) => setPhone(e.target.value)} required/>
                <br></br>
                <button className='add-btn' onClick={addData}>ADD</button>
                <ToastContainer autoClose={3000}/>
            </div>
        </div>
    )
}

export default AddData;