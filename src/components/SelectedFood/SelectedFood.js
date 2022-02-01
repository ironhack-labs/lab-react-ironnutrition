import React from 'react';
import './SelectedFood.css';

function SelectedFood(props) {
  console.log('PROPS SELECTED FOOD', props);
  return (
    <div>
      <h2>Today´s foods</h2>
      <ul>
        <li>{props.foodSelected}</li>
      </ul>
    </div>
  );
}

export default SelectedFood;
