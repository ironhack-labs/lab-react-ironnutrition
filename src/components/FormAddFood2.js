import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
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

        <Form.Item label="image" name="image">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const FormAddFood = ({ HandlerAddFood }) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    HandlerAddFood({ ...values, quantity: 0 });
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add Food
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default FormAddFood;
