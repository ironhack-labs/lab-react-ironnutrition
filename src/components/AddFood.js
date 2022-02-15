import React, { useState } from 'react';

function AddFood(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, quantity: 1, image };
    console.log('Submitted: ', newFood);

    props.addFood(newFood);

    setName('');
    setCalories('');
    setImage('');

    setFormVisible(false)
  };

  return (
    <div className="food-form">
    {!formVisible
    ? <button onClick={() => setFormVisible(true)}>Add food</button>
    : <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </label>

        <label>
          Calories:
          <input
            type="text"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </label>

        <label>
          Image:
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    }
      
      
    </div>
  );
}

export default AddFood;
