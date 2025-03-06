// Your code here

import React from 'react'

function FoodBox(props) {

    const totalCalories = props.food.servings * props.food.calories;

    //console.log(props.indice)


    // Para eliminar un elemento, hacemos un clon de la lista con slice y con splice lo quitamos. El indice nos dice cúal elemento es el que debemos eliminar.
    // Con setAllFood actualizamos el Estado de la lista.
    const pulsarDelete = () => {
        let clone = props.allFood.slice(0);
        clone.splice(props.indice,1);
        props.setAllFood(clone);
    }

    
  return (
    <div style={{border: "0.5px solid lightgrey", margin: "10px"}}>
    <h2>{props.food.name}</h2>
  
    <img src={props.food.image} alt="foto-comida" width="400px" />
  
    <p>Calories: {props.food.calories}</p>
    <p>Servings {props.food.servings}</p>
  
    <p>
      <b>Total Calories: {totalCalories} </b> kcal
    </p>
  
    <button onClick={pulsarDelete} style={{border: "0.5px solid black", backgroundColor: "lightgray", marginBottom: "5px"}}>Delete</button>
  </div>
  )
}

export default FoodBox
