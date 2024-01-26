import React from "react";

import { Button, Image, Flex } from "antd";

function FoodBox(props) {
  const { food, handleDeleteItem } = props;

  // console.log(food);

  const cardStyle = {
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    border: "1px solid black",
    padding: "10px",
    boxSizing: "border-box",
    width: "25%",
  };

  const imgBoxStyle = {
    width: "100%",
    height: "120px",
    overflow: "hidden",
  };

  return (
    // <div key={food.id} className="food-card">
    <div style={cardStyle}>
      <p>{food.name}</p>
      <Flex style={imgBoxStyle} vertical justify="center">
        <Image src={food.image} width={"100%"} />
      </Flex>
      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>
      <Button
        type="primary"
        onClick={() => {
          handleDeleteItem(food.id);
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default FoodBox;
