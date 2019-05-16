import React from 'react'

const Food= ({name,kcal,qty}) => (
  <li>
    <p>{qty} {name} {kcal}</p>
  </li>
);

export default Food; 
