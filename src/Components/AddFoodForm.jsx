import { useState } from 'react';

function AddFoodForm({ newFood, setNewFood, setFood, food }) {
  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodImage, setNewFoodImage] = useState('');
  const [newFoodCalories, setNewFoodCalories] = useState('');
  const [newFoodServings, setNewFoodServings] = useState('');

  function createButton(event) {
    event.preventDefault();
    console.log(event);
    const newItem = {
      name: newFoodName,
      image: newFoodImage,
      calories: newFoodCalories,
      servings: newFoodServings,
    };

    setFood([newItem, ...food]);
    setNewFoodName('');
    setNewFoodCalories('');
    setNewFoodImage('');
    setNewFoodServings('');
  }
  return (
    <div>
      <form onSubmit={createButton}>
        <label>Name</label>
        <input
          type="text"
          value={newFoodName}
          onChange={(event) => {
            setNewFoodName(event.target.value);
          }}
        />
        <label>Image</label>
        <input
          type="text"
          value={newFoodImage}
          onChange={(event) => {
            setNewFoodImage(event.target.value);
          }}
        />
        <label>Calories</label>
        <input
          type="number"
          value={newFoodCalories}
          onChange={(event) => {
            setNewFoodCalories(event.target.value);
          }}
        />
        <label>Servings</label>
        <input
          type="number"
          value={newFoodServings}
          onChange={(event) => {
            setNewFoodServings(event.target.value);
          }}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
