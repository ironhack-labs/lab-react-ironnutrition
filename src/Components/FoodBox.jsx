import React, { Component } from 'react';
import FormAddFood from './FormAddFood';

class FoodBox extends Component {
  state = {
    food: this.props.food,
    viewForm: false
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({viewForm: !this.state.viewForm});
  }
  handleAddBtn = (valueFromForm) => {
    this.setState({food: [valueFromForm, ...this.state.food]});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add new food</button>
        {this.state.viewForm && 
        <FormAddFood handleAddBtn={this.handleAddBtn} handleClick={this.handleClick}/>}
        
        {this.state.food.map(foodItem => (
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={foodItem.image} alt={foodItem.name}/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{foodItem.name}</strong> <br />
                    <small>{foodItem.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value={foodItem.quantity} />
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
        ))}
      </div>
    )
  }
}

export default FoodBox;
