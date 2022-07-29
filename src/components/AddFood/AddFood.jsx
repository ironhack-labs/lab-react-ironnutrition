//import React from 'react';
import { Button, Form, InputNumber, Input } from 'antd';

const Section = ({ setFoodList, foodList }) => {
  const onFinish = (values) => {
    setFoodList((prevState) => [...prevState, values]);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      setFoodsList={setFoodList}
      foodList={foodList}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Image"
        name="image"
        rules={[
          {
            message: 'Please input your image',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Calories"
        name="calories"
        rules={[
          {
            message: 'Please input your calories',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Servings" name="servings">
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Section;
