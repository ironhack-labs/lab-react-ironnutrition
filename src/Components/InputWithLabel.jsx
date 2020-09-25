import React from "react";

export default function InputWithLabel({ name, value, onChange }) {
  return (
    <div className='py-2'>
      <input name={name} type="text" value={value} onChange={onChange} className='input is-info' placeholder={name} />
    </div>
  );
}