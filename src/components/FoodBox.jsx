// import "../styles/food-box.css"
import { Card, Col, Button } from "antd";

function FoodBox(props) {
  const {food, handleFoodDelete} = props
  return (
     <Col>
     <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
       <img src={food.image} height={60} alt="food" />
       <p>Calories: {food.calories}</p>
       <p>Servings {food.servings}</p>
       <p>
         <b>Total Calories: {food.calories * food.servings}</b> kcal
       </p>
       <Button type="primary" onClick={() => handleFoodDelete(food.id)}> Delete </Button>
     </Card>
   </Col>
  )
}

export default FoodBox



// <div id='food-card'>
//     <p className='food-card-title'>{food.name}</p>
//     <div className='food-card-image-container'>
//         <img src= {food.image} />
//     </div>
//     <p>Calories: {food.calories}</p>
//     <p>Servings <b>{food.servings}</b></p>
//     <p><b>Total Calories: {food.servings * food.calories} </b> kcal</p>
//     <button onClick={()=>handleFoodDelete(food.id)} className='food-card-delete'>Delete</button>
// </div>