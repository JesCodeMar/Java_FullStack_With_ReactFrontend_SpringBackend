import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  
  let navigate=useNavigate();
  const {id}=useParams()
  const [user,setUser]=useState({
    name:"",
    user_name:"",
    email:""
  })

  const {name,user_name,email}=user;

  const oninputchange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  };

  useEffect(()=>{
    loaduser();
  },[]);

  const onsubmit=async(e)=>{
    //e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user);
    navigate("/");
  };

  const loaduser=async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h4 className='text-center m-4'>Edit User</h4>
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
