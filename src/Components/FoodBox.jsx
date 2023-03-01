import React from 'react'
import { Card, Col, Button} from 'antd';
import foodsJSON from "../foodsJSON.json";

// Iteration 2
function FoodBox(props) {

  const [foodList, setFoodList] = useState(foodsJSON);


    const {food} = props;

    /* console.log(food.name) */

  return <Col>
  <Card
    title={food.name}
    style={{ width: 230, height: 300, margin: 10 }}
  >
    <img src={food.image} height={60} alt="food" />
    <p>Calories: {food.calories}</p>
    <p>Servings: {food.servings}</p>
    <p>
      <b>Total Calories: {food.calories * food.servings}  </b> kcal
    </p>

    {foodList.map((food) => {
      return (
        food={food} deleteFood={}
      )
    })}
    <button type="primary" onClick={() => deleteFood(food.name)}> Delete </button>
  </Card>
</Col>

}

export default FoodBox

