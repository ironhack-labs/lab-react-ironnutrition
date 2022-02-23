import React from 'react';
import { useState } from 'react';
import './AddFood.css';

export default function AddFood(props) {
  const { createFood } = props;
  const [name, setName] = useState('');
  const [numOfCal, setNumOfCal] = useState('');
  const [image, setImage] = useState('');
  const [isFormShown, setFormShown] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setFormShown(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: name,
      calories: numOfCal,
      image: image,
    };
    createFood(newFood);
    setName('');
    setNumOfCal('');
    setImage('');
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleNumOfCalInput = (e) => {
    setNumOfCal(e.target.value);
  };
  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  return (
    <div className="AddFood-div">
      <button className="AddFood-btn" type="submit" onClick={handleForm}>
        Add Food!
      </button>

      {isFormShown && (
        <>
          <form className="AddFood-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                className="AddFood-input"
                type="text"
                name="name"
                value={name}
                onChange={handleNameInput}
              />
            </label>
            <label>
              Number of Calories:
              <input
                className="AddFood-input"
                type="number"
                name="calories"
                value={numOfCal}
                onChange={handleNumOfCalInput}
              />
            </label>
            <label>
              Image:
              <input
                className="AddFood-input"
                type="text"
                name="image"
                value={image}
                onChange={handleImageInput}
              />
            </label>
            <button type="submit" className="AddFood-btn">
              {' '}
              Add a new food!
            </button>
          </form>
        </>
      )}
    </div>
  );
}
