// styling
import './loginpage.css'

import FormInput from '../../components/form.component';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate,Link } from 'react-router-dom';





const LoginPage = () => {

  //posting the data
  const Root_url='http://127.0.0.1:3000/api/v1/'
  const url=Root_url+'user/login'

  const [Email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


 
  useEffect(() => {
    const login = async () => {
      try {
        setError('');
        //fetching the data
        const response = await axios.post(url, { Email, Password });
        //extracting the token
        const { token } = response.data;

        //setting the token
        Cookies.set('MH_TKN', token, { expires:10/1440 });

        window.location.reload()

      } catch (err) {
        setError('Invalid email or password. Please try again.');
        console.log(error);

      } 
      finally {
        setIsSubmitting(false);
      }
    };

    // Call login function if form is submitting
    if (isSubmitting) {
      login();
    }

    // Only run when isSubmitting changes
  }, [isSubmitting, Email]); // Dependency array

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
  };



  return( 
    <div>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <FormInput label="Email" type="email"  value={Email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit" >
      {isSubmitting ? 'forgeting...' : 'fogot'}
      </button>
    </form>
    <Link to="/">Login</Link>
  </div>

);
}

export default LoginPage;