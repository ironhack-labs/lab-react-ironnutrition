import { useState } from 'react';

import { Button, Form, Input, InputNumber, Space } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addFood({ name, calories, image, servings });
    setName('');
    setCalories('');
    setImage('');
    setServings('');
  };

  return (
    <div className="AppFoodForm">
      <Space direction="vertical">
        <Form onSubmit={handleSubmit}>
          <Form.Item
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <Input placeholder="food name" />
          </Form.Item>

          <Form.Item
            label="Calories"
            type="number"
            name="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          >
            <InputNumber placeholder="calories (in kcal)" />
          </Form.Item>

          <Form.Item
            label="Image"
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          >
            <Input placeholder="image url" />
          </Form.Item>

          <Form.Item
            label="Servings"
            type="number"
            name="servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          >
            <InputNumber placeholder="servings" />
          </Form.Item>

          <Button
            type="primary"
            onClick={() =>
              props.addFood({
                name,
                calories,
                image,
                servings,
              })
            }
          >
            Create Food
          </Button>
        </Form>
      </Space>
    </div>
  );
}

export default AddFoodForm;
