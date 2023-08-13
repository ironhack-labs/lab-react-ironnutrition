import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

function AddFoodForm({ onAddFood }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newFood = {
      name: values.name,
      image: values.image,
      calories: parseInt(values.calories),
      servings: parseInt(values.servings),
    };
    onAddFood(newFood);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Title level={3} style={{ textAlign: 'center' }}>
        Add Food Entry
      </Title>
      <Form.Item name="name" label="Name">
        <Input placeholder="Enter food name" />
      </Form.Item>
      <Form.Item name="image" label="Image">
        <Input placeholder="Enter image URL" />
      </Form.Item>
      <Form.Item name="calories" label="Calories">
        <Input type="number" placeholder="Enter calories" />
      </Form.Item>
      <Form.Item name="servings" label="Servings">
        <Input type="number" placeholder="Enter servings" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddFoodForm;
