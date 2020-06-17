import React from 'react';

export default function AddFood(props){
    return(
    <>
        <form className="form" onSubmit={props.addItem}>
            <input type="text" name="name" placeholder="Name" autoComplete="off"></input>
            <input type="number" name="calories" placeholder="Calories" min="1" autoComplete="off"></input>
            <input type="text" name="image" placeholder="Image Link" autoComplete="off"></input>
            <button type="submit">Add</button>
        </form>
    </>
    )
}