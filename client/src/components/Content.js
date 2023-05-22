import React, { useState, useEffect } from "react";
import axios from "axios";
import './comp.css';

const Content=()=>{
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [phonebook, setPhonebook] = useState([]);
  const [newPhone, setNewPhone] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("http://localhost:8080/get-phone");
      console.log("Fetched Data");
      setPhonebook(res.data.data.phoneNumbers);
    };
    fetchData();
  }, []);

  const addData = async () => {
    await axios.post("http://localhost:8080/add-phone", { name, phone });
    console.log("Added Data");
  };

  const updateData = async (id) => {
    try {
      await axios.patch(`http://localhost:8080/update-phone/${id}`, {
        id,
        newPhone,
      });
      console.log("Updated Data");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/delete-phone/${id}`);
    console.log("Deleted Data");
  };
  return (
    <div className="App">
      <label>Name: </label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br></br>
      <label>Phone: </label>
      <input type="number" onChange={(e) => setPhone(e.target.value)} />
      <br></br>
      <button onClick={addData}>Add</button>
      
      {phonebook.map((val, key) => {
        return (
          <div key={key} className="phone">
            <h1>{val.name}</h1>
            <h1>{val.phone}</h1>

            <input
              type="number"
              placeholder="update Phone..."
              onChange={(e) => {
                setNewPhone(e.target.value);
              }}
            />
            <button
              className="update-btn"
              onClick={() => {
                updateData(val._id);
              }}
            >
              Update
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                deleteData(val._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Content;

