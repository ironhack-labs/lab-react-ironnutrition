import React, { useState } from 'react';
import './NewFood.css'

const NewFood = (props) => {
    const [ name, setName ] = useState('')
    const [ calories, setCalories ] = useState(0)
    const [ image, setImage ] = useState('')
    
    // Querido Manuel,
    // He intentado modularizar las tres funciones 
    // como en los componentes de clase, he fallado compi.
    const onNameChange = (event) => {
        setName(event.target.value)
    };
    const onCaloriesChange = (event) => {
        setCalories(event.target.value)
    };
    const onImageChange = (event) => {
        setImage(event.target.value)
    };
    
    const onSubmitClick = () => {
        const food = { name, image, calories }
        props.onSubmit(food)
    }

    return (
    <div className="NewFood">
        <hr></hr>
        <div className="fieldForm">
            <label>Name</label>
            <div className="imputForm">
                <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onNameChange}
                />
            </div>
        </div>

        <div className="fieldForm">
            <label>Calories</label>
            <div className="imputForm">
                <input
                type="number"
                placeholder="100"
                name="calories"
                value={calories}
                onChange={onCaloriesChange}
                />
            </div>
        </div>

        <div className="fieldForm">
        <label>Image</label>
        <div className="inputForm">
            <input
            type="text"
            name="image"
            value={image}
            onChange={onImageChange}
            />
        </div>
        </div>

        <button onClick={onSubmitClick} className="btn-searchbar">
        Submit
        </button>
    </div>
    )
  }
  

  export default NewFood
