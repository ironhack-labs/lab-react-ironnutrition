import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

const AddFoodForm = ({ onAddFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    onAddFood(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={name}
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        value={image}
        type="text"
        placeholder="Image URL"
        onChange={(event) => setImage(event.target.value)}
      />
      <Input
        value={calories}
        type="text"
        placeholder="Calories"
        onChange={(event) => setCalories(event.target.value)}
      />
      <Input
        value={servings}
        type="text"
        placeholder="Servings"
        onChange={(event) => setServings(event.target.value)}
      />
      <Button type="primary" htmlType="submit">
        Add New Food
      </Button>
    </form>
  );
};

export default AddFoodForm;