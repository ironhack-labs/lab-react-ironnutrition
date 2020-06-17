import React from 'react'

export default function FoodForm(props){
    return(
        <>
        <form onSubmit={props.onAddFood}>
            <label>Name:</label>
            <input name='name' type='text'></input>
            <label>Calories:</label>
            <input name='calories' type="text"></input>
            {/* <button name='image'>Upload image</button> */}
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}