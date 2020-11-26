import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormAddFood = ({HandlerAddFood}) => {
  const [visible, setVisible] = useState(false);

  const showModal = (e) => {
    console.log(e);
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const onFinish = values => {
    HandlerAddFood(values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add new food
      </Button>
      <Modal
        title="New Food"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
         {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="name"
            name="name"
            rules={[{ message: '¿Cómo se llama el el alimento?' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="calories"
            name="calories"
            rules={[{ message: '¿Cuántas calorías tiene?' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="image"
            name="image"
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Add Food
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default FormAddFood;
