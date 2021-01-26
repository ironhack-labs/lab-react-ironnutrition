import React from 'react'

function TotalFood(props){

    const foodList = props.foodItems.map( el => {
        return <li key={Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}>{el.quantity} - {el.item}</li>
        })

    let totalcal = 0;
    props.foodItems.forEach(el => {
        totalcal += (parseInt(el.calories) * parseInt(el.quantity))
    });
    
    return (
        <div>
            <h1>Today's Food</h1>
            {foodList}
            <p>Total:{totalcal} cal</p>

        </div>
        
        

    )
}

export default TotalFood