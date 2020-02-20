import React from 'react'

function ShowSelection(props) {
    const arraySelection = props.selection
    return (
        <div>
        {arraySelection.map((food, index) => {
            return <p key={index}>{food.name}</p>
        })}  
        </div>
    )
}

export default ShowSelection
