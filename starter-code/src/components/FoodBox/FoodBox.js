import React, { Component } from "react";
import "./FoodBox.css";

export default class FoodBox extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      quantity: 0
    };
  }

  handleAddIngredient = (ingredient) => {
    this.props.addIngredientList(ingredient);
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <React.Fragment>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.img} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong> <br />
                  <small>{this.props.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    name = 'quantity'
                    value={this.state.quantity}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="control">
                  <button onClick={()=>this.handleAddIngredient({...this.props, calories: this.props.calories * this.state.quantity ,quantity: +this.state.quantity})} className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </React.Fragment>
    );
  }
}
