import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const url="http://localhost:8080/users";
    const [users, setUsers]=useState([]);

    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
    }, []);

    const loadUsers=()=>{
        return axios.get(url).then((response)=>setUsers(response.data));
    };

    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }


  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table table-bordered shadow">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">User_Name</th>
                        <th scope="col">EmailID</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return(
                                <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.user_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className='btn btn-outline-success mx-2'
                                    to={`/viewuser/${user.id}`}
                                    >View</Link>
                                    <Link className='btn btn-outline-primary mx-2'
                                    to={`/edituser/${user.id}`}
                                    >Edit</Link>
                                    <button className='btn btn-outline-danger mx-2'
                                    onClick={()=>{deleteUser(user.id)}}
                                    >Delete</button>
                                </td>
                                </tr>
                            );
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
