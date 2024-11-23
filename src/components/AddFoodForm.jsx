import React, { useState } from "react";
import { Input, Button, Form } from "antd";

function AddFoodForm({ onAddFood }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newFood = {
      name: formData.name,
      image: formData.image,
      calories: Number(formData.calories),
      servings: Number(formData.servings),
    };
    onAddFood(newFood);
    setFormData({ name: "", image: "", calories: "", servings: "" });
  };

  return (
    <Form
      onFinish={handleSubmit}
      layout="vertical"
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <Form.Item label="Name" name="name" required>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter food name"
        />
      </Form.Item>
      <Form.Item label="Image" name="image" required>
        <Input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
      </Form.Item>
      <Form.Item label="Calories" name="calories" required>
        <Input
          type="number"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
          placeholder="Enter calories"
        />
      </Form.Item>
      <Form.Item label="Servings" name="servings" required>
        <Input
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
          placeholder="Enter servings"
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
        Create
      </Button>
    </Form>
  );
}

export default AddFoodForm;
