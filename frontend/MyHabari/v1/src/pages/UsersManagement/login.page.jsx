// styling
import './loginpage.css'

import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../app/userSlice';

import FormInput from '../../components/form.component';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate,Link } from 'react-router-dom';
import ImageDisplayComponent from '../../components/image.component';
import photos from '../../assets/images/photos';

const Root_url=import.meta.env.VITE_API_URL;




const LoginPage = () => {
  
  const dispatch = useDispatch();
  //posting the data

  const url=Root_url+'user/login'
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false);


 
  useEffect(() => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const login = async () => {
      try {
        setError('');
        //fetching the data
        const response = await axios.post(url, { Email, Password });
        //extracting the token
        const { token } = response.data;
;

        Cookies.set('MH_TKN', token, { expires:100/1440 });
        
        const userData = await axios.get(`${Root_url}user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        await dispatch(loginSuccess(userData.data));


        await sleep(2000);
        
       navigate('/home');


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
  }, [isSubmitting, Email, Password, navigate]); // Dependency array

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
  };



  return( 
    <div className='Loginpage'>
        <div className='applogo'>
            <ImageDisplayComponent src={photos.applogo} height={"100px"}/>
        </div>
        <div>
        <h2>Login</h2>
        </div>


        {isSubmitting&& (
          <div className='loadingOverlay'>
             <ImageDisplayComponent className='loadingSvg' src={photos.loading} height={"30px"}/>
          </div>
        )}

      <div className='loginform'>
    {error}
    <form onSubmit={handleLogin}>
      <FormInput label="Email" type="email"  value={Email} onChange={(e) => setEmail(e.target.value)} required />
      <FormInput label="Password" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
     
      <Link className="link" to="/fogot">
        
      fogot password ?
        
        </Link>
       
        <br/>
     
      <button className='submitbutton' type="submit" >
      {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
    </div>
    <Link className='link' to="/register">register</Link>
  </div>

);
}

export default LoginPage;