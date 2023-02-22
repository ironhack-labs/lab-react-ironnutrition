import React from 'react'
import { useState } from 'react';
import { Card, Input, Button, Form } from 'antd'

const AddFoodForm = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, image, calories, servings }
    props.addFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  }


  return (
    <Card
      title="Add Food Entry"
      style={{ width: 400, height: "auto", margin: 10 }}
    >
      <Form
        style={{ maxWidth: 400 }}
        layout="vertical"
      >
        <label>Name</label>
        <Input value={name} type="text" onChange={handleNameInput} style={{ marginBottom: 10 }} />

        <label>Image</label>
        <Input value={image} type="text" onChange={handleImageInput} style={{ marginBottom: 10 }} />

        <label>Calories</label>
        <Input value={calories} type="number" onChange={handleCaloriesInput} style={{ marginBottom: 10 }} />

        <label>Servings</label>
        <Input value={servings} type="number" onChange={handleServingsInput} style={{ marginBottom: 10 }} />

        <Button type="primary" onClick={handleSubmit}>Create</Button>
      </Form>
    </Card>
  );
}

export default AddFoodForm