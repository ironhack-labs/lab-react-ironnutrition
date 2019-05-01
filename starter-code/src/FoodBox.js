import React from 'react';
import foods from './foods.json';

class FoodBox extends React.Component {
  constructor() {
    super();
    this.state = {
      name: foods[0].name,
      calories: foods[0].calories,
      image: foods[0].image,
      quantity: foods[0].quantity
    }
  }

  changeQuantity(e) {
    const theQuantity = e.target.value;

    this.setState({
      ...this.state,
      quantity: theQuantity
    })
    console.log(theQuantity)
  }

  // increaseQuantityFood(e) {
  //   e.preventDefault();

  //   console.log("hola")

  // }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="img" />
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
                  onChange={(e) => this.changeQuantity(e)}
                  min="0"
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={(e) => this.increaseQuantityFood(e)}>
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