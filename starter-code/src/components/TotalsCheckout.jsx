import React from 'react'

export default function TotalsCheckout(props) {

    console.log(props)

    return (
        <div>
           <h1>Today's foods</h1>
<ul>
{props.list.map((food,index)   =>         
    food.quantity > 0 &&  
     ( 
<li key={index} >  {food.quantity} {food.name} {food.calories*food.quantity} cal 
<span  onClick={() => props.deleteFood(food.id) }> <i className="fas fa-trash-alt"></i></span></li>
) 
     )     
     }   
</ul>
<div>Total: {props.calculateTotal()} cal </div>       
        </div>
    )
}
