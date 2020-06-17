import React from 'react'

export default function Create(props){
    // return (
    //     <div>
    //     <form >
    //         <input name='name' type="text"></input>
    //         <input name='calories' type="text"></input>
    //         <input name='item' type="text"></input>
    //         <button type="submit">Add Item</button>
    //     </form>
    //     <input type="text" ></input>
    //     </div>
    // )
    
    return <form onSubmit={props.callback}>
        <label>Name</label>
        <input  type="text" name="name"></input>
        <label>Calories</label>
        <input  type="number" name="calories"></input>
        <label>Image url</label>
        <input  type="text" name="image"></input>
        <button  type="submit">Submit</button>
    </form>
    
}