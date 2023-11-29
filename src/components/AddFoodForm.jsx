// Your code here
import React from "react";
import { Form, Divider, Input, Button } from "antd";

function AddFoodForm(props) {
  const [form] = Form.useForm();
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [calories, setCalories] = React.useState(0);
  const [servings, setServings] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories: parseInt(calories) || 0,
      servings: parseInt(servings) || 0,
    };
    console.log("Submitted: ", newFood);

    props.addFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };
  form.resetFields();

  return (
    <div className="AddFood">
      <h4>Add Food Entry</h4>
      <Form
        form={form}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 10 }}
        onSubmit={handleSubmit}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Image" name="image" rules={[{ required: true }]}>
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Calories"
          name="calories"
          rules={[{ type: "number", min: 0, required: true }]}
        >
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={(e) => setCalories(parseInt(e.target.value))}
          />
        </Form.Item>

        <Form.Item
          label="Servings"
          name="servings"
          rules={[{ type: "number", min: 0, required: true }]}
        >
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={(e) => setServings(parseInt(e.target.value))}
          />
        </Form.Item>
        <Form.Item>
          <button type="submit">Create</button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddFoodForm;
