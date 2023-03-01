import { Input } from 'antd';
import React, { useState } from 'react';

function AddFoodForm({ addNewFood}) {
  
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(10);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(10);


  const handleName = (e) => setName(e.target.value);
  const handleCalories = (e) => setCalories(Number(e.target.value));
  const handleImage = (e) => setImage(e.target.value);
  const handleServings = (e) => setServings(Number(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, calories, image, servings };
    console.log(newFood);
    addNewFood(newFood);

    setName('');
    setCalories(10);
    setImage("");
    setServings(10);
  };

  return (
    <div>
      <h2>Add Food</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name</label>
        <Input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="director">Calories</label>
        <Input type="number" name="calories" value={calories} onChange={handleCalories} />

        <label htmlFor="Image">Image</label>
        <Input type="text" name="image" value={image} onChange={handleImage} />

        <label htmlFor="servings"> Servings</label>
        <Input type="number" name="servings" checked={servings} onChange={handleServings} />

        <button type="submit">Add Food</button>
      </form>
    </div>
  )
}
  export default AddFoodForm;