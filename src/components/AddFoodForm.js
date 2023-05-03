import { Divider, Input } from 'antd';
import { useState } from 'react';
import FoodsJSON from '../foods.json';

// Iteration 4
function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);
//   const [movies, setMovies] = useState(moviesDataJSON);

//   const [showMovies, setShowMovies] = useState(true);

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleImageInput(e) {
    setImage(e.target.value);
  }

  function handleCaloriesInput(e) {
    setCalories(e.target.value);
  }

  function handleServingsInput(e) {
    setServings(e.target.checked);
  }

  const handleSubmit = (e) => {
    console.log('Handle submit is called');
    e.preventDefault();

    const newFood = { name, image, calories, servings };

    addFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(1);
  };

//   const toggleShowMovies = () => {
//     setShowMovies(!showMovies);
//   };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      {<Input value={image} type="text" onChange={handleImageInput} />}

      <label>Calories</label>
      {<Input value={calories} type="text" onChange={handleCaloriesInput} />}

      <label>Servings</label>
      {<Input value={servings} type="number" onChange={handleServingsInput} />}

      <button type="submit">Create</button>

      {/* <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button> */}
    </form>
  );
}

export default AddFoodForm;
