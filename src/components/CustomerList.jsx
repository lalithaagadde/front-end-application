export default function CustomerList(props){
    return(
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
              {props.data.map((customer, index) => (
                <tr key={index} onClick={() => props.handleListClick(index, customer.id)} className={props.selectedRow === index ? 'selected-row' : ''}>
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