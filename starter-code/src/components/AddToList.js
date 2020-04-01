import React from 'react'

const AddToList = (props) => {
    console.log(props.children)
    return (
        <div>
            <p>{props.children.name}</p>
            <p>{props.children.calories * props.children.quantity}</p>
            <p>{props.children.quantity}</p>
            <p>total: {props.children.calories * props.children.quantity}</p>
        </div>
    )
}



export default AddToList
