import { Input, Button, Form } from 'antd';

function AddFoodForm({ onAddFood }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAddFood(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" style={{ marginBottom: 20 }}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input the food name!' }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item
        label="Image"
        name="image"
        rules={[{ required: true, message: 'Please input the image URL!' }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item
        label="Calories"
        name="calories"
        rules={[{ required: true, message: 'Please input the calories!' }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Servings"
        name="servings"
        rules={[{ required: true, message: 'Please input the servings!' }]}
      >
        <Input type="number" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </Form>
  );
}

export default AddFoodForm;
