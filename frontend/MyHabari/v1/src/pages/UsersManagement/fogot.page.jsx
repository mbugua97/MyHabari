// styling
import './loginpage.css'

import FormInput from '../../components/form.component';

import React from 'react';

const FogotPage = () => {
  return( 
    
    <div>
    <h2>Forgot</h2>
    <form>
      <FormInput label="Email" type="email" />
      <FormInput label="Password" type="password" />
      <button type="submit">request reset</button>
    </form>
  </div>

);
}

export default FogotPage;