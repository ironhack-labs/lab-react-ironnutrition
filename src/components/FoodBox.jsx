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


export default FoodBox;
