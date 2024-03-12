

 /*function FoodBox({food,deleteFood}) {
   
  
    
  
    return (
      <div className="food-card">
      <h2>FoodList</h2>
      
          <p>{food.name}</p>
  
          <img src={food.image} alt={food.name}/>
  
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
  
          <p>
              <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
  
          <button onClick={deleteFood}>Delete</button>
          </div>
    )
  }
  export default FoodBox;*/
  // Your code here
import { Card, Row,  Button, Divider } from "antd";

function FoodBox({food, onDelete}) {
    
    return (
    <div>
      <Row>
      {/* <Col> */}
        <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />

          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
              <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
          <Button type="primary" onClick={() => onDelete(food.id)}> Delete </Button>
        </Card>
      {/* </Col> */}
      </Row>
    </div>
    );
  }

export default FoodBox;

// function FoodBox({food, onDelete}) {
    
//   return (
//     <div className="food-card">
//         {/* 3 | Render a List of FoodBox Components */}
//         <p>{food.name}</p>
//         <img src={food.image} alt={food.name}/>
//         <p>Calories: {food.calories}</p>
//         <p>Servings: {food.servings}</p>
//         <p>
//             <b>Total Calories: {food.calories * food.servings} </b> kcal
//         </p>
//         {/* 4 | Delete List Items */}
//         <button className="button" onClick={() => onDelete(food.id)}>Delete</button>
//    </div>
//   );
// }
