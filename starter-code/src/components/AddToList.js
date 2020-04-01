import React from 'react'

const AddToList = (props) => {
    return (
        
        
        <div className="borderFood">
            <p>Name: {props.children.name}</p>
            <p>Calories: {props.children.calories}</p>
            <p>Quantity: {props.children.quantity}</p>
            <p>Total:</p>
            </div>
            
    )
}

export default AddToList
