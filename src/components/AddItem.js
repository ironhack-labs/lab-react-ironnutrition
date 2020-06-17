import React from 'react';

export default function AddItem(props){
    return (
        <>
            <form onSubmit={props.onAddItem}>
                <input name='image' type="file"></input>
                <input name='item' type="text" placeholder="Name"></input>
                <input name='calories' type="number" placeholder="Calories"></input>
                <button type="submit">Add Item</button>
            </form>
        </>
    )
}