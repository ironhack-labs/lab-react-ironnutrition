import React  from 'react';

function TotalToday (props) {
    // debugger
    let total = 0;
    props.foodList.forEach((foodItem)=>{
        total+= (foodItem.calories * foodItem.quantity)
    })
    return (
    <h3>Total: {total} cal</h3>
    )
}


export default TotalToday;

