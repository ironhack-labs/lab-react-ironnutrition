import React from "react"

const Today = (props) => {

    return (
                <li><span>{props.quantity}</span> {props.food} = {props.calories} calorias <button type="button" onClick={() => props.deleteFood(props.food)}><i className="fas fa-trash-alt"></i></button></li>
    )
}



export default Today;
