import { useState } from 'react';
import './index.css';

export const AddFoodForm = ({createFood}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeImage = (event) => setImage(event.target.value);
  const handleChangeCalories = (event) => setCalories(event.target.value);
  const handleChangeServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = { name, image, calories, servings };
    console.log(newFood);
    createFood(newFood);
  };

  return (
    <div className="AddFoodForm">
      <form  onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          placeholder="PIZZA"
          value={name}
          type="text"
          onChange={handleChangeName}
        />
        <label>Image</label>
        <input
          name="image"
          placeholder="https://i.imgur.com/DupGBz5.jpg"
          value={image}
          type="text"
          onChange={handleChangeImage}
        />
        <label>Calories</label>
        <input
          name="calories"
          placeholder="85"
          value={calories}
          type="text"
          onChange={handleChangeCalories}
        />
        <label>Servings</label>
        <input
          name="servings"
          placeholder="1"
          value={servings}
          type="number"
          onChange={handleChangeServings}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
