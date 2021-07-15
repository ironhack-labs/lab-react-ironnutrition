import React from "react";

export default function TodaysFoods (props) {

    const {foodState } = props
    const selectedFoods = foodState.filter((food) => food.quantity > 0)
    const calCount = selectedFoods.reduce((calCount, food)=>{return calCount+=food.quantity*food.calories}, 0)
    return <div>
        <ul>
            {
                selectedFoods
                  .map(food =>{
                      return <li>{food.quantity} {food.name} = {(food.quantity*food.calories)} cal</li>} )
            }
        </ul>
        <p>Total: {calCount} cal</p>
    </div>
}