import React, { useState } from "react";

export default function FoodBox(props) {

    const[formValue, updateFormValue] = useState(1)

    const {food} = props
    
    function handleChange(event){
        updateFormValue(event.target.value)
      }

    function handleClick (){
        food.quantity += parseInt(formValue);
        props.handleTodaysFood()
    }

      
    return <div className="box">
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                <img src= {food.image} alt = "pic not rendering" />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories}</small>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" value={formValue} onChange = {handleChange}/>
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick = {handleClick}>
                        +
                        </button>
                    </div>
                </div>
            </div>
        </article>
    </div>
}