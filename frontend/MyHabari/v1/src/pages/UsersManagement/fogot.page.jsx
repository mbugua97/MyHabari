// styling
import './loginpage.css'
import FormInput from '../../components/form.component';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate,Link } from 'react-router-dom';
import photos from '../../assets/images/photos';
import ImageDisplayComponent from '../../components/image.component';


const LoginPage = () => {

  //posting the data
  const Root_url=import.meta.env.VITE_API_URL;
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
        console.log(err);

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
    <div className='Loginpage'>


<div className='applogo'>
            <ImageDisplayComponent src={photos.applogo} height={"100px"}/>
        </div>
        <div>
        <h2>forget</h2>
        </div>

    <div className='loginform'>
    {isSubmitting&& (
          <div className='loadingOverlay'>
             <ImageDisplayComponent className='loadingSvg' src={photos.loading} height={"30px"}/>
          </div>
   )}

    <form onSubmit={handleLogin}>
      <FormInput label="Email" type="email"  value={Email} onChange={(e) => setEmail(e.target.value)} required />
      <button  className='submitbutton' type="submit" >
      {isSubmitting ? 'forgeting...' : 'reset'}
      </button>
    </form>
    <Link  className="link" to="/login">Back to Login?</Link>
  </div>

  </div>

);
}

export default LoginPage;