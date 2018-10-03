import React, { Component } from "react";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import SearchBar from "./search.js"
import {Form} from "./form.js";

export class Food extends Component {
  constructor(props) {
    super();
    this.state = {
      foods: foods
    };
  }

  addFood(food){
    this.state.foods.push(food);
    this.setState({food:this.state.foods});
}

searchFood = words => {
  let newFoodList = foods.filter(word =>
    word.name.toLowerCase().includes(words.toLowerCase())
    );
    this.setState({foods: newFoodList});
  };

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
        <SearchBar searchFood={food => this.searchFood(food)} />
        <Form formSubmit={food => this.addFood(food)}/>
       {myFood}
        </div>
    )
  }
}
