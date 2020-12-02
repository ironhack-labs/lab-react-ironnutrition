import React, { useState } from 'react';
import 'bulma/css/bulma.css';

function AddFood(props) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFoodObj = { name, image, calories };
    props.addFood(newFoodObj);
    setImage('');
    setName('');
    setCalories(undefined);
  };

  return (
    <div className="AddFood__container">
      <form onSubmit={handleSubmit}>
        <input
          className="input is-info"
          value={name}
          name="name"
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="input is-info"
          value={calories}
          name="calories"
          type="number"
          placeholder="Calories"
          onChange={(e) => setCalories(e.target.value)}
        />
        <br />
        <input
          className="input is-info"
          value={image}
          name="image"
          type="text"
          placeholder="picture url"
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <button type="submit" className="button is-info">
          Add a food
        </button>
      </form>
    </div>
  );
}

export default AddFood;
