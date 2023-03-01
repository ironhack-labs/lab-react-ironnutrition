import React, { useState } from 'react';

function AddNewFood({ addToList }) {
  //Create the state for the inputs
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState(0);
  const [calories, setCalories] = useState(0);

  //handler functions

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleServings = (e) => setServings(Number(e.target.value));
  const handleCalories = (e) => setCalories(Number(e.target.value));


  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, image, servings, calories };
    console.log(newFood);
    addToList(newFood);

    setName('');
    setImage('');
    setServings(0);
    setCalories(0);
  };

  return (
    <div>
      <h2>Add a Food</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="title" value={name} onChange={handleName} />

        <label htmlFor="image">Image</label>
        <input type="text" name="image" value={image} onChange={handleImage} />

        <label htmlFor="servings">Servings</label>
        <input type="number" name="servings" value={servings} onChange={handleServings} />

        <label htmlFor="calories">calories</label>
        <input type="number" name="calories" value={calories} onChange={handleCalories} />

       

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddNewFood;