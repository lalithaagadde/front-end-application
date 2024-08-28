const baseURL = 'http://localhost:3000/api/customers';

export async function getAll(setAllCustomers) {

    const myInit = {
        method: 'GET',
        mode: 'cors' 
    };
    const fetchData = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            setAllCustomers(data);
        
        } catch (error) 
        {
            alert(error);
        }
    }
    fetchData(baseURL);
   
}

//TODO: in post(), adds a new customer
export async function post(newCustomer, setAllCustomers) {
    const myInit = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({...newCustomer}),
        headers: {
            "Content-type" : "application/json"
        }
    };

    const addData = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
            throw new Error(`Error adding customer: ${response.status}`);
            }
            getAll(setAllCustomers);
        } catch (error) 
        {
            alert(error);
        }
    }
    addData(baseURL);
}
//TODO: in put(), updates an existing customer

export async function put(id, updateCustomer, setAllCustomers) {
    const myInit = {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(updateCustomer),
        headers: {
            "Content-type" : "application/json"
        }
    };

    const updateData = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
            throw new Error(`Error updating customer: ${response.status}`);
            }
            getAll(setAllCustomers);
        } catch (error) 
        {
            alert(error);
        }
    }
    updateData(`${baseURL}/${id}`);
}

//TODO: in deleteById(), deletes an existing customer

export async function deleteById(id, setAllCustomers) {
    const myInit = {
        method: 'DELETE',
        mode: 'cors' 
    };

    const deleteData = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
            throw new Error(`Error deleting data: ${response.status}`);
            }
            getAll(setAllCustomers);
        } catch (error) 
        {
            alert(error);
        }
    }
    deleteData(`${baseURL}/${id}`);
}