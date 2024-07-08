//app deps
import React, { useState,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';


// styling
import './loginpage.css'

import FormInput from '../../components/form.component';


const UserRegister = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const Root_url='http://127.0.0.1:3000/api/v1/'
  
  
  useEffect(() => {
    const register= async () => {
      try {
        setError('');
        const url=Root_url+'user'
        const response = await axios.post(url, { Name,Email,Password });

        if (response.status==201){

          navigate('/')

        }

      } catch (err) {
        //arlert the error
        setError('Invalid email try a new email');
        console.log( err.response.status)
        } 
      finally {
        setIsSubmitting(false);
      }
    };

    if (isSubmitting) {
      register();
    }

    // Only run when isSubmitting changes
  }, [isSubmitting, Email, Password, navigate]); // Dependency array

  const handleRegister = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
  };



  return( 
    
    <div>
    <h2>Register</h2>
    {error}
    <form onSubmit={handleRegister}>
      <FormInput label="Name" type="text"  value={Name} onChange={(e) => setName(e.target.value)} />
      <FormInput label="Email" type="email"    value={Email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label="Password"type="password"   value={Password} onChange={(e) =>setPassword(e.target.value)} />
      <FormInput label="Confirm Password"type="password" value={confirmPassword} onChange={(e) =>setconfirmPassword(e.target.value)} />
      <button type="submit">register</button>
    </form>
    <br/>
    <Link to="/">Login</Link>
  </div>

);
}

export default UserRegister;