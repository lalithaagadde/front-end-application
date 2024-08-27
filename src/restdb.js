const baseURL = 'http://localhost:4000/customers';

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
//TODO: in put(), updates an existing customer
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