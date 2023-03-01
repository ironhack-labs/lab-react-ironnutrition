import React, { useState } from 'react';
import { Card, Col, Input, } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };
    props.addFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <Col>
        <Card>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="image">Image:</label>
            <Input
              type="text"
              id="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />

            <label htmlFor="calories">Calories:</label>
            <Input
              type="number"
              id="calories"
              value={calories}
              onChange={(event) => setCalories(event.target.value)}
            />

            <label htmlFor="servings">Servings:</label>
            <Input
              type="number"
              id="servings"
              value={servings}
              onChange={(event) => setServings(event.target.value)}
            />

            <button type="submit">Submit</button>
          </form>
        </Card>
      </Col>
    </div>
  );
}

export default AddFoodForm;
