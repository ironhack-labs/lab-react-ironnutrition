import {useState} from "react";
import React from "react";


function AddFood (props) {

    const [inputs, setInputs] = useState(
        {
            name:"", 
            calories:50, 
            image: ""
        })

        const handleInputChange = (e) => {    
        setInputs( (prevState) => ({...prevState, [e.target.name]: e.target.value }));
        }
        
    const handleSubmit = (e) => {
            e.preventDefault();

        const newFood = {
            name: inputs.name, 
            calories: inputs.calories, 
            image: inputs.image
        }

        props.addNewFood(newFood);

        clearForm();
    }
    const clearForm=()=>{
    setInputs({
        name:"", 
        calories:50, 
        image: ""
    })
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <label> Name:
                <input 
                type="text" 
                name="name" 
                value={inputs.name}
                onChange={ handleInputChange}
                />
            </label>
            <label>Calories:
                <input 
                type="number" 
                name="calories" 
                value={inputs.calories}
                onChange={ handleInputChange}
                />
            </label>
            <label> Image:
                <input 
                type="text" 
                name="image"
                value={inputs.image}
                onChange={ handleInputChange}
                />
            </label>
            <button className="button is-info" type="submit">add new food</button>
        </form>
    );
}

export default AddFood; 