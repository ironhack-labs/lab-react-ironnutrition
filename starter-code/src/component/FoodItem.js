import React, { Component } from 'react';

class FoodItem extends Component {

   state = {
     quantity: 0
   } 

   handleInput = (event) => {
    this.setState({
      quantity: event.target.value
    })
   }
  render() {
    const {name, image, calories} = this.props
    const food = {
      name: name,
      calories: calories,
      quantity: this.state.quantity
    }
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                className="input"
                type="number" 
                onChange={this.handleInput}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={(event)=>{
                  this.props.todayFoods(event, food)
                }}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodItem;