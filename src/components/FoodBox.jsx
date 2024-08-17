import { Card, Button } from "antd";

function FoodBox({ food, deleteFoodItem }) {
  return (
    <div>
      <Card>
        <p>{food.name}</p>

        <img src={food.image} width="80vw" />

        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>

        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>

        <Button onClick={() => deleteFoodItem(food.id)}>Delete</Button>
      </Card>
    </div>
  );
}

export default FoodBox;
