import React, { Component } from 'react';

class FoodBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: '',
      quantity: 1,
    }
  }

  updateQuantity(event) {
    const quantity = event.target.value;
    console.log(quantity);
    this.setState({
      quantity: quantity,
    })
  }

  addNewHandler(value) {
    const {name, calories} = value;
    const finalCalories = this.state.quantity * calories;
    this.setState({
      name: name,
      calories: finalCalories,
    })
    const newAdd = {name, calories: finalCalories, quantity: this.state.quantity};
    this.props.addTodaysHandler(newAdd);
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
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
                  value={this.state.quantity}
                  onChange={(event) => this.updateQuantity(event)}
                  
                />
              </div>
              <div className="control">
                <button className="button is-info add-button" onClick={() => this.addNewHandler(this.props)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FoodBox;