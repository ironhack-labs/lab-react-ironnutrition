import React, { useState } from 'react';
import './NewFood.css';

const NewFood = ({ newFood }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0 && image.length > 0) {
      newFood({ name, calories, image });
      setName('');
      setCalories(false);
      setImage(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="is-flex gap-16">
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input"
        type="number"
        name="calories"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <input
        className="input"
        type="text"
        name="image"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="button is-primary" type="submit">
        Add food
      </button>
    </form>
  );
};

export default NewFood;
