import { useState } from "react";
import { Input, Form, Button, message } from "antd";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };

    // Validation
    if (!name || !image || !calories || !servings) {
      message.error("Please fill in all fields.");
      return;
    }

    if (calories < 0 || servings < 0) {
      message.error("Calories and servings cannot be negative.");
      return;
    }

    if (typeof calories !== "number" || typeof servings !== "number") {
      message.error("Calories and servings must be numbers.");
      return;
    }

    props.addFood(newFood);
    message.success("Food added successfully.");
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="number"
          name="calories"
          placeholder="Calories"
          value={calories}
          onChange={(event) => setCalories(parseInt(event.target.value))}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="number"
          name="servings"
          placeholder="Servings"
          value={servings}
          onChange={(event) => setServings(parseInt(event.target.value))}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add Food
      </Button>
    </Form>
  );
}

export default AddFoodForm;
