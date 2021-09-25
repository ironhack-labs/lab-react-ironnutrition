import React, { useState } from 'react';

const AddFoodForm = (props) => {
  const [nameEntered, setName] = useState('');
  const [caloriesEntered, setCalories] = useState('');
  const [imageEntered, setImage] = useState('');

  const nameChangeHandler = (event) => {
    console.log('this is the name to save ' + event.target.value);
    setName(event.target.value);
  };
  const caloryChangeHandler = (event) => {
    setCalories(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setImage(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const foodData = {
      name: nameEntered,
      calories: caloriesEntered,
      image: imageEntered,
    };

    props.foodFormHandler(foodData);
    props.hideForm();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <label>Name of food</label>
      <input onChange={nameChangeHandler} type="text" />
      <label>Amount of calories</label>
      <input onChange={caloryChangeHandler} type="text" />
      <label>Image Link</label>
      <input onChange={imageChangeHandler} type="text" />
      <button type="submit">Add Food</button>
    </form>
  );
};

export default AddFoodForm;
