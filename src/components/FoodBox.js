import React, { Component } from 'react';

class FoodBox extends Component {

  state = {
    quantity: this.props.aFood.quantity,
    name: this.props.aFood.name,
    calories: this.props.aFood.calories,
  }

  
  handleQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

  render() {
    const {name, quantity, calories} = this.state
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.aFood.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.aFood.name}</strong> <br />
                <small>{this.props.aFood.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" onChange={ (e, ) => {this.handleQuantity(e)} }/>
              </div>
              <div className="control">
                <button onClick={ () => {this.props.onAdd(name, quantity, calories)} } className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;