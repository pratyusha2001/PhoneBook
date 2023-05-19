import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  const [phonebook, setPhonebook] = useState([])
  const [newPhone, setNewPhone] = useState(0)

/*   useEffect(() => {
    axios.get('http://localhost:8080/get-phone', async(req,res)=>
      res => {
        setPhonebook(res.data.data.phoneNumbers)
      }
    )
  }, []) */
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await axios('http://localhost:8080/get-phone');
      setPhonebook(res.data.data.phoneNumbers)
    };
    fetchData();
  },[])

  const addData = () => {
    axios.post('http://localhost:8080/add-phone', { name, phone })
  }

    const updateData = (id) => {
      try{
      axios.put(`http://localhost:8080/update-phone/${id}`, { id, newPhone })
      }
      catch(err)
      {
        console.log(err);
      }
    } 

  const deleteData = (id) => {
    axios.delete(`http://localhost:8080/delete-phone/${id}`)

  }
  return (
    <div className="App">
      <label>Name: </label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br></br>
      <label>Phone: </label>
      <input type="number" onChange={(e) => setPhone(e.target.value)} />
      <br></br>
      <button onClick={addData}>Add</button>

      <h1>PhoneBook List</h1>
      {
        phonebook.map((val, key) => {
          return <div key={key} className="phone" >
            <h1>{val.name}</h1>
            <h1>{val.phone}</h1>

            <input type="number" placeholder='update Phone...' onChange={(e) => {
              setNewPhone(e.target.value)
            }} />
            <button className='update-btn' onClick={() => { updateData(val._id) }}>Update</button>
            <button className='delete-btn' onClick={() => { deleteData(val._id) }}>Delete</button>
          </div>
        })
      }

    </div>
  );
}

export default App;

/*import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  const [phonebook, setPhonebook] = useState([])
  const [newPhone, setNewPhone] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:8080/get-phone').then(
      res => {
        setPhonebook(res.data.data.phoneNumbers)
      }
    )
  }, [])

  const addData = () => {
    axios.post('http://localhost:8080/add-phone', { name, phone })
  }

    const updateData = (id) => {
      axios.put(`http://localhost:8080/update-phone/${id}`, { id, newPhone })
    } 

  const deleteData = (id) => {
    axios.delete(`http://localhost:8080/delete-phone/${id}`)

  }
  return (
    <div className="App">
      <label>Name: </label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br></br>
      <label>Phone: </label>
      <input type="number" onChange={(e) => setPhone(e.target.value)} />
      <br></br>
      <button onClick={addData}>Add</button>

      <h1>PhoneBook List</h1>
      {
        phonebook.map((val, key) => {
          return <div key={key} className="phone" >
            <h1>{val.name}</h1>
            <h1>{val.phone}</h1>

            <input type="number" placeholder='update Phone...' onChange={(e) => {
              setNewPhone(e.target.value)
            }} />
            <button className='update-btn' onClick={() => { updateData(val._id) }}>Update</button>
            <button className='delete-btn' onClick={() => { deleteData(val._id) }}>Delete</button>
          </div>
        })
      }

    </div>
  );
}

export default App;
*/