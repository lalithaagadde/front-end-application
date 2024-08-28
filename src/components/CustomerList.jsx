import { useEffect, useState } from "react";

export default function CustomerList(props){
  const customers = props.data;

    return(
        <div className='container-list'>
          
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