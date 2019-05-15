import React, { Component } from "react";
import "bulma/css/bulma.css";
 import foods from "./foods.json";

class Foodbox extends Component {
  state = {
    name:this.props.foodProp.name,

  }

  incrementItem = (e) => {
    console.log(e.target.value)
    let totalCalories = this.props.foodProp.calories * e.target.value;
    this.setState({
      totalCalories,
      quantity: e.target.value
    })
  }

  addToList = () => {
    this.props.addToAppList(this.state)
  }

  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.foodProp.image}/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.foodProp.name}</strong> <br />
                  <small>{this.props.foodProp.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input onChange={this.incrementItem} className="input" type="number" />
                </div>
                <div className="control">
                  <button onClick={this.addToList} className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Foodbox;
