import React from 'react';

import {Input} from '@chakra-ui/react'

import './forms.styles.css'

function FormInput({ label, type, value, onChange }) {
  return (
    <div>
      <label>
        {label}:
        <Input  className='forminput'  type={type} value={value} onChange={onChange} required />
  
      </label>
      <br />
    </div>
  );
}

export default FormInput;
