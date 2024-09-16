import { Card, Col, Button, Empty } from "antd";

export default function FoodBox({ foods, removeItem }) {
  return (
    <Col style={{ display: "flex", flexWrap: "wrap" }}>
      {foods.length === 0 && <Empty style={{ marginTop: 30 }} />}
      {foods.map((item, index) => {
        return (
          <Card
            key={item.id}
            title={`${item.name}`}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={item.image} height={60} alt="food" />
            <p>Calories: {item.calories}</p>
            <p>Servings {item.servings}</p>
            <p>
              <b>Total Calories: {item.servings * item.calories}</b> kcal
            </p>
            <Button type="primary" onClick={() => removeItem(index)}>
              Delete
            </Button>
          </Card>
        );
      })}
    </Col>
  );
}
