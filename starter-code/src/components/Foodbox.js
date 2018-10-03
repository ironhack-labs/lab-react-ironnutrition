import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import {FoodForm} from './foodForm.js'

export class Foodbox extends Component {

  constructor(){
    super();
    this.state = {
      enablefoods: true,
        food: foods
    }
}

addFoodToArray(food){
  this.state.foods.unshift(food);
  this.setState({foods:this.state.foods});
}
    
    
    render() {

      console.log(foods)
      
    // const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    return (
<div className="box">

        <div style={{padding:'50px 0'}}>
                <FoodForm formReady={food => this.addFoodToArray(food)}/>
            </div>

{ foods.map((e, i) => {
  return (
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={e.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{e.name}</strong> <br />
          <small>{e.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value="1"
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>

  )
})}
</div>
    );
}
}
