// components/AddFoodButton.js

import React from 'react';

const AddFoodButton = (props) => {
  const { toggleAddForm } = props;
  return (
    <div className='column is-one-fifth'>
      <button onClick={toggleAddForm} className='button is-info level-right'>Add Food</button>
    </div>
    );
}

export default AddFoodButton;
