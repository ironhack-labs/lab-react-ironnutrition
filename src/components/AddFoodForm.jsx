import React, { useState } from 'react';
import { Input } from 'antd';
export default function AddFoodForm({ updateFoodsDefault, displayDiv }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  const handlePostData = (e) => {
    e.preventDefault();
    updateFoodsDefault({
      name,
      calories,
      image,
      servings,
    });
  };

  const divStyle = {
    display: displayDiv ? 'block' : 'none',
  };
  return (
    <div style={divStyle}>
      <h2>Add Food</h2>
      <form onSubmit={handlePostData}>
        <label htmlFor="name">Name</label>
        <Input
          value={name}
          id="name"
          name="name"
          type="text"
          onChange={handleName}
        />
        <label htmlFor="calories">Calories</label>
        <Input
          value={calories}
          type="text"
          name="calories"
          id="calories"
          onChange={handleCalories}
        />
        <label htmlFor="image">Image</label>
        <Input value={image} type="text" id="image" onChange={handleImage} />
        <label htmlFor="servings">Servings</label>
        <Input
          value={servings}
          id="servings"
          type="text"
          onChange={handleServings}
        />
        <button>Click</button>
      </form>
    </div>
  );
}
