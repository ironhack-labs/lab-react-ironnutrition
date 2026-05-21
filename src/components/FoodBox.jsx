import React from 'react'
import {Card, Button} from "antd"

export default function FoodBox({food, onDelete}) {
  return (
    <Card 
    title = {food.name}
    cover = {<img src={food.image} alt={food.name}/>}
    style = {{width:200,margin:16}}
    >
        <p>Calories:{food.calories}kcal</p>
        <p>Servings:{food.servings}</p>

        <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>

        <Button danger onClick={()=> onDelete(food.id)}>Delete</Button>
    </Card>
  )
}
