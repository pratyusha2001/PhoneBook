import './comp.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TableData = () => {
    const [phonebook, setPhonebook] = useState([]);
    const [newPhone, setNewPhone] = useState(0);
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:8080/get-phone");
            console.log("Fetched Data");
            setPhonebook(res.data.data.phoneNumbers);
        };
        fetchData();
    }, []);

    const updateData = async (id) => {
        setShowInput(true);
    };

    const handleUpdate = async (id) => {
        await axios.patch(`http://localhost:8080/update-phone/${id}`, {
            id,
            newPhone,
        });
        toast.success("Modifying Data !");
        setTimeout(() => {
            window.location.reload();
        }, 3500);
    }
    const deleteData = async (id) => {
        await axios.delete(`http://localhost:8080/delete-phone/${id}`);
        console.log("Deleted Data");
        toast.success("Deleting Data !");
        setTimeout(() => {
            window.location.reload();
        }, 3500);
    };

    return (
        <div>
            <table id="users">
                <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {phonebook.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.phone}
                                {showInput && <input className="upd-input" type="number" placeholder="Update Phone" onChange={(e) => { setNewPhone(e.target.value) }} />}
                            </td>

                            <td>
                                {showInput && <button className='upd-btn' onClick={() => { handleUpdate(val._id) }}>UPDATE</button>}
                                {!showInput && <button className='upd-btn' onClick={() => { updateData(val._id) }}>EDIT</button>}

                            </td>
                            <td><button className='upd-btn' onClick={() => { deleteData(val._id) }}>DELETE</button><ToastContainer autoClose={3000} /></td>
                        </tr>)
                })}
            </table>
        </div>
    );
}

export default TableData;