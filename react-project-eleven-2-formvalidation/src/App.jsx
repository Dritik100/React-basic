import React from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [formData, setFormData]= useState({
    firstname: "",
    lastname:"",
    username:"",
    email:"",
    password:"",
    
  });




  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formData);
  };

   
 


  return ( 
    <div className="container">
      <h2>Registration Form</h2>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form_controll">
            <input type="text" name="firstname" placeholder='First name' />
          </div>

          <div className="form_controll">
            <input type="text" name="laststname" placeholder='Last name' />
          </div>


          <div className="form_controll">
            <input type="text" name="username" placeholder='User name' />
          </div>



          <div className="form_controll">
            <input type="email" name="email" placeholder='Email' />
          </div>

          <div className="form_controll">
            <input type="password" name="password" placeholder='Password' />
          </div>

          
          <button type='Submit'>Registerd</button>
        </form>
      </div>
    </div>
  )
}

export default App
