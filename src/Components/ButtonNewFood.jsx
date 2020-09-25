import React from 'react'


function ButtonNewFood(props) {
    return (
        <div className='container py-5'>
            <button onClick={props.onClick} className='button is-primary'>Add new Food</button>
        </div>

    )
}

export default ButtonNewFood



