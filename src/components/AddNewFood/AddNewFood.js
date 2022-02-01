import React, { useState } from 'react';

function AddNewFood(props) {
  console.log(props.addNewFood);
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');

  const handleFoodNameInput = (e) => setName(e.target.value);

  const handleFoodCalInput = (e) => setCalories(e.target.value);

  const handleFoodImageInput = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, image };
    props.addNewFood(newFood);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Food name"
          name={name}
          id=""
          onChange={handleFoodNameInput}
        />
        <input
          type="text"
          placeholder="Food Calories"
          name={calories}
          id=""
          onChange={handleFoodCalInput}
        />
        <input
          type="text"
          placeholder="Food image"
          name={image}
          id=""
          onChange={handleFoodImageInput}
        />
        <button>Add new Food</button>
      </form>
    </div>
  );
}

export default AddNewFood;
