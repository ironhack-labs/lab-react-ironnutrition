import { Card, Col, Button } from "antd";
function FoodBox({ food, onDelete }) {
    const { name, calories, image, servings } = food;
    const totalCalories = servings * calories;
  
    return (
<Col>
  <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b><b>kcal</b></p> 
        <Button type="primary" onClick={onDelete}>Delete</Button>
        </Card>
    </Col>
  )}
  
  export default FoodBox;
  