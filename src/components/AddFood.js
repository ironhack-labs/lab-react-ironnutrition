import React from 'react'


function Addfood(props) {
    return (
            <form onSubmit={props.onAdd}>
                <input name="item" type="text"></input>
                <button type="submit">Add Food</button>
            </form>
    )
}

export default Addfood