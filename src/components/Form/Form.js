import React, { useState } from 'react';

const Form = ({ submitHandler, stateFunc }) => {
  const initialState = {
    name: '',
    calories: '',
    url: '',
  };

  const [formState, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((state) => ({
      ...state,
      [name]: value,
      quantity: 0,
    }));
  };
  return (
    <form
      onSubmit={(event) =>
        submitHandler(event, formState, setForm(initialState), stateFunc)
      }
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formState.name}
        required
        onChange={handleChange}
      />
      <label htmlFor="calories">Number of calories</label>
      <input
        type="text"
        name="calories"
        id="calories"
        value={formState.calories}
        required
        onChange={handleChange}
      />
      <label htmlFor="image">Add url image</label>
      <input
        type="text"
        name="image"
        id="url"
        value={formState.image}
        required
        onChange={handleChange}
      />

      <button type="submit">Save new Food</button>
    </form>
  );
};

export default Form;
