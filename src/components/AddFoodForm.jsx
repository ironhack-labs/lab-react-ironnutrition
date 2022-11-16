import React from 'react'
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function AddFoodForm({createFood}) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

    const handleName = (e) => setName(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newFood = { name, image, calories, servings };

    createFood(newFood);

    setName('');
    setImage('');
    setCalories(1);
    setServings(1);

}

  return (
    <div>

        <h4>Add Food</h4>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <Input type="text" value={name} onChange={handleName} />

            <label htmlFor="image">Image</label>
            <Input type="text" value={image} onChange={handleImage} />

            <label htmlFor="calories">Calories</label>
            <Input type="text" value={calories} onChange={handleCalories} />

            <label htmlFor="servings">Servings</label>
            <Input type="text" value={servings} onChange={handleServings} />

        <button>Create food</button>
      </form>

    </div>
  )
}



export default AddFoodForm