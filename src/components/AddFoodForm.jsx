// Your code here

import { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";

function AddFoodForm({ addFood }) {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    addFood(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Image" name="image" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Calories" name="calories" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Servings" name="servings" rules={[{ required: true }]}>
        <InputNumber />
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

