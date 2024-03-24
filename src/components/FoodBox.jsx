import { Card, Col, Button } from "antd";
function FoodBox({ food, handleDelete }) {
  return (
    <Col>
      <Card className="foodBox">
        <p>{food.name}</p>

        <img className="imac" src={food.image} />

        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>

        <p>
          <b>
            Total Calories: ({food.calories} * {food.servings})
          </b>{" "}
          kcal
        </p>

        <Button type="primary" onClick={() => handleDelete(food.id)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
