import React from 'react'

const AddToList = (props) => {
    console.log(props);
    return (
        <div className="listmenu">
    
            <p>Name: {props.children.name}</p>
            <p>Calories: {props.children.calories}</p>
            <p>Quantity: {props.children.quantity}</p>
          
        </div>
    )
}

export default AddToList
