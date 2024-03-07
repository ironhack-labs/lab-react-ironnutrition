import { Card, Col, Button } from "antd";

function FoodBox(props) {
  const { id, name, image, calories, servings } = props.food;
  const DeleteItem = props.DeleteItem;

  return (
    <Col className="FoodBox">
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>
        <p>
          <b>Total Calories: {servings * calories}</b> kcal
        </p>
        <Button type="primary" onClick={() => DeleteItem(id)}>
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

/*
Iteration 5 | Add New Food - AddFoodForm component
Let's add some more ingredients to the mix! :wink:

In the src/components/AddFoodForm.jsx file, create a new controlled component named AddFoodForm that lets you add new food items to your list.

The component should contain a form with four (4) input elements:

Input with the label Name with attributes: name="name" and type="text"
Input with the label Image with attributes: name="image" and type="text"
Input with the label Calories with attributes: name="calories" and type="number"
Input with the label Servings with attributes: name="servings" and type="number"

The form should have a submit button displaying the text Create.


Once you've created the AddFoodForm component, render it in App.js. When the submit button is clicked, the new food item should be added to the list.

Hint: To add a new food item to the foods array, which is in the state of the App component, you have to pass a function from the App to the AddFoodForm component through props. This function should take the values entered in the input fields and add them as a new object to the foods array.

*/

export default FoodBox;
