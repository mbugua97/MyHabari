import React from 'react';

function FormInput({ label, type, value, onChange }) {
  return (
    <div>
      <label>
        {label}:
        <input type={type} value={value} onChange={onChange} required />
      </label>
      <br />
    </div>
  );
}

export default FormInput;
