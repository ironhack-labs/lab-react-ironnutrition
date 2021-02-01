import React from "react"
 
 function AddFood(myProps) {
 
 
    return (
        <form onSubmit ={myProps.onAdd} >
            <input name = "name" type= "text" placeholder="Name"/>
            <input name = "calories" type= "number" min= "0" placeholder="Calories"/>
            <input name = "image" type= "text" placeholder="Image URL"/>
            <button type= "submit">Add</button>
        </form>
    )
}
 
export default AddFood
