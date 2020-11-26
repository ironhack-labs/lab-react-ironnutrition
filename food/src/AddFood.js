import useInput from '../hooks/useInput'
import React, { useState } from 'react'
import 'bulma/css/bulma.css';
import foods from './foods.json';


function AddFood ({
    addNewFood
}) { 

//titulos

const nameInput= useInput("")
const Calories= useInput("")
const foodQuant= useInput("")

function handleFormSubmit(event) {
    addNewFood({
        name: nameInput.value,
        calories: Calories.value,
        quantity:foodQuant.value
    })
}
return(
    <div onSubmit={handleFormSubmit}>
<div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src="https://i.imgur.com/eTmWoAN.png" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
          <label>Name:</label><input type="text" name="name" {...nameInput}/><br />
          </p>
        </div>
          <label>calories:</label><input type="text" name="calories" {...Calories}/><br/>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="number" value="{foodQuant}" />
          </div>
          <div className="control">
            <button className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
  </div>
    )

}

export default AddFood