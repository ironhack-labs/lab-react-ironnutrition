import React, {Component} from 'react'
export default function AddNewForm (props){
    return <form onSubmit={props.callback}>
        <label>Name</label>
        <input className="input" type="text" name="name"></input>
        <label>Calories</label>
        <input className="input" type="number" name="calories"></input>
        <label>Image url</label>
        <input className="input" type="text" name="image"></input>
        <button className="button is-info" type="submit">Submit</button>
    </form>
}