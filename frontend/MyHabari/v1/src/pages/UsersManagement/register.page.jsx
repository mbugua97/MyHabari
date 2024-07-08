//app deps
import React, { useState } from 'react';

// styling
import './loginpage.css'

import FormInput from '../../components/form.component';


const UserRegister = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(e);
    const url=Root_url+'user'
      const response = await axios.post(url,{ Name,Email, Password })
        console.log(response);
    
  };




  return( 
    
    <div>
    <h2>Register</h2>
    <form onSubmit={handleRegister}>
      <FormInput label="Name" type="text"  value={Name} onChange={(e) => setName(e.target.value)} />
      <FormInput label="Email" type="email"    value={Email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label="Password"type="password"   value={Password} onChange={(e) =>setPassword(e.target.value)} />
      <FormInput label="Confirm Password"type="password" value={confirmPassword} onChange={(e) =>setconfirmPassword(e.target.value)} />
      <button type="submit">register</button>
    </form>
  </div>

);
}

export default UserRegister;