import { Card, Col, Button } from "antd";

function FoodBox(props) {
  console.log("FoodBox Props:", props);
  const { food, deleteFood } = props;

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 370, margin: 15 }}>
        <p>{food.name} </p>
        <img src={food.image} height={60} alt="food" />

        <p>Calories:{food.calories} </p>

        <p>Servings:{food.servings}</p>

        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>

        <Button type="primary" onClick={() => deleteFood(food.id)}> 
        {/* ACTIONS-UP:  trigger an action in the parent component  */}
          Delete 🗑️
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;


// if delete = {deleteFood} in App.jsx, all naming are changed; 
// -> onClick={() => delete(food.id)
// -> const { food, delete } = props;
//but the function it gets {deltedFood}, which was defined in App.jsx remains the same.

//ACTIONS-UP
// "deleteFood" is part of the "actions-up" pattern because it allows 
// the child component (FoodBox) to trigger an action 
// in the parent component (App) when a deletion operation needs to be performed. 
// The parent component then handles the action by modifying its state accordingly. 
// This pattern helps maintain a clear separation of concerns and allows for 
// better data management and state updates in React applications.
