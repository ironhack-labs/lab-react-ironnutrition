import { Card, Col, Button } from "antd";


function FoodBox(props) {
    const {food, removeElement} = props
    
    const handleDelete = () => {
        removeElement(food.id);
    }

return (
<Col>
  <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
  <img src={food.image} height={60} alt="food"/>
  <p>Calories: {food.calories}</p>
  <p>Servings {food.servings}</p>
  <p>
    <b>Total Calories: {food.servings * food.calories} </b> kcal
  </p>
  <button onClick={handleDelete}>Delete</button>
  </Card>
</Col>



)

}

export default FoodBox;