import React, { Component } from "react";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import {Form} from "./form.js";

export class Food extends Component {
  constructor(props) {
    super();
    this.state = {
      foods: foods
    };
  }

  render() {
    
    let myFood = this.state.foods.map(ele => {
      return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={ele.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{ele.name}</strong> <br />
                <small>{ele.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={ele.quantity}
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
      </div>
      );
    });
    
   
    return (
      <div>
        <Form formSubmit={food => this.addFood(food)}/>
       {myFood}
        </div>
    )
  }
}
