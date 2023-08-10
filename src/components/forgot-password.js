import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    fetch("https://reset-pass-yy2x.onrender.com/forgot-password",{
      method:"POST",
      crossDomain:true,
      headers:{
        "content-type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({email})
    })
      .then((res)=> res.json())
      .then((data)=>{console.log(data ,"userRegister")
      if(data.status === "User not exits"){
        alert("user is not exits in database, Signup to register")
      }
    })
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Forgot Password</h3>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Send Link
        </button>
      </div>
      <p className="m-3 ps-3">
          <Link to="/sign-up" className="m-3">Signup</Link>
        </p>
    </form>
  );
};

export default ForgotPassword;