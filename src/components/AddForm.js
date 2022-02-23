import React from "react";
import { useState } from "react";

function AddForm(props) {

    const { addFood, toggleFormDisplay } = props;

    const [inputs, setInputs] = useState({name: '', calories: 0, image: ''});

    function handleInputs(evnt) {
        const newInputs = {...inputs};
        newInputs[evnt.target.name] = evnt.target.value;
        setInputs(newInputs);
    }

    function submitHandler(evnt) {
        evnt.preventDefault();
        const newFood = {...inputs};
        newFood.quantity = 0;
        addFood(inputs);
        toggleFormDisplay();
    }

    return (
        <form onSubmit={ submitHandler }>
            <label>
                Name
                <input className="input" type="text" name="name" value={ inputs.name } onChange={ handleInputs }/>
            </label>
            <label>
                Calories 
                <input className="input" type="number" name="calories" value={ inputs.calories } onChange={ handleInputs }/>
            </label>
            <label>
                Image Link
                <input className="input" type="url" name="image" value={ inputs.image } onChange={ handleInputs }/>
            </label>
            <button className="button is-info m-2" type="submit">Add to List</button>
        </form>
    )
}

export default AddForm;