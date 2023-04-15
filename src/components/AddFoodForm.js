import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };
    onAddFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          type="text"
          placeholder="Food name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(event) => setCalories(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="number"
          placeholder="Servings"
          value={servings}
          onChange={(event) => setServings(event.target.value)}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add food
      </Button>
    </Form>
  );
}

export default AddFoodForm;
