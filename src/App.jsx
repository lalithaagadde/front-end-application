/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './App.css'
import { get, deleteById, post, put } from './memdb'
import { getAll } from './restdb'
import CustomerList from './components/CustomerList.jsx'
import CustomerAddUpdateForm from './components/CustomerAddUpdateForm.jsx'

function App() {

  useEffect(() => {
    getAll(setAllCustomers);
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
    if (selectedCustomer.name !== "" && selectedCustomer.email !== "" && selectedCustomer.password !== "")
    {if (mode === "Add"){
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
  }
  else{
    alert("Your fields cannot be empty!")
  }
    console.log("in onSaveClick()");
  }

  function handleCancel() {
    handleListClick(undefined);
    setSelectedCustomer({
      name: '',
      email: '',
      password: ''
    });
  }

  function handleListClick(index, arrId) {
    if (selectRow === index) {
      setSelectRow(undefined);
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
        
        <CustomerList
          data={customers}
          handleListClick={handleListClick}
          selectedRow={selectRow}/>

        <CustomerAddUpdateForm 
          mode={mode} 
          selectedCustomerName={selectedCustomer.name} 
          selectedCustomerEmail={selectedCustomer.email} 
          handleInputChange = {handleInputChange} 
          selectedCustomerPassword = {selectedCustomer.password} 
          handleDelete={handleDelete} 
          handleSave={handleSave} 
          handleCancel={handleCancel}
          arrId={arrId} />

      </div>
    </>
  )
}

export default App
