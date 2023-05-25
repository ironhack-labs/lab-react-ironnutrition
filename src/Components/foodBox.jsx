
import {Card, Col} from 'antd';
import { useState } from "react";
/* import foodsListJson from "./foods.json" */


function FoodBox(props) {
/* let [foods,setFoods]= useState(foodsListJson)
let [showFoods,setShowFoods] = useState(true); */


/* let toggleShowFoods =()=>{
    setShowFoods(!showFoods);
  }  */

{/* <button onClick={toggleShowFoods}>{showFoods?'Hide':'Show'}</button>
            {showFoods && foods.map(foods=>{ */}


    return (
      <Col>
        <Card
          title={props.food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.food.image} height={60} alt="food" />
          <p>Calories: {props.food.calories}</p>
          <p>Servings: {props.food.servings}</p>
          <p>
            <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
          </p>
          <button>Delete</button>
        </Card>
      </Col>
    );
  }/* )}} */
  
  export default FoodBox