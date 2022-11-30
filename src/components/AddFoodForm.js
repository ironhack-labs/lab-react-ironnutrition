import { useState } from 'react';
import { Button, Collapse, Form, Input, InputNumber } from 'antd';
const { Panel } = Collapse;

export default function AddFoodForm({ food, setFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState(1);

  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handlSubmit = (e) => {
    e.preventDefault();

    setFood([
      ...food,
      {
        name,
        image,
        calories,
        servings,
      },
    ]);
  };
  return (
    <Collapse
      accordion
      bordered={false}
      style={{ width: 520, backgroundColor: '#fff' }}
    >
      <Panel header="Add new food" key={1}>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 0,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label="Name" name="name">
            <Input
              placeholder="Food name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Image" name="image">
            <Input
              placeholder="Food URL"
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Calories" name="calories">
            <Input
              placeholder="Amount of Calories"
              onChange={(e) => setCalories(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Servings" name="Servings">
            <InputNumber onChange={(value) => setServings(value)} />
          </Form.Item>
          <Form.Item label="Action" name="add">
            <Button type="dashed" onClick={handlSubmit}>
              Add New
            </Button>
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  );
}
