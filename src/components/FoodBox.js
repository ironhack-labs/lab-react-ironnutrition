import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    name: '',
    calories: 0,
    quantity: 0,
  }
  
  addToToday = (event) => {
    event.preventDefault();
    this.setState({
      name: this.props.food.name,
      calories: this.props.food.calories,
      quantity: this.props.food.quantity,
    });
    this.props.addToToday(this.state);
    console.log("name", this.props.food.name)
    console.log("calories", this.props.food.calories)
    console.log("quantity", this.props.food.quantity)
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.food.image} />
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
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onSubmit={(e) => this.addToToday(e)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default FoodBox;
