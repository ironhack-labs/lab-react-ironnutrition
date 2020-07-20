import React from 'react'

 const FoodForm = (props) => {    
    return (

    <div>
        <form className= "foodForm" onSubmit={props.onSubmit}>
                <label>Name</label>
                <input value={props.value.name} name="Name" onChange={props.onChange}></input>
                <label>Calories</label>
                <input value={props.value.calories} name="calories" onChange={props.onChange}> </input>
                <label>Image</label>
                <input value={props.value.image} name="image" onChange={props.onChange}></input>
                <button type="submit" className="button"> Add Food</button>
        </form>
            
    </div>
    )
}
export default FoodForm