import React, { useState } from 'react';

const initialState = {
  name: '',
  calories: 0,
  image: '',
  quantity: 0,
};

const FoodForm = (props) => {
  const [formState, setFormState] = useState(initialState);

  // handleInputChange - will the data from the form to the component's state
  const handleInputChange = (event) => {
    // inputValue - the data coming in from the input fields
    let inputValue = event.target.value;
    let inputName = event.target.name;
    let inputType = event.target.type;

    if (inputType === 'number') {
      inputValue = parseInt(inputValue);
    }

    // make copy of state
    setFormState({ ...formState, [inputName]: inputValue });
  };

  // handleFormSubmit - send the data from the component's state to the state in App.js
  const handleFormSubmit = (event) => {
    // This prevents the default action of a form, which is reloading.
    event.preventDefault();

    // Send data from the form to App.js
    // 1. We need there to a function in App.js which will allow us to lift the state of FoodForm. done
    // 2. We need to use that function in FoodForm.
    props.handleLiftFoodFormState(formState);

    // Reset form state to initial state
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
