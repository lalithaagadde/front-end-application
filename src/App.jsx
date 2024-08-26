/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './App.css'
import { getAll, get, deleteById, post, put } from './memdb'

function App() {

  useEffect(() => {
    getCustomers();
  }, []);

  const [selectRow, setSelectRow] = useState(null);
  const [customers, setAllCustomers] = useState([]);
  const [selectCustomer, setSelectCustomer] = useState({
    name: '',
    email: '',
    password: ''
  });

  function handleDelete(selectRow) {
    console.log("in onDeleteClick()");
    console.log(selectRow);
    deleteById(selectRow);
    setAllCustomers(getAll());
  }

  function handleSave() {
    console.log("in onSaveClick()");
  }

  function handleCancel() {
    handleListClick(null);
    setSelectCustomer({
      name: '',
      email: '',
      password: ''
    });
  }

  const getCustomers = () => {
    setAllCustomers(getAll());
  }

  function handleListClick(index){
    if (selectRow === index) {
      setSelectRow(null);
      setSelectCustomer({
        name: '',
        email: '',
        password: ''
      });
    } else {
      setSelectRow(index);
      setSelectCustomer(customers[index]);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSelectCustomer(prevState => ({...prevState, [name]: value}));
  }

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
    <h2>{selectRow !== null ? "Update": "Add"}</h2>
    <form>
      <div>
        <label>
          Name: 
          <input  type='text' name='name' placeholder='Customer name' value={selectCustomer.name} onChange={handleInputChange}></input>
        </label>
      </div>

      <div>
        <label>
          Email: 
          <input type='text' name='email' placeholder='name@company.com' value={selectCustomer.email} onChange={handleInputChange}></input>
        </label>
      </div>

      <div>
        <label>
          Password: 
          <input type='text' name='password' placeholder='password' value={selectCustomer.password} onChange={handleInputChange}></input>
        </label>
      </div>

      <div>
        <button type='button' onClick={() => handleDelete(selectRow)}>Delete</button>
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
