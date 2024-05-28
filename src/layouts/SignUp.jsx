import React, { useState } from 'react'
import "../style.css"
import Header from "../components/header/Header"
import { Link } from 'react-router-dom'
export const SignUp = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
 
   const handleSubmit=(e)=>{
e.preventDefault();
//Apis call
console.log("Result:",email,password)
   }
    //useState
    //useEffect
    //useRef ...
  return (
    <>
    
    <div className="login-form-container">
        
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Signup Form</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
        <Link to="/">login</Link>
      </form>
    </div>
    </>
   
  )
}
