export default function CustomerAddUpdateForm(props) {

    return (
        <>
        <div className='container'>
          <h2>{props.mode}</h2>
          <form>
            <div>
              <label>
                Name:
                <input type='text' name='name' placeholder='Customer name' value={props.selectedCustomerName} onChange={props.handleInputChange}></input>
              </label>
            </div>
            <div>
              <label>
                Email:
                <input type='text' name='email' placeholder='name@company.com' value={props.selectedCustomerEmail} onChange={props.handleInputChange}></input>
              </label>
            </div>

            <div>
              <label>
                Password:
                <input type='text' name='password' placeholder='password' value={props.selectedCustomerPassword} onChange={props.handleInputChange}></input>
              </label>
            </div>

            <div>
              <button type='button' disabled = {props.mode === "Add"} onClick={() => props.handleDelete(props.arrId)}>Delete</button>
              <button type='button' onClick={() => props.handleSave()}>Save</button>
              <button type='button' onClick={() => props.handleCancel()}>Cancel</button>
            </div>

          </form>
        </div>
        </>
    )

}