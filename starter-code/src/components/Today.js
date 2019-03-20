import React from "react"

const Today = (props) => {

console.log(props)

    return (
                <li><span>{props.quantity}</span> {props.food} = {props.calories} calorias</li>
    )
}



export default Today;
