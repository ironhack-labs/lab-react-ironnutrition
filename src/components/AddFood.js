import { Modal, Button, Form, Input, Typography, Row, Col } from 'antd';
import React, { useState } from 'react';
const { Title } = Typography;

function AddFood({ foodsToMap, setFoodsToMap }) {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const submitForm = (e) => {
    const quant = { quantity: 0 };
    setFoodsToMap((foodsToMap) => [...foodsToMap, { ...e, ...quant }]);
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add Food
      </Button>
      <Modal
        title="Add New Food"
        visible={visible}
        onOk={submitForm}
        onCancel={handleCancel}
        footer={false}
      >
        <Row>
          <Col span={12} offset={6}>
            <Form layout="vertical" form={form} onFinish={submitForm}>
              <Form.Item name="name" label="Name">
                <Input />
              </Form.Item>
              <Form.Item name="calories" label="Number of Calories">
                <Input />
              </Form.Item>
              <Form.Item name="image" label="Image">
                <Input />
              </Form.Item>
              <Button
                style={{ backgroundColor: 'rebeccapurple' }}
                type="primary"
                block
                htmlType="submit"
              >
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default AddFood;
