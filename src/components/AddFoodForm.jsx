import { useState } from "react";
import { Divider, Input, Card, Row, Form, Button } from "antd";

function AddFoodForm(props) {
  const { addNewFood } = props;

 // console.log("AddFoodForm Props:", props);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const [checkbox, setCheckbox] = useState(false); //naming is wrong though.

  // const handleNameInput = (e) => setName(e.target.value); //this event: captured what's typed
  // const handleImageInput = (e) => setImage(e.target.value);
  // const handleCaloriesInput = (e) => setCalories(e.target.value);
  // const handleServingsInput = (e) => setServings(e.target.value);

//DRY (two argument - event & state update)
// handle both input fields & checkboxes!
  const inputHandler = (event, setState, isChecked) => {
    setState(isChecked ? event.target.checked : event.target.value)
  }

  //If isChecked is false (meaning the input field is not a checkbox), 
  // event.target.value is used to capture the value entered into a text input field. 
  // setState will be called with this value, updating the state of the respective input field with the entered text.


  const handleSubmit = (e) => {
    e.preventDefault(); // prevent view to reload (prevent the defaul behaviros of browser)
    const newFood = { name, image, calories, servings };

    // const newFood ={title:name, image:image, calories, serving}
    // if the key is different -> we have to A:B like "title = name"


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
              // onChange={handleNameInput} // directly: onChange={(event) => setName(event.target.value)}
              onChange={(event) => {
                inputHandler(event, setName) // functino we declared above (DRY)
                console.log(event.target.value)}}
            />
          </Form.Item>

          <Form.Item label="Image">
            <Input
              type="text"
              name="image"
              value={image}
              // onChange={handleImageInput}
              onChange={(event) => {
                inputHandler(event, setImage) // functino we declared above (DRY)
                console.log(event.target.value)}}
            />
          </Form.Item>

          <Form.Item label="Calories">
            <Input
              type="number"
              name="calories"
              value={calories}
              // onChange={handleCaloriesInput}
              onChange={(event) => {
                inputHandler(event, setCalories) // functino we declared above (DRY)
                console.log(event.target.value)}}
            />
          </Form.Item>
          <Form.Item label="Servings">
            <Input
              type="number"
              name="servings"
              value={servings}
              // onChange={handleServingsInput}
              onChange={(event) => {
                inputHandler(event, setCheckbox) // functino we declared above (DRY)
                console.log(event.target.value)}}
            />
          </Form.Item>
          <input type ="checkbox"  onChange={(event) => {
                inputHandler(event, setCheckbox, true) // functino we declared above (DRY)
                console.log(event.target.checked)}} />
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
