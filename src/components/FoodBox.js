import React from "react";
import { Card, Button } from "antd";


const { Meta } = Card;

function FoodBox(props) {
  const { name, image, calories, servings } = props.food;

  const handleDeleteClick = () => {
    props.onDelete(props.food);
  };

  return (
    <div>
      <Card
        hoverable
        style={{ width: 240, marginBottom: "16px" }}
        cover={<img alt={name} src={image} />}
      >
        <Meta title={name} description={`Calories: ${calories}`} />
        <p>Servings: {servings}</p>
        <Button type="primary" onClick={handleDeleteClick}>
          Delete
        </Button>
      </Card>
    </div>
  );
}

export default FoodBox;
