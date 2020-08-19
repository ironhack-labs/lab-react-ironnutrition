import React from 'react'
import 'bulma/css/bulma.css';


function AddFood(props) {
    return (
        <div>
            <form onSubmit={props.onAdd}>
            <input name="food" type="text"/>
            <input name="calories" type="number"/>
            <input name="image" type="text"/>
            <button className="button" type="submit">Add food</button>
        </form>
        </div>
    )
}


export default AddFood