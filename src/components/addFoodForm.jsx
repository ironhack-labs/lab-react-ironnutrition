import React, { useState } from 'react';

function AddFood(props) {
    const {createdFood} = props
  //For every single input we need a state variable
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  //Create a handler function for every input/state
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  //handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    let newFood = { name, image, calories, servings };
    console.log(newFood);

    //We trigger the createMovie function that will update the state on the parent component

    createdFood(newFood);

    //Reset the states
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

        <label htmlFor="image">Image</label>
        <input type="text" value={image} onChange={handleImage} />

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