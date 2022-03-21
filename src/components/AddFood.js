import React from 'react';
import { useState } from 'react';

export const AddFood = (props) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, image, quantity };
    props.handleForm(newFood);

    setName('');
    setCalories('');
    setImage('');
    setQuantity(0);
  };

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);

  return (
    <div
      style={{
        margin: '20px 0 30px',
        width: '60%',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          marginLeft: '30px',
          paddingLeft: '25px',
          width: '50%',
        }}
        className="box"
      >
        <label for="name">Name: </label>
        <input
          type="text"
          name="name"
          vale={name}
          onChange={handleNameInput}
        ></input>
        <br />
        <label for="calories">Calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        ></input>
        <br />
        <label for="image">Image URL: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        ></input>

        <button
          className="button is-primary is-rounded"
          type="submit"
          style={{ width: '50%', margin: '35px' }}
        >
          Add food
        </button>
      </form>
    </div>
  );
};
