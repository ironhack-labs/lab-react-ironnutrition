import React, { Component } from 'react';

class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    }
    this.addFoodDisplay = this.addFoodDisplay.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value })
  }

  addFoodDisplay() {
    const { name, calories } = this.props;
    const { quantity } = this.state;
    const totalFoodCal = calories * quantity;
    
  }


  render() {
    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name}/>
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
                  name="quantity"
                  value={this.state.quantity}
                  onChange={(e) => this.inputChange(e)}
                />
              </div>
              <div className="control">
                <button onClick={this.addFoodDisplay} className="button is-info">
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
