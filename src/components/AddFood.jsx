import { useState } from 'react';
import React from 'react';

const AddFood = (props) => {
  // states
  const [name, setName] = useState('');

  const [calories, setCalories] = useState('');

  const [image, setImage] = useState('');

  const [quantity, setQuantity] = useState(0);

  // handle the inputs

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };

  const handleImageInput = (e) => {
    setImage(e.target.value);
  };
  const handleQuantityInput = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, image, quantity };
    props.addFood(newFood);
    setName('');
    setCalories('');
    setImage('');
    setQuantity('');
  };

  return (
    <div className="AddMovie">
      <h4>Add new food </h4>
      <form>
        <label>Food:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label>Calories:</label>
        <input
          type="text"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label>Image:</label>
        <input
          type="image"
          name="image"
          value={image}
          src={image}
          onChange={handleImageInput}
        />

        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value="1"
          onChange={handleQuantityInput}
        />

        <button type="submit" onClick={handleSubmit}>
          Add a Movie
        </button>
      </form>
    </div>
  );
};
export default AddFood;
