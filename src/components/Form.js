import React, { useState } from 'react';
import classes from './Form.module.css';

const Form = (props) => {
  const [foodState, setFoodState] = useState({
    name: '',
    calories: '',
    image: '',
  });
  const changeHandler = ({ target }) => {
    setFoodState({ ...foodState, [target.name]: target.value });
  };

  const formClasses = props.showForm ? classes.showForm : classes.hideForm;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(foodState);
      }}
      className={formClasses}
    >
      <label htmlFor="foodName">Name of the Food:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={foodState.name}
        onChange={changeHandler}
      />
      <label htmlFor="calories">Calories of the Food:</label>
      <input
        type="text"
        name="calories"
        id="calories"
        value={foodState.calories}
        onChange={changeHandler}
      />
      <label htmlFor="image">ImageSrc of the Food:</label>
      <input
        type="text"
        name="image"
        id="image"
        value={foodState.image}
        onChange={changeHandler}
      />
      <button type="submit">Add Food</button>
    </form>
  );
};

export default Form;
