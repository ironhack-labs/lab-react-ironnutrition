import { Card, Row, Col, Divider, Input, Button } from "antd";


const FoodBox = (props) => {

   const totalCalories = props.calories * props.nrServings
   const foodId = props.id
   console.log(foodId)
   
  return (
    <div>
    <p>{props.name}</p>

    <img src={props.image}/>

    <p>Calories: {props.calories}</p>
    <p>Servings {props.nrServings}</p>


    <p>
        <b>Total Calories: {totalCalories} </b> kcal
    </p>
    <button onClick={()=> props.dltBttn(foodId)}>Delete</button>

      
    </div>
  )
}

export default FoodBox
