import React from 'react'

function AdFood(props){
    return(
       <form onSubmit={props.onAdd}>
           <input name="foodName" type="text" placeholder="Food Name"></input>
           <input name="foodCalories" type="text" placeholder="Food Calories"></input>
           <input name="foodImage" type="text" placeholder="Food Image"></input>
           <button type='submit'>SUBMIT!</button>
       </form>
        
    )
}

export default AdFood