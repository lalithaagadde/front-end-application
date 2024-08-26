import './App.css'

function App() {

  function handleDelete() {
    console.log("in onDeleteClick()");
  }

  function handleSave() {
    console.log("in onSaveClick()");
  }

  function handleCancel() {
    console.log("in onCancelClick()");
  }

  return (
    <>
    <div className='container'>
    <div className='container'>
            <h1>Customer List</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                <tr>
                    <td>Jack Jackson</td>
                    <td>jackj@abc.com</td>
                    <td>jackj</td>
                </tr>
                <tr>
                    <td>Katie Kates</td>
                    <td>katiek@abc.com</td>
                    <td>katiek</td>
                </tr>
                <tr>
                    <td>Glen Glenns</td>
                    <td>gleng@abc.com</td>
                    <td>gleng</td>
                </tr>
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
