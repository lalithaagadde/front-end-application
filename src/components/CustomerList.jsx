import { useEffect, useState } from "react";

export default function CustomerList(props){
  const customers = props.data;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState(customers);

  useEffect(() => { //although we initialised using useState, we need this for re-render. else it wont show all the customers once we refresh (i.e., when it is re-rendered!)
    setFilteredList(props.data); 
}, [props.data]);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
    const preFilteredList = props.data.filter(customer => (
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) 
    ));
    setFilteredList(preFilteredList);
  }
  
    return(
        <div className='container-list'>
          <input 
          type='text' 
          name='searchField' 
          placeholder='Search by name or email...' 
          onChange={handleSearch}
          value = {searchQuery} />
          
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((customer, index) => (
                <tr key={index} onClick={() => props.handleListClick(index, customer._id)} className={props.selectedRow === index ? 'selected-row' : ''}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
}