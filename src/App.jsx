/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './App.css'
import { getAll, get, deleteById, post, put } from './memdb'

function App() {
  const [selectRow, setSelectRow] = useState();
  const [customers, setAllCustomers] = useState([]);

  function handleDelete() {
    console.log("in onDeleteClick()");
  }

  function handleSave() {
    console.log("in onSaveClick()");
  }

  function handleCancel() {
    console.log("in onCancelClick()");
  }

  const getCustomers = () => {
    setAllCustomers(getAll());
  }

  function handleListClick(index){
    setSelectRow(index);
  }

  useEffect(() => {
    getCustomers();
  }, [])

  return (
    <>
    <div className='container'>

    <div className='container'>
            <h1>Customer List</h1>
            <table>

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index} onClick={() => handleListClick(index)} className={selectRow === index ? 'selected-row' : ''}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.password}</td>
                  </tr>
                ))}

              </tbody>
            </table>
      </div>

    

    <div className='container'>
    <h2>Update</h2>
    <form>
      <div>
        <label>
          Name: 
          <input type='text' name='name' placeholder='Customer name'></input>
        </label>
      </div>

      <div>
        <label>
          Email: 
          <input type='text' name='email' placeholder='name@company.com'></input>
        </label>
      </div>

      <div>
        <label>
          Password: 
          <input type='text' name='password' placeholder='password'></input>
        </label>
      </div>

      <div>
        <button type='button' onClick={() => handleDelete()}>Delete</button>
        <button type='button' onClick={() => handleSave()}>Save</button>
        <button type='button' onClick={() => handleCancel()}>Cancel</button>
      </div>

    </form>
  </div>
  </div>
    </>
  )
  
}

export default App
