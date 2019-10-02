import React, { Component } from "react";
import AddButton from "./AddButton";

class Foodbox extends Component {
  
    addItem = () => {
        this.props.addItemFunction();
    }
  
    render() {
    return (
      <div className="box">
        <article className="media" key={this.key}>
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" placeholder="0" />
              </div>
              <div className="control">
                <AddButton addItem={this.addItem} />
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Foodbox;
