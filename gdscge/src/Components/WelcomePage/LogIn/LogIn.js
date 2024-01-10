import React ,  {useState} from 'react'
import './LogIn.css'
import LOGO from '../../../gdsc-logo.png'
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {LogInMember} from '../../../Redux/actions/actions'


function LogIn() {

  const dispatch = useDispatch();
const navigate = useNavigate ()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

    const submitLogInButton =  () => {
      try {
         dispatch (
          LogInMember ({
            email , password
          })
        )

        const token = localStorage.getItem('token');
  if (token) {
  navigate("/HomePage"); 
  }
      } catch (error) {
        console.error("Error logging in:", error);
      } 
}
  return (  
    <div className ="LogInContainer">
      <div className="container">
        <div className="form">
        <img id="GdscLogo" src = {LOGO} alt ="test" />
  <div className="title">Welcome to GDSC Iset Nabeul Platform</div>

  <div className="input-container ic2">
    <input id="email" className="input" type="text" placeholder=" "  onChange={(e)=> setEmail (e.target.value)}/>
    <div className="cut cut-short" />
    <label htmlFor="email" className="placeholder">
      Email
    </label>
  </div>

  <div className="input-container ic1">
    <input id="Password" className="input" type="password" placeholder=" "  onChange={(e)=> setPassword (e.target.value)}/>
    <div className="cut" />
    <label htmlFor="firstname" className="placeholder">
      Password
    </label>
  </div>
  <button className="submit" onClick={submitLogInButton}>
    submit
  </button>
 <Link to ="/SignUp"> <p style ={{color: "#eee" , textdecoration: "none"}}>create an account ?</p></Link> 
</div>

      </div>
    </div>

  )
}

export default LogIn