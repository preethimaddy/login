import React from 'react'
import "./Login.css"
import { BsEnvelopeAt } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
const Login = () => {
  return (
    <>
    <div className="container">
      <div className="header">
        <div className="text">Online Form</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
        <FaUserAlt />
          <input type='text' placeholder='Name' />
        </div>
        <div className="input">
        <BsEnvelopeAt />
          <input type='email' placeholder='name@gmail.com' />
        </div>
        <div className="input">
          {/* <img src='./img/password.png' alt=''/> */}
          <RiLockPasswordLine />
          <input type='password' placeholder='password' />
        </div>
      </div>
      <div className="forget">Forget Password?<span>Click here!</span>
      <div className="submit-container">
        <button type='button' className="submit">Login</button>
        
        <button type='button' className="submit1"> Sign up</button>
        </div>
       

    </div>
    </div>
    </>
  )
}

export default Login