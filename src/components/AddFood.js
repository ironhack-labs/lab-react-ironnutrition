import React from 'react';

function AddFood(props) {

    return (
        <form onSubmit={props.onAdd}>
            <input name="food" type="text"></input>
            <input name="calories" type="number"></input>
            <input name="urlImg" type="text"></input>
            <button type='submit'>Add food</button>
        </form>
    )
}


export default AddFood