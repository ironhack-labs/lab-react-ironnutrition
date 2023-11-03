/* eslint-disable no-unused-vars */
// Your code here
/* import "./App.jsx"; */
/* import {useState} from 'react'; */

function FoodBox(props) {

    return(
    <div>
    <p> {props.food.name}</p>

    <img src= {props.food.image}/>
   {/*  <img src={props.food.image} /> */}

    <p> Calories {props.food.calories}</p>
    <p> Servings {props.food.servings}</p>

    <p>
    <b>Total Calories: SERVINGS * CALORIES </b> kcal
    </p>

    <button onClick={() => props.delete(props.food.id)}>Delete</button>
    
</div>
    );
}

export default FoodBox