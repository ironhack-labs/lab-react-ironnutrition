import React, { Component } from "react";

class FoodBox extends Component {
  state = {
    quantity: 1,
  };

  //Handler para cambiar la cantidad
  quantityHandler = event => {
    if (event.target.value >= 0) {
      this.setState({
        quantity: event.target.value,
      });
    }
  };

  onChangeMenu = () => {
    this.props.onChangeMenu({
      name: this.props.name,
      calories: this.props.calories,
      quantity: this.state.quantity,
    });
  };

  render() {
    return (
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
                <strong>{this.props.name} </strong> <br />
                <small>{this.props.calories} calorías/100gr</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  type="number"
                  className="input"
                  name="inputQuantity"
                  value={this.state.quantity}
                  onChange={this.quantityHandler}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.onChangeMenu}>
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

export default FoodBox;