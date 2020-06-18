import React, {Component} from 'react'

export default function AddFood(props){


    return(

        <div>
            <button onClick={props.addForm}>Add Food</button>

            {
            props.showSection && <form onSubmit={props.addFood}>
                <input name="image" type="file"></input>
                <input name="name" type="text" placeholder="Name"></input>
                <input name="calories" type="number" placeholder="Calories"></input>
                <button type="submit">Add Item</button>
            </form>
        }
        <input type="text" onChange={props.onFilter}></input>
   
        
        </div>
    )
}