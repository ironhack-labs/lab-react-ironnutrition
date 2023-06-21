import { Button, Col, Divider, Input, Row } from 'antd';

import { useState } from 'react';

export function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name,
      image,
      calories,
      servings,
    };

    props.addFood(newFood);

    setName('');
    setImage('');
    setServings('');
    setCalories('');
  };
  return (
    <Row
      style={{
        width: '100%',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <Col>
        <form onSubmit={handleSubmit}>
          <Divider>Add Food Entry</Divider>

          <label>Name</label>
          <Input
            required
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label>Image</label>
          <Input
            value={image}
            type="text"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />

          <label>Calories</label>
          <Input
            required
            value={calories}
            type="number"
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />

          <label>Servings</label>
          <Input
            required
            value={servings}
            type="number"
            onChange={(e) => {
              setServings(e.target.value);
            }}
          />

          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </form>
      </Col>
    </Row>
  );
}
