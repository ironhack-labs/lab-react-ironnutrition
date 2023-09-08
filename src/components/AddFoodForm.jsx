import { Input } from 'antd';
import React, { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState('');
  const [calories, setCalories] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newDish = { name, calories, image, servings };
    props.addNewFood(newDish);

    setName("")
    setImage("")
    setCalories("")
    setServings("")
  }

  return (
    <div>
      <h1>Add Food Entry</h1>
      <form onSubmit={handleSubmit} className='labels-left mt-4'>
        <div className='mt-4'>
          <label htmlFor="">Name</label>
          <Input
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className='mt-4'>
          <label htmlFor="">Image</label>
          <Input
            value={image}
            type="text"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>

        <div className='mt-4'>
          <label htmlFor="">Calories</label>
          <Input
            value={calories}
            type="number"
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />
        </div>

        <div className='mt-4'>
          <label htmlFor="">Servings</label>
          <Input
            value={servings}
            type="number"
            onChange={(e) => {
              setServings(e.target.value);
            }}
          />
        </div>

        <button className='mt-4'>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
