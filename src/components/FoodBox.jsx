import React, { useState } from 'react';

function FoodBox(props) {
  const { name, calories, image } = props.allFoods;

  const [countQty, setCountQty] = useState(1);

  const handleChangeQty = (event) => setCountQty(event.target.value);

  const addToFoodList = (event) => {
    event.preventDefault();

    let totalCalories = countQty * calories;

    const newFood = {
      name: name,
      caloriesPerPC: calories,
      image: image,
      quantity: countQty,
      totalCalories: totalCalories,
    };

    props.handleFoodList(newFood);

    setCountQty(1);
  };

  return (
    <div>
      <div>
        <img src={image} alt={image} width={100} />
      </div>
      <strong>{name}</strong>
      <small>{calories}</small>
      <div>
        <input type="number" onChange={handleChangeQty} value={countQty} />
      </div>
      <button onClick={addToFoodList}>+</button>
    </div>
  );
}

export default FoodBox;
