import React, { useState } from 'react';

const initialState = {
  name: '',
  calories: 0,
  image: '',
  quantity: 0,
};

const FoodForm = (props) => {
  const [formState, setFormState] = useState(initialState);
  const handleInputChange = (event) => {
    let inputValue = event.target.value;
    let inputName = event.target.name;
    let inputType = event.target.type;

    if (inputType === 'number') {
      inputValue = parseInt(inputValue);
    }

    setFormState({ ...formState, [inputName]: inputValue });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleLiftFoodFormState(formState);
    setFormState(initialState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="foodName">Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleInputChange}
        value={formState.name}
      />

      <label htmlFor="foodCalories">Calories:</label>
      <input
        type="number"
        name="calories"
        onChange={handleInputChange}
        value={formState.calories}
      />

      <label htmlFor="foodImage">Image:</label>
      <input
        type="text"
        name="image"
        onChange={handleInputChange}
        value={formState.image}
      />

      <label htmlFor="foodQuantity">Quantity:</label>
      <input
        type="number"
        name="quantity"
        onChange={handleInputChange}
        value={formState.quantity}
      />

      <button>Submit</button>
    </form>
  );
};

export default FoodForm;
