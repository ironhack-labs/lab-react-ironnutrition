import React, { Component } from "react";

class Foodbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      calories: props.calories,
      image: props.image,
      quantity: props.quantity
    }
    };

  handleSubmit() {
    let {name, calories, image, quantity} = this.state;
    calories = (calories * quantity);
    this.props.totalPerDay({name, quantity, calories})
  }

  render() {
    return (
      <div className="box">
       <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.state.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.name}</strong> <br />
                <small>{this.state.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={this.state.quantity} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleSubmit.bind(this)}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Foodbox;
