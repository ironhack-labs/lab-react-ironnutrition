import React, { Component } from "react";
import App from "../App";

export default class FoodBox extends App {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      // image: '',
      // calories: '',
      // quantity: '',
      showForm: false
    };
  }

  formToggler() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return (
      <div>
        {this.state.showForm ? 
        (
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={props.image} alt="" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{props.name}</strong> <br />
                    <small>{props.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ) 

        : null}
        
        <button onClick={() => this.formToggler()}>Add Food</button>
      </div>
    );
  }
}
