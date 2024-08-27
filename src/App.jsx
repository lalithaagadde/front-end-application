/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './App.css'
import { getAll, get, deleteById, post, put } from './memdb'

function App() {

  useEffect(() => {
    setAllCustomers(getAll());
  }, []);

  const [selectRow, setSelectRow] = useState(undefined);
  const [customers, setAllCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [arrId, setArrId] = useState(undefined);

  console.log( "Selected Row Id: ", selectRow );
  console.log("Array Id: ", arrId);
  console.log({ selectedCustomer });
  console.log({ customers });
  
  const mode = selectedCustomer.id >= 0 ? "Update" : "Add"

  function handleDelete(selectRow) {
    console.log("in onDeleteClick()", selectRow);
    deleteById(selectRow);
    setSelectRow(undefined)
    setSelectedCustomer({ name: "", email: "", password: "" })
    setAllCustomers(getAll());
  }

  function handleSave() {
    if (mode === "Add"){
      post(selectedCustomer)
      setSelectRow(undefined)
      setSelectedCustomer({ name: "", email: "", password: "" })
      setAllCustomers(getAll());
      console.log("Do a post")
    }
    else
    {
      put(selectRow, selectedCustomer)
      setSelectRow(undefined)
      setSelectedCustomer({ name: "", email: "", password: "" })
      setAllCustomers(getAll());
      console.log("Do a put")
    }
    console.log("in onSaveClick()");
  }

  function handleCancel() {
    handleListClick(null);
    setSelectedCustomer({
      name: '',
      email: '',
      password: ''
    });
  }

  function handleListClick(index, arrId) {
    if (selectRow === index) {
      setSelectRow(null);
      setSelectedCustomer({
        name: '',
        email: '',
        password: ''
      });
    } else {
      setSelectRow(index);
      setSelectedCustomer(customers[index]);
      setArrId(arrId);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSelectedCustomer(prevState => ({ ...prevState, [name]: value }));
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
                <tr key={index} onClick={() => handleListClick(index, customer.id)} className={selectRow === index ? 'selected-row' : ''}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='container'>
          <h2>{mode}</h2>
          <form>
            <div>
              <label>
                Name:
                <input type='text' name='name' placeholder='Customer name' value={selectedCustomer.name} onChange={handleInputChange}></input>
              </label>
            </div>
            <div>
              <label>
                Email:
                <input type='text' name='email' placeholder='name@company.com' value={selectedCustomer.email} onChange={handleInputChange}></input>
              </label>
            </div>

            <div>
              <label>
                Password:
                <input type='text' name='password' placeholder='password' value={selectedCustomer.password} onChange={handleInputChange}></input>
              </label>
            </div>

            <div>
              <button type='button' onClick={() => handleDelete(arrId)}>Delete</button>
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
