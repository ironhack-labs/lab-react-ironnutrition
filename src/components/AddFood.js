import React, { useState } from 'react';

export default function AddFood(props) {

  const {addNewFood} = props

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleNameInput = (event) => setName(event.target.value);
  const handleCaloriesInput = (event) => setCalories(event.target.value);
  const handleImageInput = (event) => setImage(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {name, calories, image};
    addNewFood(newFood);
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>

      <div>
        <label>Name:</label>
        <input className="input"
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
      </div>

      <div>
        <label>Calories:</label>
        <input className='input'
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />
      </div>  

      <div>
        <label>Image:</label>
        <input className='input'
          type="url"
          name="image"
          alt="image"
          value={image}
          onChange={handleImageInput}
        />
      </div>  

        <button className='button is-info' type="submit">Add new food</button>
      </form>
    </div>
  );
}
