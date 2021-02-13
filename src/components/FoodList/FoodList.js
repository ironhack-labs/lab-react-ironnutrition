import React from 'react';

const FoodList = ({ info: { quantity, name, calories }, deleteList }) => {
  return (
    <li>
      {' '}
      {`${quantity} ${name} = ${calories * quantity} cal`}{' '}
      <button onClick={() => deleteList(name)}>X</button>
    </li>
  );
};

export default FoodList;
