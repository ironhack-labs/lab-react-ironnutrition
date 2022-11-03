import { Form, Input, InputNumber, Button, Card } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddFoodForm({ addNewFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  const handleCaloriesInput = (e) => {
    setCalories(e);
  };

  const handleServingsInput = (e) => {
    setServings(e);
  };

  const handleSubmit = () => {
    const newFood = { name, image, calories, servings, _id: uuidv4() };
    addNewFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(1);
  };

  return (
    <Card title="Add Food" style={{ width: 'fit-content' }}>
      <Form name="someForm" onFinish={handleSubmit}>
        <Form.Item label="Name">
          <Input value={name} type="text" onChange={handleNameInput} />
        </Form.Item>
        <Form.Item label="Image">
          <Input value={image} type="text" onChange={handleImageInput} />
        </Form.Item>
        <Form.Item
          label="Calories"
          rules={[{ type: 'number', min: 1, max: 1000 }]}
        >
          <InputNumber
            value={calories}
            type="number"
            onChange={handleCaloriesInput}
          />
        </Form.Item>
        <Form.Item
          label="Servings"
          rules={[{ type: 'number', min: 1, max: 12 }]}
        >
          <InputNumber
            value={servings}
            type="number"
            onChange={handleServingsInput}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
export default AddFoodForm;
