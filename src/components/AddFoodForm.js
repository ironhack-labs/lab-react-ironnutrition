import { Divider, Input } from 'antd';
import { useState } from 'react';
import React from 'react';

const AddFoodForm = ({ name, image, calories, servings, addFood }) => {
  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodImage, setNewFoodImage] = useState('');
  const [newCalories, setNewCalories] = useState(0);
  const [newServings, setNewServings] = useState(0);

  console.log(newFoodName, newCalories, newServings, newFoodImage);

  const handleNameInput = (e) => {
    console.log(e.target.value);
    setNewFoodName(e.target.value);
  };

  const handleImageInput = (e) => {
    console.log(e.target.value);
    setNewFoodImage(e.target.value);
  };

  const handleCalsInput = (e) => {
    console.log(e.target.value);
    setNewCalories(e.target.value);
  };

  const handleServingsInput = (e) => {
    console.log(e.target.value);
    setNewServings(e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    addFood({
      name: newFoodName,
      calories: newCalories,
      image: newFoodImage,
      servings: newServings,
    });
  };

  return (
    <div>
      <Divider>
        <h3>AddFoodForm</h3>
      </Divider>
      <form
        style={{
          width: '500px',
          height: '300px',
          margin: '0 auto',
        }}
      >
        <label htmlFor={name}>Name</label>
        <Input value={name} type="text" onChange={handleNameInput} />
        <label htmlFor={image}>Image</label>
        <Input value={image} type="text" onChange={handleImageInput} />
        <label htmlFor={calories}>Calories</label>
        <Input value={calories} type="number" onChange={handleCalsInput} />
        <label htmlFor={servings}>Servings</label>
        <Input value={servings} type="number" onChange={handleServingsInput} />
        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default AddFoodForm;
