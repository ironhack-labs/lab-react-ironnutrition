import React from 'react'

function FoodList(props) {
    return (
       
        
          
          <div className="list card">
             
           <p>{props.food.quantity}</p>
             <p>{props.food.name}</p>
             <p>{props.food.calories}</p>
             <button className="delete" onClick={() => props.handleDeleteFromList(props.food)}></button>
             
           </div>
          
        
        
    
    )
}

export default FoodList
