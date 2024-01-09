import React , {useState} from 'react'
import './SignUp.css'
import { useDispatch } from 'react-redux'
import {signUp} from '../../../Redux/actions/actions'
import { useNavigate } from 'react-router-dom';



function SignUp() {
const dispatch = useDispatch() ;
const navigate = useNavigate();
const [name , setName] = useState('') 
const [email, setEmail] = useState('') 
const [password , setPassword] = useState('') 

const signUpFunction = () => {

  dispatch (signUp({
    name , email  , password
  }))

  const token = localStorage.getItem('token');
  if (token) {
  navigate("/LogIn"); 
  }
}
  return (
    <div>
      <div className="form">
  <div className="subtitle">Let's create your account!</div>


  <div className="input-container ic1">
    <input id="firstname" className="input" type="text" onChange={(e)=> setName (e.target.value)} />
    <div className="cut" />
    <label htmlFor="firstname" className="placeholder">
      First name
    </label>
  </div>
  
  <div className="input-container ic2">
    <input id="email" className="input" type="text" onChange={(e)=> setEmail (e.target.value)} />
    <div className="cut cut-short" />
    <label htmlFor="email" className="placeholder">
      Email
    </label>
  </div>

  <div className="input-container ic2">
    <input id="password" className="input" type="password" onChange={(e)=> setPassword (e.target.value)} />
    <div className="cut" />
    <label htmlFor="lastname" className="placeholder">
      Password
    </label>

  </div>
  <button onClick={signUpFunction} type="text" className="submit">
    submit
  </button>
</div>

    </div>
  )
}

export default SignUp