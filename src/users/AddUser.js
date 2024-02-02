import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

let navigate=useNavigate()

    const [user,setUser]=useState({
        firstname: "",
        lastname: "",
        email: ""
    });

    const{firstname,lastname,email}=user;

    const onInputChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/");
    };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-2/3 border rounded p-4 mt-2 shadow">
          <h1 className="text-black font-bold text-2xl">Register User</h1>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label font-bold">
              Firstname
            </label>
            <div className="h-2"></div>
            <input
              type="text"
              className="form-input text-center border px-3 py-2"
              placeholder="Enter your firstname"
              name="firstname"
              value={firstname}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label font-bold">
              Lastname
            </label>
            <div className="h-2"></div>
            <input
              type="text"
              className="form-input text-center border px-3 py-2"
              placeholder="Enter your lastname"
              name="lastname"
              value={lastname}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label font-bold">
              E-mail
            </label>
            <div className="h-2"></div>
            <input
              type="text"
              className="form-input text-center border px-3 py-2"
              placeholder="Enter your e-mail address"
              name="email"
              value={email}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="align-middle bg-blue-700 hover:bg-blue-200 text-white hover:text-black font-bold py-2 px-3 rounded mx-2"
            >
              Submit
            </button>
            <Link
              type="submit"
              className="align-middle bg-red-700 hover:bg-red-200 text-white hover:text-black font-bold py-2 px-3 rounded mx-2" to="/"
            >
              Cancel
            </Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
