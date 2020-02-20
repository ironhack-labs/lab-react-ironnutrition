import React from 'react'
import Input from './Input'

function Form(props) {
    return (
        <div>
        <Input 
        type="text" 
        placeholder="Food Name" 
        name="name" 
        value={props.value}
        onChange={props.handleInputs}
        />
        <Input 
        type="number" 
        placeholder="Calories" 
        name="calories" 
        value={props.value}
        onChange={props.handleInputs} 

        />
        <Input 
        type="text" 
        placeholder="Image" 
        name="image" 
        value={props.value}
        onChange={props.handleInputs}
        />
        <button onClick={props.submitFood}>Add Food</button>


        </div>
    )
}

export default Form