import React from 'react'
import './LogIn.css'
import LOGO from '../../../gdsc-logo.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

function LogIn() {
  return (  
    <div>
      <div className="container">
        <div className="form">
        <img id="GdscLogo" src = {LOGO} alt ="test" />
  <div className="title">Welcome to GDSC Iset Nabeul Platform</div>
  <div className="subtitle">Let's create your account!</div>
 
  <div className="input-container ic2">
    <input id="email" className="input" type="text" placeholder=" " />
    <div className="cut cut-short" />
    <label htmlFor="email" className="placeholder">
      Email
    </label>
  </div>

  <div className="input-container ic1">
    <input id="Password" className="input" type="password" placeholder=" " />
    <div className="cut" />
    <label htmlFor="firstname" className="placeholder">
      Password
    </label>
  </div>
  <button type="text" className="submit">
    submit
  </button>
 <Link to ="/SignUp"> <p style ={{color: "#eee" , textdecoration: "none"}}>create an account ?</p></Link> 
</div>

      </div>
    </div>

  )
}

export default LogIn