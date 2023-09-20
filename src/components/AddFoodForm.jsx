import { useState } from "react";
import { Divider, Input, Card, Row, Form, Button } from "antd";

function AddFoodForm(props) {
  const { food, addNewFood } = props;

  console.log("AddFoodForm Props:", props);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent view to reload
    const newFood = { name, image, calories, servings };

    console.log("Submitted", newFood);

    // Add food to the list (Actions-up: send data back to Parent(here:App.jsx) component)
    addNewFood(newFood); //props.addNewFood(newFood) but we destructured above, so this works also.

    // Reset the state
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <Row style={{ justifyContent: "center" }}>
      <Card style={{ width: 1000, margin: 10, backgroundColor: "#ffb6c1" }}>
        <form onSubmit={handleSubmit}>
          <Divider>Add Food Entry</Divider>
          <Form.Item label="Name">
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleNameInput} // directly: onChange={(event) => setName(event.target.value)}
            />
          </Form.Item>

          <Form.Item label="Image">
            <Input
              type="text"
              name="image"
              value={image}
              onChange={handleImageInput}
            />
          </Form.Item>

          <Form.Item label="Calories">
            <Input
              type="number"
              name="calories"
              value={calories}
              onChange={handleCaloriesInput}
            />
          </Form.Item>
          <Form.Item label="Servings">
            <Input
              type="number"
              name="servings"
              value={servings}
              onChange={handleServingsInput}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </form>
      </Card>
    </Row>
  );
}

export default AddFoodForm;
