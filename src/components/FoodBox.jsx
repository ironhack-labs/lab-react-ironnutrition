import React, { Component } from 'react';

export default class FoodBox extends Component {
  img = {
    width: 64,
  };

  state={
    meal : "",
    value:1, 
    calories : 0
  }

  HandleChange = (event) => {
    this.setState({meal : this.props.food.name})
    this.setState({calories : this.props.food.calories})
    this.setState({value : event.target.value})
  };

  HandleClick=(event)=>{
    this.props.addQuantity({quantity : this.state.value, meal: this.state.meal, calories: this.state.calories})
    this.setState({    meal : "", value:1, calories : 0})
  }
  render() {
    return (
      <div className="box" key={this.props.food.index}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img  style={this.img}  src={this.props.food.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.value}
                  onChange={this.HandleChange}
                />
              </div>
              <div className="control">
                <button onClick = {this.HandleClick}  className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
