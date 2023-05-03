import React, { useState } from "react";
import { Input, Button, Form } from "antd";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (event) => {
    const newFood = { name, image, calories, servings };
    props.addFood(newFood);
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <Form onFinish={(event) => handleSubmit(event)}>
      <Form.Item label="Name">
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Item>
      <Form.Item label="Image">
        <Input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </Form.Item>
      <Form.Item label="Calories">
        <Input
          type="number"
          value={calories}
          onChange={(event) => setCalories(event.target.value)}
        />
      </Form.Item>
      <Form.Item label="Servings">
        <Input
          type="number"
          value={servings}
          onChange={(event) => setServings(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Food
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddFoodForm;
/*Cheesecake URL:
https://i0.wp.com/www.onceuponachef.com/images/2017/12/cheesecake.jpg?resize=1120%2C1300&ssl=1 */