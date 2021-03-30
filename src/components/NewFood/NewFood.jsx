import React, { useState } from 'react';
import './NewFood.css'

const FoodForm = (props) => {

    const [ name, setName ] = useState('')
    const [ image, setImage ] = useState('')
    const [ calories, setCalories ] = useState(0)
  
    const onChange = (event) => {
      setName(event.target.value)
      setImage(event.target.value)
      setCalories(event.target.value)
    };
  
    const onSubmitClick = () => {
        const food = { name, image, calories }
        props.onSubmit(food)
    }

    return (
    <div className="FoodForm">
        <div className="field">
        <label className="label">Name</label>
        <div className="control">
            <input
            className="input"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            />
        </div>
        </div>
        <div className="field">
        <label className="label">Calories</label>
        <div className="control">
            <input
            className="input"
            type="number"
            placeholder="100"
            name="calories"
            value={calories}
            onChange={onChange}
            />
        </div>
        </div>
        <div className="field">
        <label className="label">Image</label>
        <div className="control">
            <input
            className="input"
            type="text"
            name="image"
            value={image}
            onChange={onChange}
            />
        </div>
        </div>

        <div className="field is-grouped">
        <div className="control">
            <button className="button is-link" onClick={onSubmitClick}>
            Submit
            </button>
        </div>
        </div>
    </div>
    )
  }
  

  export default FoodForm
