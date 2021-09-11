import React, { useState } from 'react';
import "./Form.css";

const Form = ({ foodList, setFoodList, showHideForm }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      id: new Date().getTime(),
      name: name,
      image: image,
      calories: calories,
    };

    setFoodList([...foodList, newFood]);
    showHideForm();
    setName('');
    setCalories('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-food-container">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          name="calories"
          placeholder="Calories"
          value={calories}
          onChange={(event) => setCalories(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
