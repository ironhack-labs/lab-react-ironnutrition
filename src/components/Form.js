import React, { useState } from 'react';
import './Form.css';

const handleSubmit = (
  setHide,
  foodList,
  setFoodList,
  name,
  calories,
  link,
  e
) => {
  e.preventDefault();
  if (foodList.some((food) => food.name === name)) {
    window.alert('THIS FOOD ALREAD EXIST!');
  } else if (!calories) {
    window.alert("This food don't have calories...");
  } else {
    foodList.push({ name: name, calories: calories, image: link, quantity: 0 });
    setFoodList([...foodList]);
    setHide(true);
  }
};

const Form = ({ setHide, foodList, setFoodList }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [link, setLink] = useState('');
  return (
    <form
      className="form-container is-flex"
      onSubmit={(e) =>
        handleSubmit(setHide, foodList, setFoodList, name, calories, link, e)
      }
    >
      <h2>NEW FOOD</h2>
      <label className="label is-small">Name</label>
      <input
        label="name"
        className="input is-small"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="label is-small">Calories</label>
      <input
        label="calories"
        className="input is-small"
        type="number"
        placeholder="Calories"
        min="0"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <label className="label is-small">Image Link</label>
      <input
        label="image link"
        className="input is-small"
        type="text"
        placeholder="Image Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <div className="form-buttons">
        <button className="button is-info">Add!</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setHide(true);
          }}
          className="button is-info"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
