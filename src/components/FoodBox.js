import { useState } from "react";
import food from "../foods.json"
import { Card, Row, Col, Divider, Input, Button } from 'antd';


// function FoodBox({food}) {
//     return (
//         <FoodBox food={ {
//             name: "Orange",
//             calories: 85,
//             image: "https://i.imgur.com/abKGOcv.jpg",
//             servings: 1
//           }} />
//     );
//   }
  
//   export default FoodBox;
  
  function FoodBox({food}) {
    return (
      <Col>
        <Card
          title={food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={food.image} height={60} alt="food" />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;