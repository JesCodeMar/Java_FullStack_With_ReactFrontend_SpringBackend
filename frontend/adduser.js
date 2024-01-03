import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
  
  let navigate=useNavigate();
  const [user,setUser]=useState({
    name:"",
    user_name:"",
    email:""
  })

  const {name,user_name,email}=user;

  const oninputchange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  };

  const onsubmit=async(e)=>{
    //e.preventDefault();
    await axios.post("http://localhost:8080/user",user);
    navigate("/");
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h4 className='text-center m-4'>Register User</h4>
          <form onSubmit={(e)=>onsubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>Name</label>
            <input type={"text"} className='form-control' placeholder='Enter your name' name='name' value={name} 
            onChange={(e)=>oninputchange(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='Username' className='form-label'>Username</label>
            <input type={"text"} className='form-control' placeholder='Enter your username' name='user_name' value={user_name} onChange={(e)=>oninputchange(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='Email' className='form-label'>Email ID</label>
            <input type={"text"} className='form-control' placeholder='Enter your email address' name='email' value={email} onChange={(e)=>oninputchange(e)}/>
          </div>
          <button type='submit' className='btn btn-outline-primary'>Submit</button>
          <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
