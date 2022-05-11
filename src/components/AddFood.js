import { useState } from 'react';
import React from 'react';

function AddFood(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      calories,
      image,
    };

    props.callbackCreateFood(newFood);

    setName('');
    setCalories('');
    setImage('');
  };

  return (
    <div className="AddFood">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <div className="control">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </label>
        </div>

        <div>
          <label>
            Calories:
            <div className="control">
              <input
                type="number"
                name="calories"
                placeholder="0"
                value={calories}
                onChange={(e) => {
                  setCalories(e.target.value);
                }}
              />
            </div>
          </label>
        </div>

        <div>
          <label>
            Image:
            <div className="control">
              <input
                type="text"
                name="image"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </div>
          </label>
        </div>

        <button class="button is-info">Create</button>
      </form>
    </div>
  );
}

export default AddFood;
