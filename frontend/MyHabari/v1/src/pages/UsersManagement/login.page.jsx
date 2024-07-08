// styling
import './loginpage.css'

import FormInput from '../../components/form.component';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';





const LoginPage = () => {


  const Root_url='http://127.0.0.1:3000/api/v1/'
  const url=Root_url+'user/login'

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate()

  useEffect(()=>{

       axios.post(url,{ Email, Password })
       .then((res)=>console.log(res))
      })

  const handleLogin = async (e) => {
  e.preventDefault();
  
};


  return( 
    
    <div>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <FormInput label="Email" type="email"  value={Email} onChange={(e) => setEmail(e.target.value)} required />
      <FormInput label="Password" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" >Login</button>
    </form>
  </div>

);
}

export default LoginPage;