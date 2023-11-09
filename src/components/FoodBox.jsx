// Your code here
import { Card, Col, Button } from "antd";

function FoodBox(props) {
  const { name, calories, image, servings } = props;
  const totalCalories = servings * calories;
  console.log(props);
  return (
    <div>
      <Col>
        <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
          <img src={image} height={60} alt="food" />
          <p>Calories: {calories}</p>
          <p>Servings {servings}</p>
          <p>
            <b>Total Calories: {totalCalories}</b> kcal
          </p>
          <Button type="primary" onClick={(deleteFood) => {}}>
            {" "}
            Delete{" "}
          </Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
