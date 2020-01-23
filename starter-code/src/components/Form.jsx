import React from 'react';

const Form = ({ addFoods }) => {
  return (
    <div>
      <h2>Today's foods</h2>
      <div>
      {addFoods.filter((item) => item.quantity > 0).map((item) => `${item.quantity} ${item.name} ${item.quantity * item.calories} `)}
      </div>
      <div> Total
      {addFoods.reduce((acc, item) => acc + (item.quantity * item.calories), 0)} cal
      </div>
    </div>
  )
}

export default Form;