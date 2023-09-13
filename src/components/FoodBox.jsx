import { Col, Card, Button } from "antd";

function FoodBox(props) {
  const calories = props.food.calories;
  const servings = props.food.servings;
  const caloriesTimesservings = calories * servings;
  return (
    <>
      <Col>
        <Card
          title={props.food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.food.image} height={60} alt="food" />
          <p>Calories: {calories}</p>
          <p>Servings {servings}</p>
          <p>
            <b>Total Calories: {caloriesTimesservings}</b> kcal
          </p>
          <Button type="primary" onClick={() => props.callbackToDelete(props.food.name)}>
            {" "}
            Delete{" "}
          </Button>
        </Card>
      </Col>
    </>
  );
}

export default FoodBox;
