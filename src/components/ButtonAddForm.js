import React from 'react'

function ButtonAddForm(props) {
    return (
        <div>
            <button onClick={props.hideOrShow}>Add new food</button>
        </div>
    )
}
export default ButtonAddForm