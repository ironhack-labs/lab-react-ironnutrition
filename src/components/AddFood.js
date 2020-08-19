import React from 'react'



function AddFood(props) {
    return(
        <form onSubmit={props.onAdd}>
            <input name='foodName' type='text' placeholder='Food name'></input>
            <input name='foodCalories' type='text' placeholder='Calories'></input>
            <input name='foodImage' type='text' placeholder='Image link'></input>
            <input name='foodQuantity' type='text' placeholder='Quantity'></input>
            <button type="submit" className="button is-info">Submit</button>
        </form>
    )
}

export default AddFood