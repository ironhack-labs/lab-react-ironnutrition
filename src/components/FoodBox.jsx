// // Your code here
// function FoodBox({ food, deleteFood}) {
    
//   return (
//     <div style={{border:"1px solid gray"}}>
//       <p>{food.name}</p>

//       <img src={food.image}  style={{width:150}}/>

//       <p>Calories: {food.calories}</p>
//       <p>Servings {food.servings}</p>

//       <p>
//         <b>Total Calories: {food.servings * food.calories} </b> kcal
//       </p>

//       <button onClick={()=> deleteFood(food.id)} >Delete</button>
//     </div>
//   );
// }

// export default FoodBox;

import React from "react";
import { Card, Button, Image } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

function FoodBox({ food, deleteFood }) {
  return (
    <Card
      title={food.name}
      bordered={false}
      style={{ width: 300, margin: "10px auto" }}
      cover={<Image src={food.image} alt={food.name} style={{ height: 150, objectFit: 'cover' }} />}
    >
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>
      <Button 
        type="primary" 
        danger 
        icon={<DeleteOutlined />} 
        onClick={() => deleteFood(food.id)}
      >
        Delete
      </Button>
    </Card>
  );
}

export default FoodBox;