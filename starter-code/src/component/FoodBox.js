import React, { Component } from 'react';


class Foodbox extends React.Component {
  state = {
    quantity : 0
  }

handleQuantity = () => {
  this.setState({quantity: this.state.quantity + 1})
}

addButton = () => {
  this.PaymentResponse.add({
    name: this.props.food.name,
		calories: this.props.food.calories,
		quantity: this.state.quantity
		})
	}

render(){
  return (
    <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
      <img src={this.props.food.image} alt="..."/>
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
      <div className="field has-addo ns">
        <div className="control">
          <input
            className="input"
            value={this.state.quantity}
						onChange={this.handleQunatity}
          />
        </div>
        <div className="control">
        <button className="button is-info" onClick={this.addButton}>

            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
  )}

}


export default FoodBox;