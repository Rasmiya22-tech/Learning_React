import React from 'react'
import { useState } from 'react'

const CustomerAdd = () => {
    const [input,setInput]=useState()
    const [customers, setCustomers] = useState([]);

    function AddCustomer(){
         if (input) {
             setCustomers((previousState) => [...previousState, input] )
             console.log(customers) 
        }

    }

  return (

    <div>
    
      <h3>Add New Customer</h3>
      <input type="text" placeholder='Customer Name' onChange={(e) => setInput(e.target.value)} />
      <button onClick={AddCustomer}>Add</button>
    </div>
  )
}

export default CustomerAdd
