import React, { useState } from 'react';

const AddFoodForm = (props) =>{  
    const {addFood} = props  //then state order
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const nameChangeHandler = (event) =>{   // chaging states functions per element
        setName(event.target.value) // event? connected to the the input. target? value?
    }
    const imageChangeHandler = (event) =>{
        setImage(event.target.value)
    }
    const caloriesChangeHandler = (event) =>{
        setCalories(event.target.value)
    }
    const servingChangeHandler = (event) =>{
        setServings(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault() // preventDefault is saved fuction? created by react for forms

        const newFood1 = { 
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }
        addFood(newFood1)  // calling onNewFood with the object
       
       setName("")
       setImage("")
       setCalories("")
       setServings("")
    }
    return (  // first start creating the form with the onchange and type
        <form onSubmit={submitHandler}>
            <div>
                <label>
                    Name
                </label>
                <input value={name} type="text" onChange={nameChangeHandler} />
            </div>
            <div>
                <label>
                    Text
                </label>
                <input value={image} type="text" onChange={imageChangeHandler} />     
            </div>
            <div>
                <label>
                    Calories
                </label>
                <input value={calories} type="number" onChange={caloriesChangeHandler} />
            </div>
            <div>
                <label>
                    Servings
                </label>
                <input value={servings} type="number" onChange={servingChangeHandler} /> 
            </div>
            <div>
                <button type="submit">Add</button>
            </div> 
        </form>
    )
}
export default AddFoodForm