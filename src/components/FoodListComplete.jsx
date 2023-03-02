import React from 'react';
import { useState } from 'react';
import { Card, Col, Button } from 'antd';
import foods from '../foods.json';


function FoodListComplete({ findFood }) {

    const [food, setFood] = useState(foods);

 const deleteFood = (foodId) => {
   const filteredFood = foods.filter((dish) => {
     return foods._id !== foodId;
   });
   setFood(filteredFood);
 };

  return (
    <div>
      {findFood.map((dish, index) => {
        return (
          <div key={index}>
            <Col>
              <Card
                title={dish.name}
                style={{ width: 230, height: 300, margin: 10 }}
              >
                <img src={dish.image} height={60} alt="food" />
                <p>Calories: {dish.calories}</p>
                <p>Servings: {dish.servings}</p>
                <p>
                  <b>Total Calories: {dish.calories * dish.servings} </b> kcal
                </p>
                <button onClick={() => deleteFood(food._id)}>Delete</button>
              </Card>
            </Col>
          </div>
        );
      })}
    </div>
  );
}

export default FoodListComplete;
