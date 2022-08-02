import React from 'react';

function FoodCard(props) {
  const { name, image } = props.food;
  return (
    <div>
      <p> {name}</p>
      <img src={image} width={100} />
    </div>
  );
}

export default FoodCard;