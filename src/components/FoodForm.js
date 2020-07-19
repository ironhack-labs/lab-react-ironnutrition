import React from 'react'

 const FoodForm = props => {
    return (
        <div>
        <form className= "addFood">
        <label></label>
        <input value={props.value.name} name="name" onChange={props.onChange}></input>
        <label></label>
        <input value={props.value.calories} name="calories" onChange={props.onChange}> </input>
        <label></label>
        <input value={props.value.image} name="image" onChange={props.onChange}></input>
        <label></label>
        <input value={props.value.quantity} name="quantity" onChange={props.onChange}></input>
        <button type="submit" className="button"> Add Food</button>

        </form>
            
        </div>
    )
}
export default FoodForm