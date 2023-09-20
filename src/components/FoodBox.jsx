import React from "react";
import { Card, Button, InputNumber } from 'antd';

function FoodBox({ food, onAdd }) {
  //const { name, calories, image, servings } = food;
  //const totalCalories = calories * servings;
  return (
    <div className="FoodBox">
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>Calories: {calories} kcal</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories} kcal</b>
        </p>
        <Card title={food.name} style={{ width: 300 }}>
      <p>{food.calories} calories</p>
      <InputNumber min={1} defaultValue={1} onChange={(value) => onAdd(food, value)} />
      <Button type="primary" onClick={() => onAdd(food)}>Add</Button>
    </Card>
        <button onClick={() => onDelete(food.id)}>Delete</button>
      </div>
    </div>
  );
}

export default FoodBox;
