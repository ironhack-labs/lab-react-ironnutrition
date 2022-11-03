import { Form, Input, InputNumber, Button } from 'antd';

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

  // ok, this got me confused... somehow the InputNumber-Component from AntDesign
  // has another event fired then the normal Input-Component
  // e.target.value = undefined because e is already the number | e = 1(2,3,4,5,6,7,8,9)
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

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <>
      <Form
        name="someForm"
        validateMessages={validateMessages}
        onFinish={handleSubmit}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input value={name} type="text" onChange={handleNameInput} />
        </Form.Item>
        <Form.Item name="image" label="Image" rules={[{ required: true }]}>
          <Input value={image} type="text" onChange={handleImageInput} />
        </Form.Item>
        <Form.Item
          name="calories"
          label="Calories"
          rules={[{ required: true }, { type: 'number', min: 1, max: 3000 }]}
        >
          <InputNumber
            value={calories}
            type="number"
            onChange={handleCaloriesInput}
          />
        </Form.Item>
        <Form.Item
          name="servings"
          label="Servings"
          rules={[{ required: true }, { type: 'number', min: 1, max: 12 }]}
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
    </>
  );
}
export default AddFoodForm;
