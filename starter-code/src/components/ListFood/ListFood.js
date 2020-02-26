import React from 'react'

const ListFood=props=>{

    const result = props.quantity* props.calories

    return(
        <li>
            <p>{props.quantity}  {props.name} = {result}</p>
        </li>
    )
}

export default ListFood