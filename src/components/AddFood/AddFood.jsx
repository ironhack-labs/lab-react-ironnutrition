import React, { useState } from 'react';

function AddFood({createdFood}) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (event) => setName(event.target.value);
  // IT DOESN'T WORK const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    let newFood = { name, image, calories, servings };
    
    createdFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <h4>Add Foods</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={handleName} />
        {/* IT DOESN'T WORK <label htmlFor="image">Image</label>
        <input type="text" value={image} onChange={handleImage} /> */}
        <label htmlFor="calories">Calories</label>
        <input type="number" checked={calories} onChange={handleCalories} />
        <label htmlFor="servings">Servings</label>
        <input type="number" value={servings} onChange={handleServings} />

        <button type='submit'>Create Food</button>
      </form>
    </div>
  );
}

export default AddFood;