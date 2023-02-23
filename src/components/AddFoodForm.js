import React, { useState } from 'react';
import { Button } from 'antd';

const AddFoodForm = ({ addNewFood }) => {
  const [inputName, setInputName] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [inputCalories, setInputCalories] = useState(0);
  const [inputServings, setInputServings] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    addNewFood({
      inputName,
      inputCalories,
      inputImage,
      inputServings,
    });
    setInputName('');
    setInputImage('');
    setInputCalories(0);
    setInputServings(0);
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="name">Food Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      ></input>
      <label htmlFor="image">Image Url: </label>
      <input
        type="text"
        name="image"
        id="image"
        value={inputImage}
        onChange={(e) => {
          setInputImage(e.target.value);
        }}
      ></input>
      <label htmlFor="calories">Calories: </label>
      <input
        type="number"
        name="calories"
        id="calories"
        min={0}
        value={inputCalories}
        onChange={(e) => {
          setInputCalories(e.target.value);
        }}
      ></input>
      <label htmlFor="servings">Servings: </label>
      <input
        type="number"
        name="servings"
        id="servings"
        min={0}
        value={inputServings}
        onChange={(e) => {
          setInputServings(e.target.value);
        }}
      ></input>
      <Button htmlType="submit">Create</Button>
    </form>
  );
};

export default AddFoodForm;
